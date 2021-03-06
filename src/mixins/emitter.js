// 广播：自上而下派发事件，
function broadcast(componentName,eventName,params){
	this.$children.forEach(child=>{
		var name= child.$options.componentName
		if(name===componentName){
			child.$emit.apply(child,[eventName].concat(params))
		}else{
			broadcast.apply(child,[componentName,eventName].concat(params))
		}
	})
}
export default{
	methods:{
		// 冒泡查找
		dispatch(componentName,eventName,params){
			var parent = this.$parent||this.$root
			var name= parent.$options.componentName
			// 向上查找直到 相同名称
			while(parent&&(!name||name!=componentName)){
				parent = parent.$parent
				if(parent){
					name = parent.$options.componentName
				}
			}
			if(parent){
				parent.$emit.apply(parent,[eventName].concat(params))
			}
		},
		broadcast(componentName,eventName,params){
			broadcast.call(this,componentName,eventName,params)
		}
	}
}