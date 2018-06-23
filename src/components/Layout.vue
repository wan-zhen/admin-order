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
      <div class="row">
        <h4 class="col-sm">OVERVIEW</h4>
        <div class="col-sm text-right">
          <span class="text-muted">{{startDay}}</span>
          <i class="fa fa-caret-right"></i>
          <span class="text-muted">{{endDay}}</span>
          <div class="btn-group">
            <button type="button" class="btn btn-light dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{dayName}}
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item" type="button" @click="changeDay(7)">Weekly</button>
              <button class="dropdown-item" type="button" @click="changeDay(31)">Monthly</button>
              <button class="dropdown-item" type="button" @click="changeDay(364)">Yearly</button>
            </div>
          </div>
        </div>
      </div>

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
          <div class="row mt-3">
            <div class="col-sm">
              <div class="card">
                <div class="card-body">
                  <h5>Transaction Website</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <div class="d-flex bd-highlight">
                        <div class="p-2 flex-fill bd-highlight">
                          <i class="fab fa-facebook fa-2x fa-fw"></i>
                          <span class="text-muted">Facebook.com</span>
                        </div>
                        <div class="p-2 flex-fill bd-highlight text-right">
                           <h5>{{getRandom() | thousandComma}}</h5>
                        </div>
                        <div class="p-2 flex-fill bd-highlight text-right text-success">
                           <i class="fa fa-arrow-up"></i>
                           {{getRandomPercent()}}%
                        </div>
                      </div>
                    </li>

                    <li class="list-group-item">
                      <div class="d-flex bd-highlight">
                        <div class="p-2 flex-fill bd-highlight">
                          <i class="fab fa-google fa-2x fa-fw"></i>
                          <span class="text-muted">google.com</span>
                        </div>
                        <div class="p-2 flex-fill bd-highlight text-right">
                           <h5>{{getRandom() | thousandComma}}</h5>
                        </div>
                        <div class="p-2 flex-fill bd-highlight text-right text-success">
                           <i class="fa fa-arrow-up"></i>
                           {{getRandomPercent()}}%
                        </div>
                      </div>
                    </li>

                    <li class="list-group-item">
                      <div class="d-flex bd-highlight">
                        <div class="p-2 flex-fill bd-highlight">
                          <i class="fa fa-shopping-bag fa-2x fa-fw"></i>
                          <span class="text-muted">Shopify.com</span>
                        </div>
                        <div class="p-2 flex-fill bd-highlight text-right">
                           <h5>{{getRandom() | thousandComma}}</h5>
                        </div>
                        <div class="p-2 flex-fill bd-highlight text-right text-danger">
                           <i class="fa fa-arrow-down"></i>
                           {{getRandomPercent()}}%
                        </div>
                      </div>
                    </li>

                    <li class="list-group-item">
                      <div class="d-flex bd-highlight">
                        <div class="p-2 flex-fill bd-highlight">
                          <i class="fab fa-wordpress fa-2x fa-fw"></i>
                          <span class="text-muted">Wordpress.com</span>
                        </div>
                        <div class="p-2 flex-fill bd-highlight text-right">
                           <h5>{{getRandom() | thousandComma}}</h5>
                        </div>
                        <div class="p-2 flex-fill bd-highlight text-right text-danger">
                           <i class="fa fa-arrow-down"></i>
                           {{getRandomPercent()}}%
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

             <div class="col-sm">
              <div class="card">
                <div class="card-body">
                  <h5>Letest Orders</h5>
                   <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="item in letestOrder">

                      <div class="d-flex">
                        <div class="p-2">
                          <img :src="getImgUrl(item.img)" style="width:100px" class="rounded">
                        </div>
                        <div class="p-2  flex-grow-1">
                          <h6>{{item.title}}</h6>
                          <div class="text-muted"><i class="fa fa-clock fa-fw"></i> {{item.time}}</div>
                          <div class="text-muted"><i class="fa fa-male fa-fw"></i> {{item.owner}}</div>
                        </div>
                        <div class="p-2 text-right align-self-end">
                          total
                          <h5>{{item.total | thousandComma}}</h5>
                        </div>
                      </div>
                    </li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      overViews: [
        {
          title: "total revenue",
          count: revenueSum,
          icon: "hand-holding-usd",
          color: "success"
        },
        { title: "total cost", count: costSum, icon: "boxes", color: "danger" },
        {
          title: "net income",
          count: incomeSum,
          icon: "money-bill",
          color: "primary"
        }
      ],
      letestOrder: [
        {
          img: "01.jpg",
          title: "Vintage T-shirt",
          time: "2018/6/13 13:42",
          owner: "Belle Willis",
          total: 3200
        },
        {
          img: "02.jpg",
          title: "Cowboy Jacket",
          time: "2018/6/13 10:22",
          owner: "Adrian Cummings",
          total: 2800
        },
        {
          img: "03.jpg",
          title: "Coach Coat",
          time: "2018/6/13 8:12",
          owner: "Lura Holland",
          total: 1600
        }
      ],
      startDay: startDay,
      endDay: endDay,
      dayName: "Weekly"
    };
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    },
    getRandom() {
      return Math.floor(Math.random() * 30000 + 3000);
    },
    getRandomPercent() {
      return Math.floor(Math.random() * 99 + 1);
    },
    changeDay(days) {
      getDay(days);
      drawEchart();
      this.startDay = startDay;
      this.endDay = endDay;
      switch (days) {
        case 7:
          this.dayName = "Weekly";
          break;
        case 31:
          this.dayName = "Monthly";
          break;
        case 364:
          this.dayName = "Yearly";
          break;
        default:
          break;
      }
      this.overViews[0].count = revenueSum;
      this.overViews[1].count = costSum;
      this.overViews[2].count = incomeSum;
    }
  }
};

var echarts = require("echarts");

var moment = require("moment");

var records = [];

for (var i = 0; i < 365; i++) {
  records.push({
    date: moment()
      .subtract(i, "days")
      .format("YYYY/MM/DD"),
    revenue: Math.floor(Math.random() * 666 + 1),
    cost: Math.floor(Math.random() * 666 + 1),
    income: Math.floor(Math.random() * 666 + 1)
  });
}

var chartDay = [];
var chartRevenue = [];
var chartCost = [];
var chartIncome = [];
var startDay = "";
var endDay = "";
var revenueSum = 0;
var costSum = 0;
var incomeSum = 0;
function getDay(days) {
  chartDay = [];
  chartRevenue = [];
  chartCost = [];
  chartIncome = [];
  for (var i = 0; i < days; i++) {
    chartDay.push(records[days - i].date);
    chartRevenue.push(records[days - i].revenue);
    chartCost.push(records[days - i].cost);
    chartIncome.push(records[days - i].income);
  }
  startDay = chartDay[0];
  endDay = chartDay[chartDay.length - 1];
  revenueSum = chartRevenue.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  costSum = chartCost.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  incomeSum = chartIncome.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

getDay(7);

function drawEchart() {
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
      data: chartDay
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "Total revenue",
        type: "line",
        data: chartRevenue
      },
      {
        name: "Total cost",
        type: "line",
        data: chartCost
      },
      {
        name: "Net income",
        type: "line",
        data: chartIncome
      }
    ]
  });
}
$(function() {
  drawEchart();
});
</script>

<style scoped>
</style>
