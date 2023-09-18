<template>
    <div>
        <Title :title = "title"></Title>
        <div class="content">左侧第二个</div>
    </div>
</template>

<script setup>
    import Title from './Title.vue';
    import {ref} from 'vue'

    const title = ref("设备状态分布");
</script>

<style lang="less" scoped>
    
</style>