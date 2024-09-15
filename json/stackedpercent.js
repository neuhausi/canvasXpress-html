var questions = [
    {
        "Question": "Stacked percent bar of hwy, cty, displ, and cyl grouped by class.",
        "Type": "StackedPercent",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "StackedPercent",
          "summaryType": "sum",
          "xAxis": ["hwy", "cty", "displ", "cyl"],
          "groupingFactors": ["class"]
        }
      }
    ]