var questions = [
  {
    "Question": "Density plot of hwy.",
    "Type": "Density",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "yAxis": ["hwy"],
      "hideHistogram": true,
      "showHistogramDensity": true,
      "showFilledHistogramDensity": true,
      "showHistogram": true,
      "showHistogramDensity": true
    }
  },
  {
    "Question": "Density plot of hwy and cty. Show the median line.",
    "Type": "Density",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "yAxis": ["hwy", "cty"],
      "hideHistogram": true,
      "showHistogramDensity": true,
      "showFilledHistogramDensity": true,
      "showHistogram": true,
      "showHistogramDensity": true,
      "showHistogramMedian": true,
    }
  },
  {
    "Question": "Density plot with histogram of hwy and cty.",
    "Type": "Density",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "yAxis": ["hwy", "cty"],
      "hideHistogram": false,
      "showHistogramDensity": true,
      "showFilledHistogramDensity": true,
      "showHistogram": true,
      "showHistogramDensity": true,
    }
  },
  {
    "Question": "Show a sctter plot of hwy and cty with side histograms. Show the median line.",
    "Type": "Density",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "xAxis": ["hwy"],
      "yAxis": ["cty"],
      "hideHistogram": false,
      "showHistogramDensity": true,
      "showFilledHistogramDensity": true,
      "showHistogramDensity": true,
      "showHistogramMedian": true,
      "xAxisHistogramShow": true,
      "yAxisHistogramShow": true
    }
  }
]