import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count:0,
    sutdent:[
      {age:'11',name:'lily'},
      {age:'13',name:'jana'},
      {age:'14',name:'jon'}
    ],
    infor:{
      name:'wangjuan',
      age:'12'
    }
  },
  mutations: {
    add(state){
      state.count = state.count+1
    },
    changename(state){
      state.infor.name="uiui"
    }
  },
  actions: {
    change(context,payload){
      console.log(payload,'///')
      setTimeout(() => {
        context.commit('changename')
      }, 1000);
    }
  },
  modules: {
  },
  getters:{
    doubStu(state){
      return state.count = state.count+200
    },
    stuAge(state){
      return function(age){
       return state.sutdent.filter(s=>s.age>age) 
      }
    }
  }
})


export default store