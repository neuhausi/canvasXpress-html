var questions = [
    {
        "Question": "Sunburst plot of hwy by class and cyl.",
        "Type": "Sunburst",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Circular",
          "circularType": "sunburst",
          "colorBy": "class",
          "hierarchy": ["class", "cyl"],
          "xAxis": ["hwy"],
          "showLegend": false,
          "objectBorderColor": "black"
        }
      }
]