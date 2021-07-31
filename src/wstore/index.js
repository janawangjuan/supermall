import Vue from 'vue'
// import Vuex from 'vuex'
// 引入自定义vuex
import Vuex from './wvuex.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {counter:1},
	mutations: {
		add(state){
			state.counter++
		}
	},
	actions: {
		add({commit}){
			setTimeout(()=>{
				commit('add')
			},1000)
		}
	},
	modules:{
		
	},
})
