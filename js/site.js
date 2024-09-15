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

  for (var ii = 0; ii < questions.length; ii++) {
    if (ii != 53) {
      //continue;
    }
    var q = questions[ii];
    var d = window[q.Data];
    var t = q.Question;
    var j = q.Answer;
    var c = "Q" + (ii + 1);
    if (Object.keys(j).length == 0) {
      continue;
    }
    insertVis(c, t, 500, 500, d, j);
  }
}