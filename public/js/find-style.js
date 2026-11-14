(function () {
  var form = document.querySelector("[data-finder]");
  if (!form) return;
  var out = document.querySelector("[data-finder-result]");
  var names = {
    sfumato: "Sfumato",
    chiaroscuro: "Chiaroscuro",
    "ukiyo-e": "Ukiyo-e",
    bauhaus: "Bauhaus",
    "art-nouveau": "Art Nouveau",
    brutalism: "Brutalism",
    impressionism: "Impressionism",
    cubism: "Cubism",
    surrealism: "Surrealism",
    "abstract-expressionism": "Abstract Expressionism",
    "pop-art": "Pop Art",
    "de-stijl": "De Stijl",
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var edge = String(data.get("edge") || "");
    var thing = String(data.get("thing") || "");
    var file = String(data.get("file") || "");
    var counts = {};
    [edge, thing, file].forEach(function (slug) {
      if (!names[slug]) return;
      counts[slug] = (counts[slug] || 0) + 1;
    });
    var best = 0;
    Object.keys(counts).forEach(function (slug) {
      if (counts[slug] > best) best = counts[slug];
    });
    var tied = Object.keys(counts).filter(function (slug) {
      return counts[slug] === best;
    });
    var winner = tied.indexOf(edge) !== -1 ? edge : tied[0];
    var name = names[winner];
    if (!out || !name) return;
    out.hidden = false;
    out.replaceChildren();
    var p = document.createElement("p");
    var split = tied.length > 1 ? " The answers split, so this placeholder breaks the tie toward the edge you chose." : "";
    p.textContent =
      "Placeholder result: " +
      name +
      ". A direction, not a verdict. This sorter only knows the styles on the board." +
      split;
    var link = document.createElement("a");
    link.href = "/styles/" + winner;
    link.textContent = "Open " + name + " and its starter files";
    out.appendChild(p);
    out.appendChild(link);
  });
})();
