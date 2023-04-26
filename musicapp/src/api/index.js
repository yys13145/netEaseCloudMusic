import axios from 'axios'

// 0: pc 1: android 2: iphone 3: ipad
export function getBanner(type=1){
    return axios.get(`http://localhost:3000/banner/type=${type}`) 
}