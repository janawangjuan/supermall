<template>
	<div>
		<h4>父组件内容</h4>
		<!-- 属性展开 -->
		<Child2 v-bind="$attrs" v-on="$listeners"></Child2>
	</div>
</template>

<script>
	import Child2 from './child2.vue'
	export default {
		data(){
			return{
				
			}
		},
		components:{
			Child2
		},
		methods:{},
		mounted(){
			
		}
	}
</script>

<style scoped>

</style>
