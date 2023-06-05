import { createStore } from 'vuex'
import { getMusicLyric } from '@/api/index.js'

export default createStore({
  state: {
    playlist:[{al:{},id:480580003}],
    playCurrentIndex:0,
    lyric:'',
    currentTime: 0,
    intervalId: 0,
    user:{
      isLogin: false
    }
  },
  getters:{
    lyricList: function(state){
      let arr = state.lyric.split(/\n/igs).map((item,i,arr)=>{
        let min = item.slice(1,3);
        let sencond = item.slice(4,6);
        let mill = item.slice(7,10);
        let lyric = item.slice(11,item.length);
        let time = parseInt(mill) + parseInt(sencond)*1000 + parseInt(min)*60*1000;

        return { min,sencond,mill,lyric,time }
      })

      arr.forEach((item,i)=>{
        if(i === 0){
          item.pre = 0;
        }else{
          item.pre = arr[i-1].time;
        }
      })

      return arr
    }
  },
  mutations: {
    setPlaylist:function(state,value){
      state.playlist = value;
    },
    pushPlaylist:function(state,value){
      state.playlist.push(value);
    },
    setPlayCurrentIndex:function(state,value){
      state.playCurrentIndex = value;
    },
    setLyric:function(state,value){
      state.lyric = value;
    },
    setCurrentTime:function(state,value){
      state.currentTime = value;
    },
  },
  actions: {
    async reqLyric(content,payload){
      let result = await getMusicLyric(payload.id);
      content.commit('setLyric',result.data.lrc.lyric);
    },
  },
  modules: {
  }
})
