import { Cookie } from './cookie.js';
import { renderMessage } from './umessage.js';

let timerIdPreview = 0;
let timerIdTitle = 0;
const symbols = {
  line: "—\\|/",
  pipe: "┤┘┴└├┌┬┐",
  dots: ["🢞 🢞 🢞", "🢞  ", "🢞 🢞 "],
  star: "✺✹✷",
  arrow: "↖↗↘↙",
  grow: "▆▂▃▅",
  ham: "☴☱☲",
  spin: "◱◰◳◲",
};

const loaderList = document.querySelectorAll("li"),
   dropDownBtn = document.querySelector(".loader-list-btn"),
   dropDownName = document.querySelector(".loader-list-btn p"),
   dropDown = document.querySelector(".loader-list"),
   previewBlock = document.querySelector(".loader-preview"),
   visitMessage = document.querySelector(".last-visit-container");

function animate(obj) {
  obj.index = (obj.index + 1) % obj.symbol.length;
  if (obj.updatePreview) previewBlock.textContent = obj.symbol[obj.index];
  if (obj.updateTitle) document.title = obj.symbol[obj.index];
}

function parse() {
  let cookieName = "lastVisit";
  let curTime = Date.now();
  const lastVisit = Cookie.get(cookieName);
  Cookie.set(cookieName, curTime);

  if (lastVisit.length > 0) {
    visitMessage.textContent = renderMessage(lastVisit, curTime);
  }
  reloadTitle(Cookie.get('title'));
}

function reloadTitle(ctitle) {
    if (ctitle.length > 0) {
      if (timerIdTitle) clearInterval(timerIdTitle);

    timerIdTitle = setInterval(animate, 700, {
          symbol: symbols[ctitle],
          index: 0,
          updateTitle: true,
          updatePreview: false, 
        });
    } else {  document.title = 'Spinner'}
}
parse();

//custom drop-down
dropDownBtn.addEventListener("click", () => {
    toggleList();
});
function toggleList(){
    dropDown.classList.toggle("show");
    dropDownBtn.classList.toggle("selected");
}

//events
loaderList.forEach((li) => li.addEventListener("click", (e) => {
    if (timerIdPreview) clearInterval(timerIdPreview);

    timerIdPreview = setInterval(animate, 700, {
      symbol: symbols[e.target.id],
      index: 0,
      updateTitle: false,
      updatePreview: true,
    });

    Cookie.set('title', e.target.id);
    reloadTitle(Cookie.get('title'));
    dropDownName.textContent = e.target.textContent; 
    toggleList();
  })
);

loaderList.forEach((li) => li.addEventListener("mouseover", (e) => {
    if (timerIdPreview) clearInterval(timerIdPreview);
    timerIdPreview = setInterval(animate, 700, {
      symbol: symbols[e.target.id],
      index: 0,
      updateTitle: false, 
      updatePreview: true, 
    });
  })
);