<template>
	<div>
		<input :value="value"  @input="onInput" v-bind="$attrs" >
	</div>
</template>

<script>
	import emitter from '../../mixins/emitter.js'
	export default {
		inheritAttrs:false,
		mixins:[emitter],
		props:{
			value:{
				type:String,
				default:''
			}
		},
		data() {
			return {
			}
		},
		methods: {
			onInput(e) {
				this.$emit('input',e.target.value)
				// this.$parent.$emit('validate')
				this.dispatch("KFormItem","validate")
				
			}
		},
	}
</script>

<style scoped>

</style>