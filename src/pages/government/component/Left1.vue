<template>
    <div>
      <Title :title="title"></Title>
      <div ref="container" style="height:140px;"></div>
    </div>
  </template>
  <script setup>
  import { get } from '@/utils/request.js';
  import Title from './Title.vue'
  import { ref, reactive, onMounted } from 'vue';
  // 引入折线图表构造函数
  import { Line } from '@antv/g2plot';
  // 引入momentjs工具库
  import moment from 'moment';
  const container = ref(null);
  const title = ref('实时温度曲线');
  // 温度数据
  const Tempdata = ref([]);
  // 封装请求函数 获取温湿度数据
  let getTemData = async () => {
    let res = await get('/dashboard/pageQueryTodayData', {
      page: 1,
      pageSize:400
    });
    res.data.list.forEach((item, index, arr) => {
      // y轴数据刻度显示正常 第一条数据值改小
      arr[0].temperature = 15.4;
      item.time = moment(item.insert_time).format('HH:mm');
    });
    //  查询的数据可能60条都是重复的 每隔60条数据截取一条
    for (let i = 0; i < res.data.list.length; i++) {
      if ((i + 1) % 60 == 1) {
        // 将后端返回的数据设置给数组
        Tempdata.value.push(res.data.list[i])
      }
    }
    // Tempdata.value = res.data.list;
    
  }
  // 封装加载图表函数
  let loadLine = () => {
    const line = new Line(container.value, {
      data: Tempdata.value,
      // x轴显示字段
      xField: 'time',
      // y轴显示的数据
      yField: 'temperature',
      // 辅助点
      point: {
        size: 5,
        shape: 'diamond',
        style: {
          fill: 'white',
          stroke: '#5B8FF9',
          lineWidth: 2,
        },
      },
      // 配置x轴字段文字配置对象
      xAxis: {
        label: {
          // 旋转
          rotate: -45,
          style: {
            fill: '#fff',
          }
        }
      },
      // 配置y轴字段文字配置对象
      yAxis: {
        label: {
          style: {
            fill: '#fff',
          }
        }
      },
      // 开启曲线平滑 默认值false
      smooth: true,
      // 动画配置相关
      animation: {
        appear: {
          animation: 'wave-in',
          duration: 3000,
        },
      },
      // 提示框
      tooltip: {
        showMarkers: false,
        // 提示框内容样式
        domStyles: {
          "g2-tooltip": {
            backgroundColor: 'rgba(47,0,163,0.8)',
            color: '#fff',
            fontSize: 18,
            fontFamily: '宋体'
          }
        }
      },
      state: {
        active: {
          style: {
            shadowBlur: 4,
            stroke: '#000',
            fill: 'red',
          },
        },
      },
      interactions: [{ type: 'marker-active' }],
    });
    line.render();
  }
  onMounted(async () => {
    await getTemData();
    //拿到后端数据再去渲染表格
    loadLine();
  })
  </script>
  <style lang="less" scoped></style>