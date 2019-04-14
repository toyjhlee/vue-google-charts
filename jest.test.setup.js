global.google = {
  visualization: {
    arrayToDataTable: jest.fn(),
    BarChart: null,
    DataView: null,
  },
  charts: {
    load: jest.fn(),
    setOnLoadCallback: (fn) => {
      fn()
    }
  }
}

class BarChart {
  constructor(obj) {
    this.obj = obj;
  }

  getObj() {
    return this.obj
  }
}
BarChart.prototype.draw = jest.fn()
google.visualization.BarChart = BarChart

class DataView {
  constructor(obj) {
    this.obj = obj;
  }

  getObj() {
    return this.obj
  }
}

DataView.prototype.setColumns = jest.fn()
google.visualization.DataView = DataView