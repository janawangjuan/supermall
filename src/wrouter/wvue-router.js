// 插件，实现一个install方法
let WVue;
class WVueRouter{
	constructor(options) {
		// 响应式api util.defineReactive
		const initial = window.location.hash.slice(1)||'/'
		WVue.util.defineReactive(this,'current',initial)
		this.$options = options
		// 监听事件
		window.addEventListener('hashchange',this.onHashChange.bind(this))
		window.addEventListener('load',this.onHashChange.bind(this))
		
		// 缓存path与route映射关系
		this.routeMap = {}
		this.$options.routes.forEach(route=>{
			this.routeMap[route.path] = route
		})
	}
	// 
	onHashChange(){
		this.current=window.location.hash.slice(1)
	}
}

// 形参是Vue构造函数
WVueRouter.install = function(Vue){
	console.log('----')
	// 保存构造函数
	WVue = Vue
	// 挂载$router
	Vue.mixin({
		beforeCreate(){
			// 全局混入，将来在组件实例化的时候执行，此时router实例已经存在了
			// this指的是组件实例
			if(this.$options.router){
				// 挂载
				Vue.prototype.$router = this.$options.router
			}
		}
	})
	// 实现全局组件
	Vue.component('router-link',{
		props:{
			to:{
				type:String,
				default:''
			}
		},
		render(h){
			// h是createElement函数
			return h('a',{attrs:{href:'#'+this.to}},this.$slots.default)
		}
	})
	Vue.component('router-view',{
		render(h){
			
			/* 方法一
			const routes = this.$router.$options.routes
			const current = this.$router.current
			const route = routes.find(route =>route.path==current)
			const comp = route?route.component:null
			return h(comp) */
			
			const {routeMap,current} = this.$router
			const comp = routeMap[current]?routeMap[current].component:null
			return h(comp)
		}
	})
	
}

export default WVueRouter