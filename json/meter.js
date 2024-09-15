var questions = [
  {
    "Question": "Gauge plot of the average of hwy by drv",
    "Type": "Meter",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Meter",
      "meterGroup": "drv",
      "meterSummaryType": "average",
      "meterType": "gauge",
      "xAxis": ["hwy"]
    }
  },
  {
    "Question": "Draw a digital meter of the average of hwy by cyl",
    "Type": "Meter",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Meter",
      "meterGroup": "cyl",
      "meterSummaryType": "sum",
      "meterType": "digital",
      "xAxis": ["hwy"]
    }
  }
]