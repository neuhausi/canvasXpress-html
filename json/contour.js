var questions = [
  {
    "Question": "Filled Contour plot of cty and hwy",
    "Type": "Contour",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "xAxis": ["cty"],
      "yAxis": ["hwy"],
      "isContour": true,
      "contourFilled": true
    }
  },
  {
    "Question": "Contour plot of cyl and dspl. Show the data points.Set the minimum value of x-axis to 2.5 and maximum value of x-axis to 10. Set the minimum value of y-axis to 0 and maximum value of y-axis to 7.5.",
    "Type": "Contour",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Scatter2D",
      "xAxis": ["cyl"],
      "yAxis": ["displ"],
      "isContour": true,
      "showContourDataPoints": true,
      "setMinX": 2.5,
      "setMaxX": 10,
      "setMinY": 0,
      "setMaxY": 7.5
    }
  }
]