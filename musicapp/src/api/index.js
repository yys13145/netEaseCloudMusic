import axios from 'axios'

let baseUrl = 'http://localhost:3000'
// 0: pc 1: android 2: iphone 3: ipad
export function getBanner(type=1){
    return axios.get(`${baseUrl}/banner?type=${type}`) 
}

// 获取推荐歌单
export function getMusicList(limit=10){
    return axios.get(`${baseUrl}/personalized?limit=${limit}`) 
}