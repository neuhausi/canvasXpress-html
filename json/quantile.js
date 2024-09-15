var questions = [
  {
    "Question": "Quantile reregression of hwy and cty",
    "Type": "Quantile",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "xAxis": ["hwy"],
      "yAxis": ["cty"],
      "showQuantileRegressionFit": true
    }
  }
]