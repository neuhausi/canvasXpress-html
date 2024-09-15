var questions = [
    {
        "Question": "Scatter bubble plot of cty sized by displ colored by cyl.",
        "Type": "Scatter3D",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Scatter3D",
          "xAxis": ["cty"],
          "yAxis": ["hwy"],
          "zAxis": ["displ"],
          "stringVariableFactors": ["cyl"],
          "colorBy": "cyl",
        }
      }
]