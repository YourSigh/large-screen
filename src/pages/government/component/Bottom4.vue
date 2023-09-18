<template>
    <div>
        <Title :title = "title"></Title>
        <div class="content">下侧第四个</div>
    </div>
</template>

<script setup>
    import Title from './Title.vue';
    import {ref} from 'vue'

    const title = ref("检测点信息");
</script>

<style lang="less" scoped>
    
</style>