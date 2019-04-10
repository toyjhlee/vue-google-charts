import {shallowMount} from '@vue/test-utils'

import chart from '../components/chart'

describe('google chart', () => {
  it('load', () => {
    const wrapper = shallowMount(chart, {})
    expect(true).toBe(true)
  })
})