var questions = [
  {
    "Question": "Bubble plot of hwy by class, cyl and drv color by year",
    "Type": "Bubble",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Circular",
      "circularType": "bubble",
      "hierarchy": ["class", "cyl", "drv"],
      "xAxis": ["hwy"],
      "colorBy": "class"
    }
  }
]