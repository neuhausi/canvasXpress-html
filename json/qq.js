var questions = [
  {
    "Question": "QQ plot of cty",
    "Type": "QQ",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "xAxis": ["cty"],
      "yAxis": ["cty"],
      "scatterType": "qq"
    }
  },
  {
    "Question": "QQ plot of hwy colored by class",
    "Type": "QQ",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "colorBy": "class",
      "xAxis": ["hwy"],
      "yAxis": ["hwy"],
      "scatterType": "qq"
    }
  }
]