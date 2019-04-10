global.google = {
  charts: {
    load: jest.fn(),
    visualization: {
      PieChart() {
        return {
          draw: jest.fn()
        }
      },
      arrayToDataTable() {
        
      },
      DataTable() {
        return {
          addColumn: jest.fn(),
          addRows: jest.fn(),
        }
      }
    },
    setOnLoadCallback: jest.fn()
  }
}