<template>
	<div>
		<KForm :model="model" :rules="rules" ref="loginFrom">
			<!-- 组件最外层 -->
			<KFormItem label="用户名" prop="username">
				<KInput type="text" v-model="model.username" placeholder="请输入用户名"></KInput>
			</KFormItem>
			<KFormItem label="密码" prop="password">
				<KInput type="password" v-model="model.password" placeholder="请输入密码"></KInput>
			</KFormItem>
			<KFormItem >
				<button @click="loginIn">登录</button>
			</KFormItem>
		</KForm>
	</div>
</template>

<script>
	import KForm from './KForm.vue'
	import KFormItem from './KFormItem.vue'
	import KInput from './KInput.vue'
	
	export default {
		data() {
			return {
				model:{
					username:'tom',
					password:''
				},
				rules:{
					username:[{required:true,message:'请输入用户名'}],
					password:[{required:true,message:'请输入密码'}]
				}
			}
		},
		components:{
			KInput,
			KFormItem,
			KForm
		},
		methods: {
			loginIn() {
				this.$refs.loginFrom.validate(isValid=>{
					this.$toast({
						title:isValid?'恭喜':'抱歉',
						message: isValid?"验证通过":'参数有误',
						duration:1200
					});
				})
			}
		},
	}
</script>

<style scoped>

</style>