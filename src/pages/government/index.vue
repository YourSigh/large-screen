<template>
    <div>
        <div class="header">
            上兰帝国理工大学
        </div>
        <div class="content">
            <div class="top">
                <div class="left">
                    <div class="charts">
                        <Left1></Left1>
                    </div>
                    <div class="charts">
                        <Left2></Left2>
                    </div>
                </div>
                <div class="center">
                    <!-- <Map></Map> -->
                </div>
                <div class="right">
                    <div class="charts">
                        <Right1></Right1>
                    </div>
                    <div class="charts">
                        <Right2></Right2>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="charts">
                    <Bottom1></Bottom1>
                </div>
                <div class="charts">
                    <Bottom2></Bottom2>
                </div>
                <div class="charts">
                    <Bottom3></Bottom3>
                </div>
                <div class="charts">
                    <Bottom4></Bottom4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Left1 from './component/Left1.vue'
    import Left2 from './component/Left2.vue'
    import Right1 from './component/Right1.vue'
    import Right2 from './component/Right2.vue'
    import Bottom1 from './component/Bottom1.vue'
    import Bottom2 from './component/Bottom2.vue'
    import Bottom3 from './component/Bottom3.vue'
    import Bottom4 from './component/Bottom4.vue'
    // import Map from './component/Map.vue'

</script>

<style lang="less" scoped>
    .header {
        width: 100%;
        height: 60px;
        color:white;
        text-align: center;
        font-size:28px;
        background-image: url('../../assets/layout/header.png');
        font-family: "宋体";
        background-size: 100% 200px;
    }

    .content {
        height:calc(100vh - 60px);
        display: flex;
        flex-direction: column;
        .top {
            flex:2;
            display: flex;
            .left,.right{
                flex:1;
                display: flex;
                flex-direction: column;
                .charts {
                    flex:1;

                }
            }

            .center {
                flex:2;
                background-image: url('../../assets/layout/chart_center_box_bg.png');
                background-size: 100% 100%;
                margin: 0 0 10px 10px;
            }
        }

        .bottom {
            flex:1;
            display: flex;
            .charts {
                flex:1;
            }
        }

        .charts {
            background-image: url('../../assets/layout/chart_box_bg.png');
            background-size: 100% 100%;
            margin: 0 0 10px 10px;
            color:white;
            padding: 10px 0 0 10px;
            box-sizing: border-box;
        }
    }
</style>