<template>
	<div>
		<h1>子组件Child2</h1>
		<h4>{{$attrs.fath}}----</h4>
		<button @click="sendTochild1">发送消息</button>
		<!-- inject/provide传值 -->
		<p>inject/provide功能 ：{{bar}}</p>
	</div>
</template>

<script>
	export default{
		inject:['bar'],
		data(){
			return{
				
			}
		},
		methods:{
			sendTochild1(){
				// 利用总线发送事件
				// this.$parent.$emit('event-from-child2','form child2 string')
				this.$emit('third')
			}
		}
	}
</script>

<style>
</style>
