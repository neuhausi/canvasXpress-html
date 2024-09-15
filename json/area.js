var questions = [
  {
    "Question": "Create an area graph of 'Series A' with no legend rotating the labels by 90 degrees oriented vertically. Set the graph title to 'Area graph with one series'",
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
      "title": "Area graph with one series",
      "graphType": "Area",
      "xAxis": [
        "Series A"
      ],
      "graphOrientation": "vertical",
      "showLegend": false,
      "smpTextRotate": 90
    }
  },
  {
    "Question": "Create an area graph of 'Series A' with vertical orientation, labels rotated 90 degrees, and with a sample title of 'Month' and a primary axis title of 'Value'. Hide the legend and style the graph like a GGPlot",
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
      "graphType": "Area",
      "xAxis": [
        "Series A"
      ],
      "graphOrientation": "vertical",
      "showLegend": false,
      "smpTextRotate": 90,
      "lineType": "spline",
      "xAxisTitle": "Value",
      "smpTitle": "Month",
      "theme": "ggplot"
    }
  },
  {
    "Question": "Create an area graph in a vertical orientation using splines, medium transparency, labels rotated 90 degrees, and a sample title of 'Month' and a primary axis title of 'Value'. Set the graph title in bigger font to 'Area graph with three overlapping data series' and the subtitle to 'random data'. Use a GGPlot color scheme",
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
      "graphType": "Area",
      "xAxis": [
        "Series A",
        "Series B",
        "Series C"
      ],
      "title": "Area graph with three overlapping data series",
      "titleScaleFontFactor": 1.5,
      "subtitle": "random data",
      "graphOrientation": "vertical",
      "smpTextRotate": 90,
      "objectColorTransparency": 0.5,
      "lineType": "spline",
      "xAxisTitle": "Value",
      "smpTitle": "Month",
      "colorScheme": "GGPlot"
    }
  },
  {
    "Question": "Create an area graph with all the data stacked in a vertical orientation using splines, labels rotated 90 degrees, and a sample title of 'Month' and a primary axis title of 'Value'. Use a Pastel color scheme",
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
      "areaType": "stacked",
      "xAxis": [
        "Series A",
        "Series B",
        "Series C"
      ],
      "graphOrientation": "vertical",
      "graphType": "Area",
      "lineType": "spline",
      "smpTextRotate": 90,
      "smpTitle": "Month",
      "xAxisTitle": "Value",
      "colorScheme": "Pastel"
    }
  },
  {
    "Question": "Create an area graph with all the data 100% stacked in a vertical orientation using splines, labels rotated 90 degrees, and a sample title of 'Month' and a primary axis title of 'Value'. Use the BMS color scheme",
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
      "areaType": "percent",
      "xAxis": [
        "Series A",
        "Series B",
        "Series C"
      ],
      "graphOrientation": "vertical",
      "graphType": "Area",
      "lineType": "spline",
      "smpTextRotate": 90,
      "smpTitle": "Month",
      "xAxisTitle": "Value",
      "colorScheme": "BMS"
    }
  },
  {
    "Question": "Create an area graph with in a vertical orientation using splines, labels rotated 90 degrees, and a sample title of 'Month' and a primary axis title of 'Value'. Exclude 'Series C'",
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
      "xAxis": [
        "Series A",
        "Series B",
        "Series C"
      ],
      "graphType": "Area",
      "lineType": "spline",
      "smpTextRotate": 90,
      "smpTitle": "Month",
      "xAxisTitle": "Value",
      "filterData": [
        [
          "guess",
          false,
          "different",
          [
            "Series C"
          ]
        ]
      ]
    }
  },
  {
    "Question": "Create an area graph with in a vertical orientation using splines, labels slightly smaller, rotated 90 degrees, and a sample title of 'Month' and a primary axis title of 'Value'. Include only 'Series A'",
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
      "xAxis": [
        "Series A",
        "Series B",
        "Series C"
      ],
      "graphType": "Area",
      "lineType": "spline",
      "smpTextRotate": 90,
      "smpTextScaleFontFactor": 0.8,
      "smpTitle": "Month",
      "xAxisTitle": "Value",
      "filterData": [
        [
          "guess",
          false,
          "exact",
          [
            "Series A"
          ]
        ]
      ]
    }
  },
  {
    "Question": "Create a vertical area graph of hwy with title Simple Area Graph and no legend. Style the graph like a GGPlot",
    "Type": "Area",
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
      "title": "Simple Area Graph",
      "graphType": "Area",
      "xAxis": [
        "hwy"
      ],
      "graphOrientation": "vertical",
      "showLegend": false,
      "theme": "ggplot"
    }
  },
  {
    "Question": "Create an overlapping area graph of cty and hwy",
    "Type": "Area",
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
      "graphType": "Area",
      "xAxis": [
        "cty",
        "hwy"
      ],
      "graphOrientation": "vertical"
    }
  },
  {
    "Question": "Create a stacked area graph of hwy and cty",
    "Type": "Area",
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
      "graphType": "Area",
      "areaType": "stacked",
      "xAxis": [
        "hwy",
        "cty"
      ],
      "graphOrientation": "vertical"
    }
  },
  {
    "Question": "Create a percentage stacked area graph of hwy and cty. Make the text for the axis smaller and the text for the legend bigger",
    "Type": "Area",
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
      "graphType": "Area",
      "areaType": "percent",
      "xAxis": [
        "hwy",
        "cty"
      ],
      "graphOrientation": "vertical",
      "xAxisTextScaleFontFactor": 0.8,
      "legendTextScaleFontFactor": 1.5
    }
  }
]