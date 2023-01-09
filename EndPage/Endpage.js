let indData = JSON.parse(localStorage.getItem("individual"));

console.log(indData.product.addressResponseDTO.displayAddress)
console.log(indData.product.addressResponseDTO.line2)


document.getElementById("location_text").textContent = indData.product.addressResponseDTO.displayAddress + " " + indData.product.addressResponseDTO.line2;