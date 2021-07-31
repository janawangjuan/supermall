<template>
<div class="home">
	<h3>home组件内的子路由</h3>
	
	

	<h3>组件</h3>
	<hr/>
	<h3>自定义指令</h3>
	<input type="text" v-focus placeholder="自定义聚焦">
	<p v-border>自定义红色边框</p>
	<hr/>
	<h3>过滤器,不改变原来数据，格式处理，区别于 计算</h3>
	<p><span>jerry</span> <span>{{"jerry" | capitalize(1)}}</span> </p>
	<hr/>
	<h3>过渡动画</h3>
	<button @click="isShow=!isShow">过渡按钮</button>
	<transition name="slide-fade" >
		<p  v-show="isShow" v-bind:style = "styleobj">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eligendi praesentium repellendus consequatur dolorem architecto ut temporibus illum impedit accusantium quam et ad aliquam nesciunt reiciendis voluptates odit laudantium unde.</p>
	</transition>
	
	<hr/>
	<h3>生命周期</h3>
	<p><button @click="destoryT">销毁某元素</button></p>
	<p v-show="isShow">切换展示</p>
	<hr/>
	<h3>遍历，排序</h3>
	<input type="text" v-model="name">
	<input type="text" v-model="age">
	<input type="text" v-model="fullName">
	<p>双向绑定，修改依赖值，此处会修改</p>
	<input type="text" v-model="fullName1">
	<p>{{fullName1}}</p>
	<input type="text" placeholder="输入搜索" v-model="searchName">
	<ul>
		<li v-for="(item,index) in filterPerson" :key="item.id">{{item.name}}-----{{item.age}}--- <button @click="deleteItem(index)">删除</button>---- <button @click="updata(index,item.age)">更新</button></li>
	</ul>
	<p><button @click="sortType=1">按年龄升序</button>  <button  @click="sortType=2">年龄降序</button>  <button  @click="sortType=0">原顺序</button></p>
	<br/>
	<hr/>
	<!-- 表单 -->
	<form @submit.prevent="submitForm">
		<p>用户名: <input type="text" v-model="user.name"></p>
		<p>密码： <input type="text" v-model="user.pwd"></p>
		<p>性别： <input type="radio" value="man" v-model="user.sex">男  <input type="radio" value="woman" v-model="user.sex">女</p>
		<p>爱好： <input type="checkbox" v-model="user.likes" value="bask">篮球 <input type="checkbox" v-model="user.likes" value="foot">足球  <input type="checkbox" value="pp" v-model="user.likes">乒乓 </p>
		<p>城市: <select v-model="user.city">
					<option value="BJ">BJ</option>
					<option value="NJ">NJ</option>
				</select>
		</p>
		<p>
			<button type="submit">注册</button>
		</p>
	</form>
  </div>
  
</template>

<script>

export default {
	name: 'Home',
	data(){
		return{
			name:'jerry',
			searchName:'',
			sortType:0,// 0：原顺序，1升序，2降序
			age:19,
			persons:[
				{id:1,name:'tom',age:19},
				{id:2,name:'jerry',age:16},
				{id:3,name:'elosa',age:15},
				{id:4,name:'alisay',age:18}
			],
			user:{
				name:'',
				pwd:'',
				sex:'man',
				likes:['foot'],
				city:'NJ'
			},
			isShow:true,
			styleobj :{
				fontSize:'30px',
				color:'red',
			}
		}
	},
	// 页面挂载后，执行一次
	mounted(){
			this.getCity()
		// this.inTerval = setInterval(()=>{
		// 	this.isShow = !this.isShow
		// },1500)
	},
	// 销毁前执行一次
	beforeDestroy() {
		// clearInterval(this.inTerval)
	},
	// data更新之前
	beforeUpdate(){
		
	},
	updated(){
		// data更新后
	},
	// 组件销毁
	destroyed(){
		// console.log('home组件销毁后')
	},
	// 实现数据代理，可以通过vm/this读取data中的值
	created(){
		// console.log('home组件创建后')
	},
	// 过滤器
	filters:{
		capitalize: (value,type)=>{
			if(!value) return ''
			value = value.toString()
			if(type==1){
				return value.toUpperCase()
			}else{
				return value.charAt(0).toUpperCase() +value.slice(1)
			}
			
		}
	},
	//自定义指令
	directives:{
		focus:{
			inserted:(el)=>{
				el.focus()
			}
		},
		border:{
			inserted:(el)=>{
				el.style.border='1px solid red'
			}
		}
	},
	computed: {
		filterPerson(){
			const {sortType,persons,searchName} = this
			let arr = persons.filter(p=>p.name.indexOf(searchName)!=-1)
			if(sortType!==0){
				arr.sort((p1,p2)=>{
					if(sortType==1){
						return p2.age-p1.age
					}else{
						return p1.age-p2.age
					}
					
				})
			}
			return arr
		},
		fullName() {
			return this.name+'-'+this.age
		},
		fullName1: {
			get(){
				return this.name+'-'+this.age
			},
			set(value){
				const svalue = value.split('-')
				this.name = svalue[0]
				this.age = svalue[1]
			}
		}
	},
	methods:{
		getCity(){
			this.$axios({
				url:'/shop_machine/Machine/_getksortdata',
			}).then(res=>{
				console.log(res)
			})
		},
		deleteItem(index){
			this.persons.splice(index,1)
			console.log(index,'-----')
		},
		addItem(){
			let newItem = {
				name:'lili',
				age:12,
				id:this.persons.length+1
			}
			this.persons = [...this.persons,newItem]
		},
		updata(index,age){
			this.persons[index].age=age+2
		},
		submitForm(){
			console.log(this.user)
		},
		destoryT(){
			this.$destroy()
		}
	}
}
</script>

<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
