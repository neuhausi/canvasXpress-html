var questions = [
  {
    "Question": "Cluster data using hwy and cty",
    "Type": "Heatmap",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Heatmap",
      "xAxis": ["hwy", "cty"],
      "samplesClustered": true
    }
  },
  {
    "Question": "Cluster data using hwy and cty. Overlay the class on the heatmap.",
    "Type": "Heatmap",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Heatmap",
      "smpOverlays": ["class"],
      "xAxis": ["hwy", "cty"],
      "samplesClustered": true
    }
  }
]