var questions = [
    {
        "Question": "Draw a stacked bar of cty and hwy in the primary axis and a line graph of displ and cyl in the secondary axis. Group data by class.",
        "Type": "StackedLine",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "StackedLine",
          "summaryType": "sum",
          "groupingFactors": ["class"],
          "xAxis": ["cty", "hwy"],
          "xAxis2": ["displ", "cyl"],
          "setMaxX": 2500,
          "graphOrientation": "vertical",
          "xAxis2Show": true
        }
      }
    ]