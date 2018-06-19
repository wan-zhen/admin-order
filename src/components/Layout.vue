<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Shoptime</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ORDERS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PRODUCT</a>
        </li>
      </ul>
      <div style="color:#fff;">
        ADMIN
      </div>
    </div>
  </nav>
  <div class="bg-light">
    <div class="container pt-3">
      <h4>OVERVIEW</h4>
          <div class="row mb-3">
            <div class="col-sm" v-for="item in overViews">
              <div class="card text-center">
                <div class="card-body">
                  <h5><i :class="'fa fa-'+item.icon"></i>
                    {{item.title | toUpperCase}}</h5>
                  <h4 :class="'text-'+item.color">{{item.count | thousandComma}}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="card" id="main" style="height:500px;"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      overViews: [
        {
          title: "total revenue",
          count: 54540,
          icon: "hand-holding-usd",
          color: "success"
        },
        { title: "total cost", count: 12660, icon: "boxes", color: "danger" },
        {
          title: "net income",
          count: 41880,
          icon: "money-bill",
          color: "primary"
        }
      ]
    };
  }
};
var echarts = require("echarts");

// 基于准备好的dom，初始化echarts实例
$(function() {
  var myChart = echarts.init(document.getElementById("main"));

  // 绘制图表
  myChart.setOption({
    title: {
      text: "Activity"
    },
    tooltip: {
      trigger: "axis"
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "Total revenue",
        type: "line",
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: "Total cost",
        type: "line",
        data: [220, 182, 50, 500, 290, 330, 310]
      },
      {
        name: "Net income",
        type: "line",
        data: [150, 232, 0, 154, 190, 330, 410]
      }
    ]
  });
});
</script>

<style scoped>
</style>
