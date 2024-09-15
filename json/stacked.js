var questions = [
    {
        "Question": "Stacked bar of drv grouped by class",
        "Type": "Stacked",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Stacked",
          "summaryType": "sum",
          "stackBy": ["drv"],
          "groupingFactors": ["class"],
          "graphOrientation": "vertical",
          "smpTextRotate": 45
        }
      },
      {
        "Question": "Stacked bar of hwy, cty, displ, and cyl grouped by class. Set the graph orientation to horizontal",
        "Type": "Stacked",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Stacked",
          "summaryType": "sum",
          "xAxis": ["hwy", "cty", "displ", "cyl"],
          "groupingFactors": ["class"],
          "graphOrientation": "horizontal"
        }
      }
    ]