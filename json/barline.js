var questions = [
  {
    "Question": "Draw a Bar graph of cty and hwy in the primary axis and a line graph of displ and cyl in the secondary axis. Group data by class. Put the legend at the bottom in 4 columns. Show the secondary axis. Set maximum value of primary axis to 30.",
    "Type": "BarLine",
    "Header": [
      "Id",
      "class",
      "cty",
      "cyl",
      "drv",
      "fl",
      "manufacturer",
      "model",
      "trans",
      "year",
      "displ",
      "hwy"
    ],
    "Data": "mpg",
    "Answer": {
      "graphType": "BarLine",
      "groupingFactors": [
        "class"
      ],
      "xAxis": [
        "cty",
        "hwy"
      ],
      "xAxis2": [
        "displ",
        "cyl"
      ],
      "graphOrientation": "vertical",
      "legendPosition": "bottom",
      "legendColumns": 4,
      "xAxis2Show": true,
      "setMaxX": 30
    }
  }
]