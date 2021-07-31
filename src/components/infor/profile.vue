<template>
	<div>
		<h2>profile</h2>
		<h4>{{$route.query.name}}</h4>
		<h4>{{$route.query.age}}</h4>
		<router-link to="/profile/news">news列表</router-link>
		<router-link to="/profile/message">message列表内容啊</router-link>

		<keep-alive>
			<router-view/>
		</keep-alive>
	</div>
</template>

<script>
export default {
	name:'profile',
	data(){
		return{
			childPath:'/profile/news'
		}
	},
	created(){
		// this.$router.push('/profile/news')
	}, 
	activated(){
		console.log('profile创建之后---')
		this.$router.push(this.childPath)
	},
	beforeRouteLeave(to,form,next){
		this.childPath = this.$route.path
		next()
	},
	methods:{
		
	}
}
</script>

<style>

</style>