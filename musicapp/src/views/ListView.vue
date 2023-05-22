<template>
    <div class="listView">
        <listview-top :playlist="state.playlist"></listview-top>
        <play-list :playlist="state.playlist"></play-list>
    </div> 
</template>

<script>

import listviewTop from '@/components/listviewTop.vue'
import playList from '@/components/playList.vue'
import { reactive,onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getMusicDetail } from '@/api/index'
import store from '@/store/index.js'

export default {
    setup(){
        let state = reactive({
            list:[],
            playlist:{
                creator:{},
                tracks:[]
            }
        });
        const route = useRoute();
        onMounted(async()=>{
            let id = route.query.id; 
            let res = await getMusicDetail(id);
            console.log(res);
            store.commit('setPlaylist',res.data.playlist.tracks)
            state.playlist = res.data.playlist;
        });
        return {
            state 
        }
    },
    components:{
        listviewTop,
        playList
    }
}
</script>