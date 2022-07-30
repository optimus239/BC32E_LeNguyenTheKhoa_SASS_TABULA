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

window.onscroll = () => {
  scrollFuction();
};

function scrollFuction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    getElement("navbar-header").style.height = "48px";
    getElement("navbar-header").style.backgroundColor = "#fff";
    getElement("headerPage").style.backgroundColor = "#fff";
    getElement("logo").style.display = "none";
    getElement("navbarUl").style.marginLeft = "355px";
    getElement("circle-about").style.top = "-6px";
    getElement("phone-header").style.padding = "10px 20px";
  } else {
    getElement("navbar-header").style.height = "80px";
    getElement("navbar-header").style.backgroundColor = "transparent";
    getElement("headerPage").style.backgroundColor = "transparent";
    getElement("logo").style.display = "inline-block";
    getElement("navbarUl").style.marginLeft = "275px";
    getElement("circle-about").style.top = "26px";
    getElement("phone-header").style.padding = "14px 20px";
  }
}
