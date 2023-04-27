<template>
    <div class="listView">歌单列表页</div> 
</template>

<script>

import { reactive,onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getMusicDetail } from '@/api/index'

export default {
    setup(){
        let detail = reactive({});
        const route = useRoute();
        onMounted(async()=>{
            let id = route.query.id; 
            let res = await getMusicDetail(id);
            console.log(res)
        })
    }
}
</script>