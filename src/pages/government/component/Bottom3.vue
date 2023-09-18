<template>
    <div>
        <Title :title = "title"></Title>
        <div class="content">下侧第三个</div>
    </div>
</template>

<script setup>
    import Title from './Title.vue';
    import {ref} from 'vue'

    const title = ref("检测视频");
</script>

<style lang="less" scoped>
    
</style>