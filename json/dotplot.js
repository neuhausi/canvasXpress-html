var questions = [
  {
    "Question": "Dotplot of cty grouped by class with jitter data points.",
    "Type": "Dotplot",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Dotplot",
      "groupingFactors": ["class"],
      "xAxis": ["cty"],
      "graphOrientation": "vertical",
      "jitter": true,
      "smpTextRotate": 45
    }
  },
  {
    "Question": "Dotplot of cty grouped by class with binned data points and colored by drv.",
    "Type": "Dotplot",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Dotplot",
      "groupingFactors": ["class"],
      "xAxis": ["cty"],
      "graphOrientation": "vertical",
      "binned": true,
      "colorBy": "drv",
      "smpTextRotate": 45
    }
  }
]