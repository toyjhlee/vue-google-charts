<template>
</template>
<style scoped>
</style>
<script>
import getChartsLoader from '../lib/googleCharts'

export default {
  name: 'chart',
  props: {
  },
  data() {
    return {
      charts: null,
    }
  },
  mounted() {
    getChartsLoader().then((charts) => {
      this.charts = charts
    })
  },
  methods: {
    load() {
    }
  },
};
</script>