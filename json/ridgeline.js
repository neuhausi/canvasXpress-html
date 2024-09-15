var questions = [
    {
        "Question": "Ridgeline plot of hwy by class",
        "Type": "Ridgeline",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Scatter2D",
          "yAxis": ["hwy"],
          "ridgeBy": "class",
          "hideHistogram": true,
          "showHistogramDensity": true,
          "showFilledHistogramDensity": true
        }
      },
      {
        "Question": "Ridgeline plot of hwy and cty by class",
        "Type": "Ridgeline",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Scatter2D",
          "yAxis": ["hwy", "cty"],
          "ridgeBy": "class",
          "hideHistogram": true,
          "showHistogramDensity": true,
          "showFilledHistogramDensity": true
        }
      },
      {
        "Question": "Ridgeline plot of hwy and cty by class and show the histogram quantiles",
        "Type": "Ridgeline",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Scatter2D",
          "yAxis": ["hwy", "cty"],
          "ridgeBy": "class",
          "hideHistogram": true,
          "showHistogramDensity": true,
          "showFilledHistogramDensity": true,
          "showHistogramQuantiles": true
        }
      },
      {
        "Question": "Ridgeline plot of hwy by class and show the original data",
        "Type": "Ridgeline",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Scatter2D",
          "yAxis": ["hwy"],
          "ridgeBy": "class",
          "hideHistogram": true,
          "showHistogramDensity": true,
          "showFilledHistogramDensity": true,
          "showHistogramDataPoints": true,
        }
      }
]