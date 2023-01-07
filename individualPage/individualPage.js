// Localstorage

let individualData = JSON.parse(localStorage.getItem("individual")) || {};


// Title
console.log(individualData.product);
document.title = individualData.product.seoTitle;