(function () {
  var root = document.querySelector("[data-filter-root]");
  if (!root) return;
  var input = root.querySelector("[data-filter-query]");
  var cards = Array.prototype.slice.call(root.querySelectorAll("[data-filter-card]"));
  var groups = Array.prototype.slice.call(root.querySelectorAll("[data-letter-group]"));
  var status = root.querySelector("[data-filter-status]");
  var empty = root.querySelector("[data-filter-empty]");
  var noun = root.getAttribute("data-filter-noun") || "result";
  var plural = root.getAttribute("data-filter-plural") || noun + "s";
  var letter = "all";
  var kind = "all";

  function apply() {
    var q = (input && input.value ? input.value : "").trim().toLowerCase();
    var shown = 0;
    cards.forEach(function (card) {
      var okLetter = letter === "all" || card.getAttribute("data-letter") === letter;
      var okKind = kind === "all" || card.getAttribute("data-kind") === kind;
      var hay = (card.getAttribute("data-search") || "").toLowerCase();
      var okQuery = !q || hay.indexOf(q) !== -1;
      var show = okLetter && okKind && okQuery;
      card.hidden = !show;
      if (show) shown += 1;
    });
    groups.forEach(function (group) {
      group.hidden = !group.querySelector("[data-filter-card]:not([hidden])");
    });
    if (status) status.textContent = shown + " " + (shown === 1 ? noun : plural);
    if (empty) empty.hidden = shown !== 0;
  }

  root.addEventListener("click", function (event) {
    var target = event.target;
    if (target && target.nodeType !== 1) target = target.parentElement;
    var btn = target && target.closest("[data-letter-choice], [data-kind-choice]");
    if (!btn || btn.disabled) return;
    if (btn.hasAttribute("data-letter-choice")) {
      letter = btn.getAttribute("data-letter-choice") || "all";
      var letters = root.querySelectorAll("[data-letter-choice]");
      for (var i = 0; i < letters.length; i++) {
        letters[i].setAttribute("aria-pressed", letters[i] === btn ? "true" : "false");
      }
    }
    if (btn.hasAttribute("data-kind-choice")) {
      kind = btn.getAttribute("data-kind-choice") || "all";
      var kinds = root.querySelectorAll("[data-kind-choice]");
      for (var j = 0; j < kinds.length; j++) {
        kinds[j].setAttribute("aria-pressed", kinds[j] === btn ? "true" : "false");
      }
    }
    apply();
  });

  if (input) input.addEventListener("input", apply);
})();
