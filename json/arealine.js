var questions = [
  {
    "Question": "Area graph of hwy with a line graph of displ showing the secondary axis. Make the font of axis title bigger. Label the primary axis as hwy and the secondary axis as displ",
    "Type": "AreaLine",
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
      "graphType": "AreaLine",
      "xAxis": [
        "hwy"
      ],
      "xAxis2": [
        "displ"
      ],
      "graphOrientation": "vertical",
      "xAxis2Show": true,
      "xAxisTitle": "hwy",
      "xAxis2Title": "displ",
      "xAxisTitleScaleFontFactor": 1.5,
      "xAxis2TitleScaleFontFactor": 1.5
    }
  },
  {
    "Question": "Area-line combination graph in a vertical orientation using splines and thick lines with labels rotated 90 degrees. 'Series A' should go in the first axis and 'Series B' should go in the second axis. Set the sample title to 'Month', and designate 'Value' for the first axis and 'Value2' for the second axis. Show both axes and set the minimum value for both axes to 0. Use the following custom colors: rgb(160,81,149), rgb(47,75,124), rgb(102,81,145), rgb(255,166,0), rgb(0,63,92), rgb(160,81,149). Put the legend on the top right corner",
    "Type": "Area",
    "Header": [
      "Month",
      "Series A",
      "Series B",
      "Series C",
      "Quarter"
    ],
    "Data": "ds6x3x1",
    "Answer": {
      "graphOrientation": "vertical",
      "graphType": "AreaLine",
      "legendPosition": "topRight",
      "lineThickness": 3,
      "lineType": "spline",
      "setMinX": 0,
      "setMinX2": 0,
      "smpTextRotate": 90,
      "smpTitle": "Month",
      "xAxis": [
        "Series A"
      ],
      "xAxis2": [
        "Series B"
      ],
      "xAxis2Show": true,
      "xAxis2Title": "Value2",
      "xAxisTitle": "Value",
      "colors": [
        "rgb(160,81,149)",
        "rgb(255,166,0)",
        "rgb(0,63,92)"
      ]
    }
  }
]