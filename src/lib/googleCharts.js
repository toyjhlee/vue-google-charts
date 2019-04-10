const chartsScriptUrl = 'https://www.gstatic.com/charts/loader.js'

let chartsLoaderPromise = null

export default function getChartsLoader () {
  if (window.google && window.google.charts) {
    return Promise.resolve(window.google.charts)
  }
  if (!chartsLoaderPromise) {
    chartsLoaderPromise = new Promise(resolve => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.onload = () => resolve(window.google.charts)
      script.src = chartsScriptUrl
      document.body.appendChild(script)
    })
  }
  return chartsLoaderPromise
}