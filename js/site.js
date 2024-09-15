var loadCX = function (debug) {
  var files = debug ? [
    "http://localhost:8000/build/js/canvasXpress.init.js",
    "http://localhost:8000/build/js/canvasXpress.process.js",
    "http://localhost:8000/build/js/canvasXpress.start.js",
    "http://localhost:8000/build/js/canvasXpress.dataset.js",
    "http://localhost:8000/build/js/canvasXpress.aesthetics.js",
    "http://localhost:8000/build/js/canvasXpress.scale.js",
    "http://localhost:8000/build/js/canvasXpress.geometry.js",
    "http://localhost:8000/build/js/canvasXpress.statistics.js",
    "http://localhost:8000/build/js/canvasXpress.facets.js",
    "http://localhost:8000/build/js/canvasXpress.coordinates.js",
    "http://localhost:8000/build/js/canvasXpress.theme.js",
    "http://localhost:8000/build/js/canvasXpress.render.js",
    "http://localhost:8000/build/js/canvasXpress.UI.js",
    "http://localhost:8000/build/js/canvasXpress.dom.js",
    "http://localhost:8000/build/js/canvasXpress.svg.js",
    "http://localhost:8000/build/js/canvasXpress.interface.js",
    "http://localhost:8000/build/js/canvasXpress.save.js",
    "http://localhost:8000/build/js/canvasXpress.config.js",
    "http://localhost:8000/build/js/canvasXpress.date.js",
    "http://localhost:8000/build/js/canvasXpress.text.js",
    "http://localhost:8000/build/js/canvasXpress.time.js",
    "http://localhost:8000/build/js/canvasXpress.color.js",
    "http://localhost:8000/build/js/canvasXpress.attributes.js",
    "http://localhost:8000/build/js/canvasXpress.algorithm.js",
    "http://localhost:8000/build/js/canvasXpress.primitives.js",
    "http://localhost:8000/build/js/canvasXpress.utilsGeneral.js",
    "http://localhost:8000/build/js/canvasXpress.utilsPlot.js",
    "http://localhost:8000/build/js/canvasXpress.utilsConfig.js",
    "http://localhost:8000/build/js/canvasXpress.utils3d.js",
    "http://localhost:8000/build/js/canvasXpress.utilsApi.js",
    "http://localhost:8000/build/js/canvasXpress.utilsDimension.js",
    "http://localhost:8000/build/js/canvasXpress.utils.js",
    "http://localhost:8000/build/js/canvasXpress.legend.js",
    "http://localhost:8000/build/js/canvasXpress.marker.js",
    "http://localhost:8000/build/js/canvasXpress.filter.js",
    "http://localhost:8000/build/js/canvasXpress.cluster.js",
    "http://localhost:8000/build/js/canvasXpress.sort.js",
    "http://localhost:8000/build/js/canvasXpress.numeric.js",
    "http://localhost:8000/build/js/canvasXpress.jLouvain.js",
    "http://localhost:8000/build/js/canvasXpress.cola.js",
    "http://localhost:8000/build/js/canvasXpress.crypt.js",
    "http://localhost:8000/build/js/canvasXpress.math.js",
    "http://localhost:8000/build/js/canvasXpress.sankeyUtils.js",
    "http://localhost:8000/build/js/canvasXpress.circlePackUtils.js",
    "http://localhost:8000/build/js/canvasXpress.treeUtils.js",
    "http://localhost:8000/build/js/canvasXpress.networkUtils.js",
    "http://localhost:8000/build/js/canvasXpress.complex.js",
    "http://localhost:8000/build/js/canvasXpress.fft.js",
    "http://localhost:8000/build/js/canvasXpress.contour.js",
    "http://localhost:8000/build/js/canvasXpress.density.js",
    "http://localhost:8000/build/js/canvasXpress.hist.js",
    "http://localhost:8000/build/js/canvasXpress.loess.js",
    "http://localhost:8000/build/js/canvasXpress.quantreg.js",
    "http://localhost:8000/build/js/canvasXpress.lapack.js",
    "http://localhost:8000/build/js/canvasXpress.layout.js",
    "http://localhost:8000/build/js/canvasXpress.viewport.js",
    "http://localhost:8000/build/js/canvasXpress.menu.js",
    "http://localhost:8000/build/js/canvasXpress.links.js",
    "http://localhost:8000/build/js/canvasXpress.tooltip.js",
    "http://localhost:8000/build/js/canvasXpress.tooltipMouse.js",
    "http://localhost:8000/build/js/canvasXpress.tooltipDiv.js",
    "http://localhost:8000/build/js/canvasXpress.toolbar.js",
    "http://localhost:8000/build/js/canvasXpress.code.js",
    "http://localhost:8000/build/js/canvasXpress.bin.js",
    "http://localhost:8000/build/js/canvasXpress.customizer.js",
    "http://localhost:8000/build/js/canvasXpress.datafilter.js",
    "http://localhost:8000/build/js/canvasXpress.datatable.js",
    "http://localhost:8000/build/js/canvasXpress.resizer.js",
    "http://localhost:8000/build/js/canvasXpress.motion.js",
    "http://localhost:8000/build/js/canvasXpress.drag.js",
    "http://localhost:8000/build/js/canvasXpress.key.js",
    "http://localhost:8000/build/js/canvasXpress.select.js",
    "http://localhost:8000/build/js/canvasXpress.dendrogram.js",
    "http://localhost:8000/build/js/canvasXpress.canvas.js",
    "http://localhost:8000/build/js/canvasXpress.cleanup.js",
    "http://localhost:8000/build/js/canvasXpress.events.js",
    "http://localhost:8000/build/js/canvasXpress.animation.js",
    "http://localhost:8000/build/js/canvasXpress.example.js",
    "http://localhost:8000/build/js/canvasXpress.data.js",
    "http://localhost:8000/build/js/canvasXpress.dataUtils.js",
    "http://localhost:8000/build/js/canvasXpress.random.js",
    "http://localhost:8000/build/js/canvasXpress.fx.js",
    "http://localhost:8000/build/js/canvasXpress.remote.js",
    "http://localhost:8000/build/js/canvasXpress.graph.js",
    "http://localhost:8000/build/js/canvasXpress.axis.js",
    "http://localhost:8000/build/js/canvasXpress.cxplot.js",
    "http://localhost:8000/build/js/canvasXpress.pie.js",
    "http://localhost:8000/build/js/canvasXpress.venn.js",
    "http://localhost:8000/build/js/canvasXpress.correlation.js",
    "http://localhost:8000/build/js/canvasXpress.scatter2d.js",
    "http://localhost:8000/build/js/canvasXpress.scatter3d.js",
    "http://localhost:8000/build/js/canvasXpress.onedplot.js",
    "http://localhost:8000/build/js/canvasXpress.network.js",
    "http://localhost:8000/build/js/canvasXpress.genome.js",
    "http://localhost:8000/build/js/canvasXpress.circular.js",
    "http://localhost:8000/build/js/canvasXpress.map.js",
    "http://localhost:8000/build/js/canvasXpress.orthographic.js",
    "http://localhost:8000/build/js/canvasXpress.images.js",
    "http://localhost:8000/build/js/canvasXpress.icons.js",
    "http://localhost:8000/build/js/canvasXpress.doc.js",
    "http://localhost:8000/build/js/canvasXpress.react.js",
    "http://localhost:8000/build/js/canvasXpress.IO.js"
  ] : [
    "https://www.canvasxpress.org/dist/canvasXpress.min.js"
  ];
  var head = document.getElementsByTagName("head")[0];
  for (var i = 0; i < files.length; i++) {
    var script = document.createElement("script");
    script.setAttribute("src", files[i]);
    script.setAttribute("type", "text/javascript");
    script.setAttribute("async", false);
    head.appendChild(script);
  }
}

