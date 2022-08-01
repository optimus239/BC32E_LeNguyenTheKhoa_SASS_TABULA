let getElement = (id) => {
  return document.getElementById(id);
};

getElement("btntoggle").onclick = () => {
  getElement("mainSidebar").classList.toggle("show");
  getElement("main").classList.toggle("show");
  getElement("logo").classList.toggle("show");
  getElement("btntoggle").classList.toggle("show");
  getElement("body").classList.toggle("no-scroll");
};

let querySelect = (i) => {
  return document.querySelector(i);
};

// location.reload(){

// }

window.onscroll = () => {
  scrollFuction();
};

function scrollFuction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    querySelect("header").className = `header-sub header-close`;
  } else {
    querySelect("header").className = `header header-close`;
  }
}
