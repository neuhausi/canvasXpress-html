var questions = [
  {
    "Question": "Draw a dotplot of cty and hwy in the primary axis with jitter and a line graph of displ and cyl in the secondary axis. Group data by class. Put the legend at the top in 2 columns.",
    "Type": "DotLine",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "DotLine",
      "groupingFactors": ["class"],
      "jitter": true,
      "xAxis": ["cty", "hwy"],
      "xAxis2": ["displ", "cyl"],
      "graphOrientation": "vertical",
      "legendPosition": "top",
      "legendColumns": 2,
      "xAxis2Show": true
    }
  }
]