var loadDatasets = function () {
  var files = [
    "../js/mpg.js",
    "../js/tooth.js",
    "../js/ds6x3x1.js",
    "../js/ds12x3x1.js",
    "../js/ds24x3x1.js",
    "../js/ds72x1x2.js",
    "../js/rho.js",
    "../js/cells.js",
    "../js/cellsx.js",
  ];
  var head = document.getElementsByTagName("head")[0];
  for (var i = 0; i < files.length; i++) {
    var script = document.createElement("script");
    script.setAttribute("src", files[i]);
    script.setAttribute("type", "text/javascript");
    script.setAttribute("async", false);
    head.appendChild(script);
  }
}

var loadJSON = function (graph) {
  var file = "../json/" + graph + ".json";
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.setAttribute("id", graph);
  script.setAttribute("src", file);
  script.setAttribute("type", "text/json");
  script.setAttribute("async", false);
  head.appendChild(script);
  return JSON.parse(document.getElementById(graph).innerHTML);
}

var insertContainer = function (id, title, width, height) {
  if (id) {
    var cnt = document.createElement("div");
    cnt.className = "container";
    var tit = document.createElement("div");
    tit.className = "title";
    tit.innerHTML = title;
    var plt = document.createElement("div");
    plt.className = "plot";
    var div = document.createElement("div");
    var cnv = document.createElement("canvas");
    cnv.id = id;
    cnv.width = width || 500;
    cnv.height = height || 500;
    cnv.dataset.aspectRatio = "1:1";
    cnv.dataset.responsive = "true";
    cnt.appendChild(tit);
    cnt.appendChild(plt);
    plt.appendChild(div);
    div.appendChild(cnv);
    document.querySelector(".content").appendChild(cnt);
  }
};

var getData = function (data) {
  return JSON.parse(JSON.stringify(data));
}

var insertVis = function (id, title, width, height, data, cnf) {
  insertContainer(id, title, width, height);
  new CanvasXpress(id, getData(data), cnf);
}

var loadQuestions = function () {

  for (var ii = 0; ii < json.Questions.length; ii++) {
    if (ii != 53) {
      //continue;
    }
    var q = json.Questions[ii];
    var d = q.Data;
    var t = q.Question;
    var j = q.Answer;
    var c = "Q" + (ii + 1);
    if (Object.keys(j).length == 0) {
      continue;
    }
    insertVis(c, t, 500, 500, d, j);
  }
}