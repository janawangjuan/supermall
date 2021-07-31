<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
	// 1.props, model, rules
	//2.validate()校验提示
	export default {
		componentName:'KForm',
		provide(){
			return{
				form:this //这里传递的是表单组件实例
			}
		},
		props: {
			model: {
				type: Object,
				require:true
			},
			rules:Object
		},
		created(){
			this.fields = []
			this.$on('wj.form.addFileds',item=>{
				this.fields.push(item)
			})
		},
		methods: {
			validate(cb) {//全局校验方法（所有input）
				// 执行内部所有FormItem校验方法，统一处理结果
				// 将formitem数组转化成promise数组
				
				// 方法一
				/* const tasks =  this.$children
				.filter(item=>item.prop)
				.map(item=>item.validate()) */
				
				// 方法二
				const tasks = this.fields.map(item=>item.validate())
				
				Promise.all(tasks)
				.then(()=>{cb(true)})
				.catch(()=>cb(false))
			}
		},
	}
</script>

<style scoped>

</style>