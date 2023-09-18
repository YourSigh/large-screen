<template>
    <div>
        <div class="header">
            <div class="left"></div>
            <div class="right">{{ title }}</div>
        </div>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'

    const {title} = defineProps({
        title: {
            required:true,
            type:String
        }
    });

</script>

<style lang="less" scoped>
.header {
    height: 35px;
    display: flex;

    .left {
        width: 24px;
        height: 30px;
        background-image: url('../../../assets/layout/box_title_icon.png');
        background-size: 100% 100%;
        margin-right: 10px;
    }

    .right {
        font-size: 20px;
    }
}
</style>