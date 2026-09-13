(function () {
  var gridView = document.getElementById("gridView");
  var detailView = document.getElementById("detailView");
  var searchInput = document.getElementById("searchInput");
  var categoriesEl = document.getElementById("categories");
  var backLink = document.getElementById("backLink");

  var byId = {};
  BHAJANS.forEach(function (song) {
    byId[song.id] = song;
  });

  var CATEGORY_ORDER = ["Ganesh", "Shiv", "Ram", "Krishna & Radha"];

  function buildGrid() {
    categoriesEl.innerHTML = "";
    CATEGORY_ORDER.forEach(function (cat) {
      var songs = BHAJANS.filter(function (s) { return s.category === cat; });
      if (!songs.length) return;

      var section = document.createElement("section");
      section.className = "category";
      section.setAttribute("data-cat", cat);

      var heading = document.createElement("h2");
      heading.className = "category-name";
      heading.textContent = cat;
      section.appendChild(heading);

      var list = document.createElement("ul");
      list.className = "song-list";

      songs.forEach(function (song) {
        var li = document.createElement("li");
        li.className = "song-item";
        li.setAttribute("data-title", song.title.toLowerCase());

        var a = document.createElement("a");
        a.href = "#" + song.id;
        a.textContent = song.title;
        li.appendChild(a);
        list.appendChild(li);
      });

      section.appendChild(list);
      categoriesEl.appendChild(section);
    });
  }

  function highlightRepeats(text) {
    return text.replace(/\((?:x|X)\s*\d+\)/g, function (match) {
      return '<span class="repeat">' + match + "</span>";
    });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function showDetail(id) {
    var song = byId[id];
    if (!song) {
      showGrid();
      return;
    }

    detailView.setAttribute("data-cat", song.category);
    document.getElementById("detailTitle").textContent = song.title;
    document.getElementById("detailCategory").textContent = song.category;

    var lyricsEl = document.getElementById("detailLyrics");
    var noticeEl = document.getElementById("detailNotice");

    if (song.excluded) {
      lyricsEl.style.display = "none";
      lyricsEl.innerHTML = "";
      noticeEl.style.display = "block";
      noticeEl.textContent =
        "This one is a copyrighted film/recording song, so the lyrics can't be posted here. Look it up on your usual music or lyrics app instead.";
    } else {
      noticeEl.style.display = "none";
      noticeEl.textContent = "";
      lyricsEl.style.display = "block";
      lyricsEl.innerHTML = highlightRepeats(escapeHtml(song.lyrics));
    }

    gridView.classList.add("is-hidden");
    detailView.classList.add("is-open");
    window.scrollTo(0, 0);
  }

  function showGrid() {
    detailView.classList.remove("is-open");
    gridView.classList.remove("is-hidden");
    window.scrollTo(0, 0);
  }

  function routeFromHash() {
    var id = location.hash.replace(/^#/, "");
    if (id && byId[id]) {
      showDetail(id);
    } else {
      showGrid();
    }
  }

  function applySearch() {
    var q = searchInput.value.trim().toLowerCase();
    var items = document.querySelectorAll(".song-item");
    var sections = document.querySelectorAll(".category");

    items.forEach(function (li) {
      var match = !q || li.getAttribute("data-title").indexOf(q) !== -1;
      li.classList.toggle("is-hidden", !match);
    });

    sections.forEach(function (section) {
      var visible = section.querySelectorAll(".song-item:not(.is-hidden)").length;
      section.style.display = visible ? "" : "none";
    });
  }

  backLink.addEventListener("click", function () {
    location.hash = "";
  });

  searchInput.addEventListener("input", applySearch);

  window.addEventListener("hashchange", routeFromHash);

  buildGrid();
  routeFromHash();
})();
