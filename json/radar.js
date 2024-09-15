var questions = [
    {
        "Question": "Line graph in a radar plot of hwy and hide the sample names",
        "Type": "Radar",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Circular",
          "circularType": "radar",
          "ringGraphType": ["line"],
          "xAxis": ["hwy"],
          "showSampleNames": false
        }
      },
      {
        "Question": "Dot plot in a radar plot of cty and hide the sample names",
        "Type": "Radar",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Circular",
          "circularType": "radar",
          "ringGraphType": ["dot"],
          "xAxis": ["cty"],
          "showSampleNames": false
        }
      }
]