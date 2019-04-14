import {shallowMount, mount, createLocalVue} from '@vue/test-utils'
import chart from '@/components/chart.vue'

describe('script attribute', () => {
  let wrapper

  chart.methods.getChartsLoader = () => {
    return new Promise((resolve) => {
      resolve(global.google)
    })
  }

  let propsData = {
    chartData: [
      ["Element", "Density", { role: "style" } ],
      ["움직여라!", 8, "#b87333"],
      ["움지이지 않는다", 10.49, "silver"],
    ],
    options: {}
  }

  beforeEach(() => {
    wrapper = shallowMount(chart, {
      propsData
    })
  })

  it ('draw chart', () => {
    expect(global.google.charts.load).toHaveBeenCalled();
    expect(global.google.visualization.arrayToDataTable).toHaveBeenCalled();

    expect(wrapper.vm.chartObj).toBeInstanceOf(google.visualization.BarChart)
    expect(wrapper.vm.viewObj).toBeInstanceOf(google.visualization.DataView)

    expect(wrapper.vm.chartObj.draw.mock.calls[0][0]).toBeInstanceOf(google.visualization.DataView)
    expect(wrapper.vm.chartObj.draw.mock.calls[0][1]).toBe(wrapper.vm.options)
  })
})