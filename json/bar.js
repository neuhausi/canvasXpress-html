var questions = [
  {
    "Question": "Bar graph of 'Series A' with GGPlot style. Rotate the sample text by 90 degrees and hide the legend. Set the title to 'Bar graph of Series A'",
    "Type": "Bar",
    "Header": [
      "Month",
      "Series A",
      "Series B",
      "Series C",
      "Quarter"
    ],
    "Data": "ds6x3x1",
    "Answer": {
      "graphType": "Bar",
      "xAxis": [
        "Series A"
      ],
      "graphOrientation": "vertical",
      "showLegend": false,
      "title": "Bar graph of Series A",
      "smpTextRotate": 90,
      "theme": "ggplot"
    }
  },
  {
    "Question": "Bar graph all data using the Behance color scheme in an horizontal orientation. Set the title to 'Bar graph of All Series'. Place the legend inside the graph at the top right corner",
    "Type": "Bar",
    "Header": [
      "Month",
      "Series A",
      "Series B",
      "Series C",
      "Quarter"
    ],
    "Data": "ds6x3x1",
    "Answer": {
      "graphType": "Bar",
      "xAxis": [
        "Series A",
        "Series B",
        "Series C"
      ],
      "graphOrientation": "horizontal",
      "title": "Bar graph of All Series",
      "colorScheme": "Behance",
      "legendPosition": "topRight",
      "legendInside": true
    }
  },
  {
    "Question": "Bar graph with totals by Quarter. Rotate the sample text by 90 degrees.",
    "Type": "Bar",
    "Header": [
      "Month",
      "Series A",
      "Series B",
      "Series C",
      "Quarter"
    ],
    "Data": "ds6x3x1",
    "Answer": {
      "graphType": "Bar",
      "xAxis": [
        "Series A",
        "Series B",
        "Series C"
      ],
      "graphOrientation": "vertical",
      "smpTextRotate": 90,
      "groupingFactors": [
        "Quarter"
      ],
      "summaryType": "sum"
    }
  },
  {
    "Question": "Bar graph with totals by Quarter excluding the month of Jun. Rotate the sample text by 90 degrees. Use a blue color scheme.",
    "Type": "Bar",
    "Header": [
      "Month",
      "Series A",
      "Series B",
      "Series C",
      "Quarter"
    ],
    "Data": "ds6x3x1",
    "Answer": {
      "graphType": "Bar",
      "xAxis": [
        "Series A",
        "Series B",
        "Series C"
      ],
      "graphOrientation": "vertical",
      "smpTextRotate": 90,
      "groupingFactors": [
        "Quarter"
      ],
      "summaryType": "sum",
      "filterData": [
        [
          "guess",
          false,
          "different",
          [
            "Jun"
          ]
        ]
      ],
      "colorScheme": "Blues"
    }
  },
  {
    "Question": "Bar graph with totals by Quarter excluding the months of Mar and Jun. Rotate the sample text by 90 degrees. Style the graph like a GGPlot",
    "Type": "Bar",
    "Header": [
      "Month",
      "Series A",
      "Series B",
      "Series C",
      "Quarter"
    ],
    "Data": "ds6x3x1",
    "Answer": {
      "graphType": "Bar",
      "xAxis": [
        "Series A",
        "Series B",
        "Series C"
      ],
      "graphOrientation": "vertical",
      "smpTextRotate": 90,
      "groupingFactors": [
        "Quarter"
      ],
      "summaryType": "sum",
      "filterData": [
        [
          "guess",
          false,
          "different",
          [
            "Mar",
            "Jun"
          ]
        ]
      ],
      "theme": "ggplot"
    }
  },
  {
    "Question": "Bar graph of hwy grouped by class. Rotate the sample text by 45 degrees.",
    "Type": "Bar",
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
      "graphType": "Bar",
      "groupingFactors": [
        "class"
      ],
      "xAxis": [
        "hwy"
      ],
      "graphOrientation": "vertical",
      "smpTextRotate": 45
    }
  },
  {
    "Question": "Count data grouped by class. Hide the legend and set the title to Count of class. Align the title to the center.",
    "Type": "Bar",
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
      "graphType": "Bar",
      "groupingFactors": [
        "class"
      ],
      "graphOrientation": "vertical",
      "smpTextRotate": 45,
      "summaryType": "count",
      "showLegend": false,
      "title": "Count of class",
      "titleAlign": "center"
    }
  },
  {
    "Question": "A vertical bar graph of the counts in data grouped by class and stacked and colored by drv. Rotate the sample text by 45 degrees. Make it look like a Highcharts graph. Make the legend title font bigger.",
    "Type": "Bar",
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
      "graphType": "Bar",
      "groupingFactors": [
        "class"
      ],
      "graphOrientation": "vertical",
      "summaryType": "count",
      "smpTextRotate": 45,
      "stackBy": "drv",
      "colorBy": "drv",
      "colorScheme": "Highcharts",
      "legendTitleScaleFontFactor": 1.5
    }
  },
  {
    "Question": "Count data grouped by class and cyl using a bar graph in a vertical orientation. Color by cyl.",
    "Type": "Bar",
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
      "graphType": "Bar",
      "groupingFactors": [
        "class",
        "cyl"
      ],
      "graphOrientation": "vertical",
      "summaryType": "count",
      "colorBy": "cyl"
    }
  },
  {
    "Question": "Bar graph of hwy grouped and colored by drv. Draw a red line at 20 labeled as Cutoff. Set the graph orientation to horizontal. Set maximum value of x-axis to 30. Use the solarized style for the graph.",
    "Type": "Bar",
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
      "graphType": "Bar",
      "groupingFactors": [
        "drv"
      ],
      "colorBy": [
        "drv"
      ],
      "xAxis": [
        "hwy"
      ],
      "graphOrientation": "horizontal",
      "smpTextRotate": 0,
      "setMaxX": 30,
      "decorations": {
        "line": [
          {
            "align": "left",
            "color": "rgb(255,0,0)",
            "label": "Cutoff",
            "value": 20
          }
        ]
      },
      "theme": "solarized"
    }
  }
]