<template>
	<div @click="$emit('some-event','msg from child1')">
		<h1>子组件Child1</h1>
		{{msg}}
	</div>
</template>

<script>
	export default{
		props:{
			msg:{
				type:String,
				defatult:''
			}
		},
		mounted(){
			/* this.$bus.$on('event-from-child2',msg=>{
				console.log('Child1++++',msg)
			}) */
			this.$parent.$on('event-from-child2',msg=>{
				console.log('Child1++++',msg)
			})
			
			
			
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
</style>
