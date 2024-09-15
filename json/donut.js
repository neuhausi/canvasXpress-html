var questions = [
  {
    "Question": "Donut plot of hwy by class.",
    "Type": "Donut",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Circular",
      "circularType": "sunburst",
      "hierarchy": ["class"],
      "xAxis": ["hwy"],
      "showLegend": false,
      "objectBorderColor": "black"
    }
  }
]