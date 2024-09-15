var questions = [
  {
    "Question": "Create a line graph of Series A. Set the title in green to Simple Line Graph. Set the primary axis title to Value and the y-axis title to Date. Rotate the sample text labels 30 degrees. Hide the legend",
    "Type": "Line",
    "Header": [
      "Date",
      "Series A",
      "Series B",
      "Series C",
      "Quarter"
    ],
    "Data": "ds24x2x3",
    "Answer": {
      "graphType": "Line",
      "showLegend": false,
      "smpTextRotate": "30",
      "smpTitle": "Date",
      "title": "Simple Line Graph",
      "titleColor": "green",
      "xAxis": [
        "Series A"
      ],
      "xAxisTitle": "Value"
    }
  },
  {
    "Question": "Create a line graph of Series A, Series B and Series C using the Tableau style. Rotate the sample text labels 30 degrees. Put the legend on top in 3 columns with bigger text. Set the title to Line Graph of all Series",
    "Type": "Line",
    "Header": [
      "Date",
      "Series A",
      "Series B",
      "Series C",
      "Quarter"
    ],
    "Data": "ds24x2x3",
    "Answer": {
      "graphType": "Line",
      "xAxis": [
        "Series A",
        "Series B",
        "Series C"
      ],
      "theme": "tableau",
      "legendPosition": "top",
      "legendColumns": 3,
      "legendTextScaleFontFactor": 1.3,
      "title": "Line Graph of all Series",
      "smpTextRotate": 30
    }
  },
  {
    "Question": "Line graph of Date versus Value colored by Series. Format the x-axis as a time series. Set the x-axis title to Date and the y-axis title to Value. Set sligthly bigger the font size for the y-axis text",
    "Type": "Line",
    "Header": [
      "Date",
      "Series",
      "Value",
      "Quarter"
    ],
    "Data": "ds72x1x2",
    "Answer": {
      "colorBy": "Series",
      "graphType": "Line",
      "xAxis": [
        "Date"
      ],
      "xAxisTime": true,
      "xAxisTitle": "Date",
      "yAxis": [
        "Value"
      ],
      "yAxisTextScaleFontFactor": 1.1,
      "yAxisTitle": "Value"
    }
  },
  {
    "Question": "Create a vertical line graph of Series A and hide the legend. Use the Stata style for the plot",
    "Type": "Line",
    "Header": [
      "Date",
      "Series A",
      "Series B",
      "Series C",
      "Quarter"
    ],
    "Data": "ds6x3x1",
    "Answer": {
      "graphType": "Line",
      "xAxis": [
        "Series A"
      ],
      "graphOrientation": "vertical",
      "showLegend": false,
      "theme": "stata"
    }
  },
  {
    "Question": "Create a vertical line graph of Series A, Series B and Series C using the Prism color scheme using splines. Rotate the sample text labels 90 degrees. Set the title to Line Graph of all Series",
    "Type": "Line",
    "Header": [
      "Date",
      "Series A",
      "Series B",
      "Series C",
      "Quarter"
    ],
    "Data": "ds6x3x1",
    "Answer": {
      "graphType": "Line",
      "xAxis": [
        "Series A",
        "Series B",
        "Series C"
      ],
      "colorScheme": "Prism",
      "lineType": "spline",
      "title": "Line Graph of all Series",
      "graphOrientation": "vertical",
      "smpTextRotate": 90
    }
  },
  {
    "Question": "Create a vertical line graph of Series A, Series B and Series C using splines and the ggplot color scheme and style. Rotate the sample text labels 90 degrees. Show only the data for Quarter Q1",
    "Type": "Line",
    "Header": [
      "Date",
      "Series A",
      "Series B",
      "Series C",
      "Quarter"
    ],
    "Data": "ds6x3x1",
    "Answer": {
      "graphType": "Line",
      "xAxis": [
        "Series A",
        "Series B",
        "Series C"
      ],
      "lineType": "spline",
      "graphOrientation": "vertical",
      "smpTextRotate": 90,
      "theme": "GGPlot",
      "colorScheme": "GGPlot",
      "filterData": [
        [
          "guess",
          "Quarter",
          "exact",
          [
            "Q1"
          ]
        ]
      ]
    }
  },
  {
    "Question": "Create a vertical line graph of hwy and no legend. Space the sample text labels every 20 units. Rotate the sample text labels 90 degrees. Set the title to mpg dataset excluding suv class and f drv. Set the axis title to hwy. Exclude the data for the suv class and the data for the drv f",
    "Type": "Line",
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
      "graphOrientation": "vertical",
      "graphType": "Line",
      "showLegend": false,
      "smpLabelInterval": 20,
      "smpTextRotate": 90,
      "smpTitle": "Values",
      "title": "mpg dataset excluding suv class and f drv",
      "xAxis": [
        "hwy"
      ],
      "xAxisTitle": "hwy",
      "filterData": [
        [
          "guess",
          "drv",
          "different",
          [
            "f"
          ]
        ],
        [
          "guess",
          "class",
          "different",
          [
            "suv"
          ]
        ]
      ]
    }
  },
  {
    "Question": "Create a vertical line graph of hwy and cty grouped by class showing the mean. Rotate the sample text labels 30 degrees. Set the title to mpg dataset grouped by class and set the subtitle to cty and hwy. Use the style theme of solarized. Set the title font size a little bit bigger",
    "Type": "Line",
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
      "graphOrientation": "vertical",
      "graphType": "Line",
      "groupingFactors": [
        "class"
      ],
      "smpTextRotate": 30,
      "subtitle": "cty and hwy",
      "summaryType": "mean",
      "theme": "solarized",
      "title": "mpg dataset grouped by class",
      "titleScaleFontFactor": 1.3,
      "xAxis": [
        "hwy",
        "cty"
      ]
    }
  },
  {
    "Question": "Create a vertical line graph of hwy and cty grouped by class showing the mean and the error bars as area using a spline. Set the title to Line Graph of hwy and cty grouped by class in bold. Set the legend text size a little bit bigger. Rotate the sample text labels 30 degrees",
    "Type": "Line",
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
      "graphOrientation": "vertical",
      "graphType": "Line",
      "groupingFactors": [
        "class"
      ],
      "legendTextScaleFontFactor": 1.3,
      "lineErrorType": "area",
      "lineType": "spline",
      "smpTextRotate": 30,
      "summaryType": "mean",
      "title": "Line Graph of hwy and cty grouped by class",
      "titleFontStyle": "bold",
      "xAxis": [
        "hwy",
        "cty"
      ]
    }
  },
  {
    "Question": "Create a line graph of Time versus mean colored by Condition. Add a ribbon showing the CI_upper and CI_lower. Set the title to Spatiotemporal Control of RhoGTPase Activation. Set the x-axis title to Time [s] and the y-axis title to Ratio YFP/CFP [-] both in italic. Add a citation https://www.molbiolcell.org/doi/full/10.1091/mbc.e17-03-0136 and make it very small. Use the CanvasXpress theme",
    "Type": "Line",
    "Header": [
      "Id",
      "Condition",
      "n",
      "Time",
      "mean",
      "sd",
      "sem",
      "CI_lower",
      "CI_upper"
    ],
    "Data": "rho",
    "Answer": {
      "citation": "https://www.molbiolcell.org/doi/full/10.1091/mbc.e17-03-0136",
      "citationScaleFontFactor": 0.6,
      "colorBy": "Condition",
      "graphType": "Line",
      "ribbonBy": [
        "CI_upper",
        "CI_lower"
      ],
      "theme": "CanvasXpress",
      "title": "Spatiotemporal Control of RhoGTPase Activation",
      "xAxis": [
        "Time"
      ],
      "xAxisTitle": "Time [s]",
      "xAxisTitleFontStyle": "italic",
      "yAxis": [
        "mean"
      ],
      "yAxisTitle": "Ratio YFP/CFP [-]",
      "yAxisTitleFontStyle": "italic"
    }
  }
]