var questions = [
  {
    "Question": "Boxplot of hwy by class. Rotate the sample text by 45 degrees and scale the font slightly. Set the graph orientation to vertical.",
    "Type": "Boxplot",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Boxplot",
      "groupingFactors": ["class"],
      "xAxis": ["hwy"],
      "graphOrientation": "vertical",
      "smpTextRotate": 45,
      "smpTextScaleFontFactor": 1.2
    }
  },
  {
    "Question": "Boxplot of hwy and cty by class. Set the graph orientation to horizontal and show the original data binned. Hide the whiskers.",
    "Type": "Boxplot",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Boxplot",
      "groupingFactors": ["class"],
      "xAxis": ["hwy", "cty"],
      "graphOrientation": "horizontal",
      "showBoxplotOriginalData": true,
      "binned": true,
      "boxplotWhiskersType": "none"
    }
  },
  {
    "Question": "Vertical boxplot of len by supp. Show the original data. Color by supp and size by dose. Rotate the sample text by 90 degrees. Use the Matlab color scheme. Set the legend title font slightly larger and the legend text font slightly smaller.",
    "Type": "Boxplot",
    "Header": ["Id", "dose", "supp", "len"],
    "Data": "tooth",
    "Answer": {
      "graphType": "Boxplot",
      "groupingFactors": ["supp"],
      "xAxis": ["len"],
      "graphOrientation": "vertical",
      "showBoxplotOriginalData": true,
      "sizeBy": "dose",
      "colorBy": "supp",
      "smpTextRotate": 90,
      "colorScheme": "Matlab",
      "legendTitleScaleFontFactor": 1.2,
      "legendTextScaleFontFactor": 0.8
    }
  },
  {
    "Question": "Vertical boxplot of hwy and cty by class. Show the original data points jittered and shaped by 'drv'. Exclude the class '2seater' and 'pickup'. Use the Tableau style.",
    "Type": "Boxplot",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Boxplot",
      "graphOrientation": "vertical",
      "groupingFactors": ["class"],
      "xAxis": ["hwy", "cty"],
      "showBoxplotOriginalData": true,
      "shapeBy": "drv",
      "jitter": true,
      "filterData": [["guess", 'class', "different", ["2seater", "pickup"]]],
      "theme": "tableau"
    }
  },
  {
    "Question": "Boxplot of hwy grouped by class and cyl. Convert cyl to string and color by cyl. Use the GGPlot style.",
    "Type": "Boxplot",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Boxplot",
      "graphOrientation": "vertical",
      "groupingFactors": ["class", "cyl"],
      "stringSampleFactors": ["cyl"],
      "colorBy": "cyl",
      "xAxis": ["hwy"],
      "theme": "GGPlot"
    }
  },
  {
    "Question": "Show notched boxplot of hwy by class using single whiskers. Split the samples by class.",
    "Type": "Boxplot",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Boxplot",
      "boxplotNotched": true,
      "boxplotWhiskersType": "single",
      "groupingFactors": ["class"],
      "splitSamplesBy": "class",
      "xAxis": ["hwy"],
      "graphOrientation": "vertical",
      "smpTextRotate": 45,
    }
  },
  {
    "Question": "Boxplot of hwy grouped by drv and class. Color the boxplot by drv and connect the boxplot. Set the graph orientation to horizontal. Hide the primary axis and show the secondary axis.",
    "Type": "Boxplot",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Boxplot",
      "groupingFactors": ["drv", "class"],
      "colorBy": ["drv"],
      "xAxis": ["hwy"],
      "graphOrientation": "horizontal",
      "boxplotConnect": true,
      "xAxisShow": false,
      "xAxis2Show": true
    }
  },
  {
    "Question": "Range Boxplot of cty grouped by drv. Set the graph orientation to horizontal. Hide the legend and set the title Range Boxplot of cty grouped by drv in bold.",
    "Type": "Boxplot",
    "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
    "Data": "mpg",
    "Answer": {
      "graphType": "Boxplot",
      "boxplotType": "range",
      "groupingFactors": ["drv"],
      "xAxis": ["cty"],
      "graphOrientation": "horizontal",
      "showLegend": false,
      "title": "Range Boxplot of cty grouped by drv",
      "titleFontStyle": "bold"
    }
  }
]