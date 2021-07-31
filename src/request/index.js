// import Vue from 'vue'
import axios from 'axios'

export default (config)=>{
	const instance = axios.create({
		baseURL:'https://m.zbgedu.com',
		timeout:4000
	})
	instance.interceptors.request.use((config)=>{
		return config
	})
	instance.interceptors.response.use((res)=>{
		return res.data
	})
	return instance(config)
  

}