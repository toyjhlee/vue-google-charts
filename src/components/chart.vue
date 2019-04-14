<template>
  <div>
    <p v-if="errorText" v-text="errorText"></p>
    <div v-if="!errorText">
      <input type="range" id="start" name="volume"
         min="0" max="11" v-model="copper">
      <label for="volume">controller</label>
    </div>
    <div ref="chart"></div>
  </div>
</template>
<style scoped>
</style>
<script>
import getChartsLoader from '@/lib/googleCharts'

export default {
  name: 'chart',
  props: {
    options: {
      type: Object, default: () => {}
    },
    chartData: {
      type: Array, default: () => [
      ]
    }
  },
  data() {
    return {
      errorText: '',
      charts: null,
      chartDataObj: null,
      chartObj: null,
      viewObj: null,
      copper: 8
    }
  },
  watch: {
    copper: function() {
      this.chartDataObj.setValue(0, 1, Number(this.copper))
      this.drawChart()
    }
  },
  methods: {
    initDraw({charts}) {
      this.charts = charts;
      this.charts.load("current", {packages:["corechart"]});
      this.charts.setOnLoadCallback(() => {
        this.chartDataObj = google.visualization.arrayToDataTable(this.chartData)

        this.chartObj = new google.visualization.BarChart(this.$refs.chart);
        this.viewObj = new google.visualization.DataView(this.chartDataObj);

        this.drawChart()
      })
    },
    drawChart() {
      // this.viewObj.setColumns([0, 1,
      //               { calc: "stringify",
      //                 sourceColumn: 1,
      //                 type: "string",
      //                 role: "annotation" },
      //               2]);
      this.chartObj.draw(this.viewObj, this.options);
    },
    getChartsLoader() {
      return getChartsLoader()
    }
  },
  mounted() {
    if (this.chartData.length === 0) {
      this.errorText = 'empty chartData'
      return;
    }

    this.getChartsLoader().then(this.initDraw)
  },
}
</script>