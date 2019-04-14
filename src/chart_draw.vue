<template>
  <chart :chartData="chartData" :options="chartOptions"></chart>
</template>

<script>
import chart from '@/components/chart.vue'
export default {
  data() {
    return {
      chartOptions: {
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
      chartData: [
        ["Element", "Density", { role: "style" } ],
        ["움직여라!", 8, "#b87333"],
        ["움지이지 않는다", 10.49, "silver"],
      ]
    }
  },
  components: {
    chart
  }
}
</script>

