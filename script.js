//your JS code here. If required.
const divEle = document.getElementById("browser-info");

const str = `You are using ${navigator.appName} version ${navigator.appVersion}`;
divEle.innerText = str;