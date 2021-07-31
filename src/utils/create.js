/*
 弹框（多例）
 import Vue from 'vue'
// 传入一个组件配置
// 创建它的实例，并且将它挂载到body上
export default function create(Component,props){
	 
	const vm = new Vue({
		render(h){
			return h(Component,{props})
		}
	}).$mount()//$mount本质上将vdom=>dom
	// 通过vm.$el获取生成的dom
	document.body.appendChild(vm.$el)
	
	// 删除函数，获取组件实例
	const comp = vm.$children[0]
	comp.remove =()=>{
		document.body.removeChild(vm.$el)
		vm.$destroy()
	}
	return comp
} */

//单例弹框
import vue from "vue";
import toast from "../components/Notice.vue";
// 组件构造器，构造出一个 vue组件实例
const ToastConstructor = vue.extend(toast);
function showToast({title, message, duration = 1000 }) {
  this.toastDom = new ToastConstructor({
    el: document.createElement("div"),
    data() {
      return {
			title:title,
			isShow: true, // 是否显示
			message: message, // 文本内容
      };
    }
  });
  // 添加节点
  document.body.appendChild(this.toastDom.$el);
  // 过渡时间
  setTimeout(() => {
    this.toastDom.isShow = false;
  }, duration);
}
// 全局注册
function registryToast() {
  vue.prototype.$toast = showToast;
}
export default registryToast;