let getElement = (id) => {
  return document.getElementById(id);
};

getElement("btntoggle").onclick = () => {
  getElement("mainSidebar").classList.toggle("show");
  getElement("main").classList.toggle("show");
  getElement("logo").classList.toggle("show");
  getElement("btntoggle").classList.toggle("show");
};

window.onscroll = () => {
  scrollFuction();
};

// function scrollFuction() {
//   if (
//     // document.body.scrollTop > 300 ||
//     document.documentElement.scrollTop > 300
//   ) {
//     getElement("navbar-header").style.height = "48px";
//     getElement("navbar-header").style.backgroundColor = "#fff";
//     getElement("headerPage").style.backgroundColor = "#fff";
//     getElement("logo").style.display = "none";
//   } else {
//     getElement("navbar-header").style.height = "80px";
//     getElement("navbar-header").style.backgroundColor = "transparent";
//   }
// }
