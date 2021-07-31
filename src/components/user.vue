<template>
	<div>
		<h2>用户组件</h2>
		<h3> count的值{{$store.state.count}}</h3>
		<p><button @click="addCount">点击添加++</button></p>
		<p>加100的coung:{{$store.getters.doubStu}}</p>
		<p>{{$store.getters.stuAge(12)}}</p>
		<p>{{$store.state.infor}}</p>
		<button @click="change">修改姓名</button>
	</div>
</template>

<script>
export default {
	name:'User',
	data(){
		return{

		}
	},
	created(){

	},
	methods:{
		addCount(){
			this.$store.commit('add')
		},
		change(){
			this.$store.dispatch('change','我是payload')
		}
	},
	mounted(){
		console.log(this.$route.params.id)
	}
}
</script>

<style>

</style>