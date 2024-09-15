var questions = [
  {
    "Question": "Histogram of hwy",
    "Type": "Histogram",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "yAxis": ["hwy"],
      "showHistogram": true
    }
  },
  {
    "Question": "Histogram of hwy and cty",
    "Type": "Histogram",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "yAxis": ["hwy", "cty"],
      "histogramType": "staggered",
      "showHistogram": true
    }
  },
  {
    "Question": "Dodge histogram of hwy and cty",
    "Type": "Histogram",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "yAxis": ["hwy", "cty"],
      "histogramType": "doged",
      "showHistogram": true
    }
  },
  {
    "Question": "Stacked Histogram of hwy and cty",
    "Type": "Histogram",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "yAxis": ["hwy", "cty"],
      "histogramType": "stacked",
      "showHistogram": true
    }
  },
  {
    "Question": "Histogram of hwy colored by cyl",
    "Type": "Histogram",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "yAxis": ["hwy"],
      "showHistogram": "cyl",
      "histogramType": "stacked"
    }
  }
]