<template>
    <div>
        <Title :title = "title"></Title>
        <div class="content">下侧第二个</div>
    </div>
</template>

<script setup>
    import Title from './Title.vue';
    import {ref} from 'vue'

    const title = ref("检测月报");
</script>

<style lang="less" scoped>
    
</style>