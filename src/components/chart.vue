<template>
  <div>
    <div>
      <input type="range" id="start" name="volume"
         min="0" max="11" v-model="copper">
      <label for="volume">조작</label>
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
  },
  data() {
    return {
      charts: null,
      options: {
        title: "Prototype Vue Chart",
        width: 600,
        height: 400,
        animation:{
          duration: 1000,
          easing: 'out',
        },
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        vAxis: {minValue:0, maxValue:1000}
      },
      chartData: null,
      chartObj: null,
      viewObj: null,
      copper: 8
    }
  },
  watch: {
    copper: function() {
      this.chartData.setValue(0, 1, Number(this.copper))
      this.drawChart()
    }
  },
  methods: {
    initDraw() {
      this.charts.load("current", {packages:["corechart"]});
      this.charts.setOnLoadCallback(() => {
        this.chartData = google.visualization.arrayToDataTable([
          ["Element", "Density", { role: "style" } ],
          ["움직여라!", 8, "#b87333"],
          ["움지이지 않는다", 10.49, "silver"],
        ]);

        this.chartObj = new google.visualization.BarChart(this.$refs.chart);
        this.viewObj = new google.visualization.DataView(this.chartData);

        this.drawChart()
      });
    },
    drawChart() {
      this.viewObj.setColumns([0, 1,
                    { calc: "stringify",
                      sourceColumn: 1,
                      type: "string",
                      role: "annotation" },
                    2]);

      this.chartObj.draw(this.viewObj, this.options);
    }
  },
  mounted() {
    getChartsLoader().then((charts) => {
      this.charts = charts
      this.initDraw()
    })
  },
};
</script>