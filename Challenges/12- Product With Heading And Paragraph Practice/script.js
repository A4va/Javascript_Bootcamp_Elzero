
for (let i = 1; i <= 100; i++) {
// Elements
let divProduct = document.createElement("div")
let h2Product = document.createElement("h2")
let pProduct = document.createElement("p")
let hr = document.createElement("hr")


// Text
let h2TextProduct = document.createTextNode(`${i}- The Product Title:-`)
let pTextProduct = document.createTextNode(`${i}- The Product Description`)

// Set
divProduct.setAttribute("class","product")

// Append Elements
document.body.appendChild(divProduct)
divProduct.appendChild(h2Product)
divProduct.appendChild(pProduct)
document.body.appendChild(hr)


// Append Text
h2Product.appendChild(h2TextProduct)
pProduct.appendChild(pTextProduct)
}