<template>
	<div>
		<h1>组件通讯</h1>
		<Child1 msg="some msg--child1" @some-event="onSomeEvent"></Child1>
		<!-- 事件总线 -->
		<!-- <Child2 title="标题attr内容"></Child2> -->
		<!-- 第二层组件 -->
		<Parent fath='来自第一层级的标题' @third="thridEvent"></Parent>
	</div>
</template>

<script>
	import Child1 from './child1.vue'
	// import Child2 from './child2.vue'
	import Parent from './parent.vue'
	export default{
		provide(){
			return{
				bar:'夸多组件传值----gra'
			}
		},
		mounted(){
			
		},
		components:{
			Child1,
			// Child2,
			Parent
		},
		data(){
			return{
				
			}
		},
		methods:{
			onSomeEvent(msg){
				console.log('Communition:--',msg)
			},
			thridEvent(){
				console.log('第一层事件触发')
			}
		}
	}
</script>

<style>
</style>
