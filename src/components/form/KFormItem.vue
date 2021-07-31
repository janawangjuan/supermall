<template>
	<div>
		<!-- label显示 -->
		<label v-if="label">{{label}}</label>
		<!-- 显示内部表单元素 -->
		<slot></slot>
		<p v-if="error" class="error">{{error}}</p>
	</div>
</template>

<script>
	import Schema from 'async-validator'
	import emitter from '../../mixins/emitter.js'
	export default {
		comonentName:'KFormItem',
		inject:['form'],
		mixins:[emitter],
		props: {
			label: {
				type: String,
				default: ''
			},
			prop:{
				type:String,
				default:''
			}
		},	
		data() {
			return {
				error: ''
			}
		},
		mounted() {
			this.$on('validate',()=>{
				this.validate()
			})
			// 派发事件通过KForm,新增一个KFormItem实例
			if(this.prop){
				this.dispatch('KForm','wj.form.addFileds',[this])
			}
		},
		methods: {
			validate() {//校验，使用async-validator校验
				// 获取校验规则和当前数据
				const rules = this.form.rules[this.prop]
				const value = this.form.model[this.prop]
				const schema = new Schema({[this.prop]:rules})
				// 返回promise,全局统一处理
				return schema.validate({[this.prop]:value},errors=>{
					if(errors){
						this.error = errors[0].message
					}else{
						this.error = ''
					}
				})
			}
		},
	}
</script>

<style scoped>
	.error{color: #f00;}

</style>
