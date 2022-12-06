init();

function init() {
  addStyleSheet();
  console.log("hello");
  window.onload = addMobileAppBanner
}

function addStyleSheet() {
  const link = document.createElement("link");
  link.setAttribute("href", "https://raw.githubusercontent.com/bhavesh-appbrew/test/main/style.css");
  link.setAttribute("rel", "stylesheet");
  document.getElementsByTagName("head")[0].append(link);
}

function addMobileAppBanner() {
  const block = document.createElement("div");
  block.setAttribute("id", "mobile-app-banner");
  block.innerHTML = `<span id="mobile-app-banner-text">
    Enjoy exclusive deals on our mobile app
  </span>
  <button id="mobile-app-download-button">DOWNLOAD APP</button>`;
  document.getElementsByTagName('body')[0].insertBefore(block, document.getElementsByClassName('shopify-section')[0])
}
