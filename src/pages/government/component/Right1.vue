<template>
    <div>
        <Title :title = "title"></Title>
        <div class="content">右侧第一个</div>
    </div>
</template>

<script setup>
    import Title from './Title.vue';
    import {ref} from 'vue'

    const title = ref("实时湿度曲线");
</script>

<style lang="less" scoped>
    
</style>