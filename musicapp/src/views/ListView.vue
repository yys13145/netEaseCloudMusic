<template>
    <div class="listView">
        <listview-top :playlist="state.playlist"></listview-top>
    </div> 
</template>

<script>

import listviewTop from '@/components/listviewTop.vue'
import { reactive,onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getMusicDetail } from '@/api/index'

export default {
    setup(){
        let state = reactive({
            list:[],
            playlist:{
                creator:{}
            }
        });
        const route = useRoute();
        onMounted(async()=>{
            let id = route.query.id; 
            let res = await getMusicDetail(id);
            console.log(res);
            state.playlist = res.data.playlist;
        });
        return {
            state 
        }
    },
    components:{
        listviewTop
    }
}
</script>