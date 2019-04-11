import getChartsLoader from '@/lib/googleCharts'

describe('Promise resolve', () => {
  it('이미 charts 가 있는 경우', () => {
    expect(getChartsLoader()).resolves.toEqual(global.google.charts)
  })

  it('charts 가 없는 경우', () => {
    const temp = global.google.charts
    const expected = 'charts';
    global.google.charts = expected
    expect(getChartsLoader()).resolves.toEqual(expected)

    const script = global.document.getElementsByTagName('script')[0]
    script.onload()

    global.google.charts = temp
  })
})

describe('script attribute', () => {
  const temp = global.google.charts 
  global.google.charts = null
  getChartsLoader()

  const script = global.document.getElementsByTagName('script')[0]
  expect(script.getAttribute('src')).toBe('https://www.gstatic.com/charts/loader.js')
  expect(script.getAttribute('type')).toBe('text/javascript')

  global.google.charts = temp
})