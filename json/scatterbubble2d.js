var questions = [
    {
        "Question": "Scatter plot of cty, hwy and displ colored by cyl.",
        "Type": "ScatterBubble2D",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "ScatterBubble2D",
          "xAxis": ["cty"],
          "yAxis": ["hwy"],
          "zAxis": ["displ"],
          "stringVariableFactors": ["cyl"],
          "colorBy": "cyl",
        }
      }
]