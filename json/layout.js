var questions = [
  {
    "Question": "Boxplot of hwy by class, faceted by cyl",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Boxplot",
      "groupingFactors": ["class"],
      "xAxis": ["hwy"],
      "graphOrientation": "vertical",
      "smpTextRotate": 45,
      "segregateSamplesBy": ["cyl"]
    }
  },
  {
    "Question": "Bar graph of hwy grouped by class and faceted by cyl and drv",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Bar",
      "groupingFactors": ["class"],
      "xAxis": ["hwy"],
      "graphOrientation": "vertical",
      "smpTextRotate": 45,
      "segregateSamplesBy": ["cyl", "drv"]
    }
  },
  {
    "Question": "Scatter plot of cty and hwy segregated by cyl and drv",
    "Type": "Scatter2D",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "xAxis": ["cty"],
      "yAxis": ["hwy"],
      "segregateVariablesBy": ["cyl", "drv"]
    }
  }
]