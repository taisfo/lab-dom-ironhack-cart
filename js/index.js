function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  let quantity = quantityElement.value;
  let price = priceElement.innerText;

  let subtotal = parseFloat(price) * parseInt(quantity);

  subtotalElement.innerText = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');

  let total = 0;
  for (let product of allProducts) {
    total += updateSubtotal(product);
  }

  const totalElement = document.querySelector('#total-value span');

  totalElement.innerText = total.toFixed(2);
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

function createProduct() {}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
