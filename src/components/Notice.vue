<template>
	<div class="bg" v-if="isShow">
		<div class="inner">
			<h2>{{title}}</h2>
			<p>{{message}}</p>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.bg{width: 100%;height: 100%;position: fixed;left: 0;top:0;background-color: rgba(0,0,0,0.4);text-align: center;}
	.inner{
		position: absolute;padding: 30px;
		background-color: #fff;width: 80%;box-sizing: border-box;
		/* left:0;top:0; */
		left:50%;top: 50%;transform: translate(-50%,-50%);
	}
</style>