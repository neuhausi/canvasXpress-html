var questions = [
    {
        "Question": "Scatter plot of cty and hwy colored by cyl and shaped by drv. Draw a red line at y=20 and a blue line at y=35 and a black line at x=20",
        "Type": "Scatter2D",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Scatter2D",
          "xAxis": ["cty"],
          "yAxis": ["hwy"],
          "stringVariableFactors": ["cyl"],
          "colorBy": "cyl",
          "shapeBy": "drv",
          "decorations": {
            "line": [
              {
                "color": "rgba(255,0,0)",
                "y": 35
              },
              {
                "color": "rgba(0,0,255)",
                "y": 20
              },
              {
                "color": "rgba(0,0,0)",
                "x": 20
              }
            ]
          }
        }
      },
      {
        "Question": "Correlation between cty and hwy",
        "Type": "Scatter2D",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Scatter2D",
          "xAxis": ["cty"],
          "yAxis": ["hwy"],
          "showRegressionFit": true
        }
      },
      {
        "Question": "Correlation between cty and displ color by cyl",
        "Type": "Scatter2D",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Scatter2D",
          "xAxis": ["cty"],
          "yAxis": ["displ"],
          "showRegressionFit": "cyl",
          "stringVariableFactors": ["cyl"],
          "colorBy": "cyl",
        }
      },
      {
        "Question": "Fit hwy and cty with loess",
        "Type": "Scatter2D",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Scatter2D",
          "xAxis": ["cty"],
          "yAxis": ["hwy"],
          "showLoessFit": true
        }
      }
]