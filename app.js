function updateProductNumber(product, price, isIncreasing) {
  const productCounter = document.getElementById(product + "-counter");
  let procutNumber = productCounter.value;
  if (isIncreasing) {
    procutNumber = parseFloat(procutNumber) + 1;
  } else if (procutNumber > 0) {
    procutNumber = parseFloat(procutNumber) - 1;
  }
  productCounter.value = procutNumber;

  // Update Total
  const productTotal = document.getElementById(product + "-price");
  productTotal.innerText = procutNumber * price;

  // Calculate Total and tax
  calculateTotal();
}

// Get Input Value for Calculation of Total
function getInputValue(product) {
  const productCounter = document.getElementById(product + "-counter");
  const procutNumber = parseFloat(productCounter.value);
  return procutNumber;
}
// Calculation for subtotal, tax and Total
function calculateTotal() {
  const phonePrice = getInputValue("phone") * 1200;
  const casePrice = getInputValue("case") * 50;
  const subTotal = phonePrice + casePrice;
  const taxTotal = subTotal / 10;
  const Total = subTotal + taxTotal;
  // Update on the HTML
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = taxTotal;
  document.getElementById("total-price").innerText = Total;
}

// handle phone increase decrease events
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1200, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1200, false);
});
// handle case increase decrease event
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 50, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 50, false);
});
