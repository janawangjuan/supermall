<template>
	<div class="fix-bottom">
		
	</div>
</template>

<script>
export default {
	name:'TabBar',
	data(){
		return{

		}
	},
	methods:{

	}
}
</script>

<style>
	.fix-bottom{position: fixed;display: flex; left:0;right: 0;bottom: 0;background-color: #f6f6f6;box-shadow: 0 -1px 3px rgba(0,0,0,0.2);align-items: center;}
	.fix-bottom .tab-item{flex: 1; text-align: center; height: 49px;}
</style>