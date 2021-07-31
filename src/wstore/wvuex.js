// 实现插件
let WVue;
class Store{
	constructor(options) {// 响应式
		this.state = new WVue({
			data:options.state
		})
	}
}
function install(Vue){
	WVue = Vue
	// 混入
	Vue.mixin({
		beforeCreate(){
			if(this.$options.store){
				Vue.prototype.$store = this.$options.store
			}
		}
	})
}
export default {Store,install}