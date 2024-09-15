var questions = [
    {
        "Question": "Violin plot grouped by class and color the original data by cyl",
        "Type": "Violin",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "graphType": "Boxplot",
          "groupingFactors": ["class"],
          "xAxis": ["hwy"],
          "showBoxplotOriginalData": true,
          "colorBy": ["cyl"],
          "stringSampleFactors": ["cyl"],
          "showViolinBoxplot": true,
          "jitter": true,
          "graphOrientation": "vertical",
          "showBoxplotIfViolin": false,
          "smpTextRotate": 45
        }
      },
      {
        "Question": "Violin plot of hwy grouped by class. Set the graph orientation to horizontal. Do not trim the violin. Hide the legend. Set the title to Violin plot of hwy grouped by class.",
        "Type": "Violin",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "title": "Violin plot of hwy grouped by class",
          "graphType": "Boxplot",
          "groupingFactors": ["class"],
          "xAxis": ["hwy"],
          "showViolinBoxplot": true,
          "graphOrientation": "horizontal",
          "showBoxplotIfViolin": false,
          "violinTrim": false,
          "showLegend": false
        }
      },
      {
        "Question": "Violin plot of cty grouped by cyl with a boxplot. Set the graph orientation to vertical. Set the title to Violin plot of cty grouped by cyl. Rotate the sample text by 90 degrees.",
        "Type": "Violin",
        "Header": ["Id", "class", "cty", "cyl", "drv", "fl", "manufacturer", "model", "trans", "year", "displ", "hwy"],
        "Data": "mpg",
        "Answer": {
          "title": "Violin plot of cty grouped by cyl",
          "graphType": "Boxplot",
          "groupingFactors": ["cyl"],
          "xAxis": ["cty"],
          "showViolinBoxplot": true,
          "graphOrientation": "vertical",
          "showBoxplotIfViolin": true,
          "smpTextRotate": 90
        }
      }
    ]