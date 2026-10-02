const CART_KEY = "fieldmark_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId, size, qty) {
  const cart = getCart();
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, size: size, qty: qty });
  }
  saveCart(cart);
}

function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(i => !(i.id === productId && i.size === size));
  saveCart(cart);
}

function updateQty(productId, size, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId && i.size === size);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateCartCount() {
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = cartCount();
  });
}

document.addEventListener("DOMContentLoaded", updateCartCount);
