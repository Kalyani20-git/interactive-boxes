 const boxes = document.querySelectorAll('.box');
    const addToCartButton = document.querySelector('.add-to-cart');
    const cartSummary = document.getElementById('cart-summary');

    boxes.forEach(box => {
      box.addEventListener('click', () => {
        boxes.forEach(b => b.classList.remove('active'));
        box.classList.add('active');
      });
    });

    addToCartButton.addEventListener('click', () => {
      const activeBox = document.querySelector('.box.active');
      const price = parseFloat(activeBox.getAttribute('data-price'));
      const unit = activeBox.querySelector('.box-header div').textContent.trim();

      const currentItems = cartSummary.innerHTML;
      const itemLine = `<div>${unit} - $${price.toFixed(2)}</div>`;

      cartSummary.innerHTML = currentItems + itemLine;

      // Recalculate total
      const allPrices = cartSummary.innerText.match(/\$(\d+\.\d+)/g) || [];
      const total = allPrices.reduce((sum, val) => sum + parseFloat(val.slice(1)), 0);

      cartSummary.innerHTML += `<hr><strong>Total: $${total.toFixed(2)}</strong>`;
    });