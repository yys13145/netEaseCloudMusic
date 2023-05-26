import { createStore } from 'vuex'
import { getMusicLyric } from '@/api/index.js'

export default createStore({
  state: {
    playlist:[{al:{},id:480580003}],
    playCurrentIndex:0,
    lyric:''
  },
  getters:{
    lyricList: function(state){
      let arr = state.lyric.split(/\n/igs).map((item,i)=>{
        let min = item.slice(1,3);
        let sencond = item.slice(4,6);
        let mill = item.slice(7,10);
        let lyric = item.slice(10,item.length);

        return { min,sencond,mill,lyric }
      })

      return arr
    }
  },
  mutations: {
    setPlaylist:function(state,value){
      state.playlist = value;
    },
    setPlayCurrentIndex:function(state,value){
      state.playCurrentIndex = value;
    },
    setLyric:function(state,value){
      state.lyric = value;
    },
  },
  actions: {
    async reqLyric(content,payload){
      let result = await getMusicLyric(payload.id);
      content.commit('setLyric',result.data.lrc.lyric);
    }
  },
  modules: {
  }
})
