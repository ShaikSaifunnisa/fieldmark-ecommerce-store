// FIELDMARK — shared UI behaviour

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.style.display === "flex";
      nav.style.display = isOpen ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "72px";
      nav.style.left = "0";
      nav.style.right = "0";
      nav.style.background = "var(--paper)";
      nav.style.padding = "18px 28px";
      nav.style.borderBottom = "1px solid var(--line)";
      nav.style.gap = "16px";
    });
  }

  const newsForm = document.querySelector(".news-form");
  if (newsForm) {
    newsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = newsForm.querySelector("input");
      const btn = newsForm.querySelector("button");
      const original = btn.textContent;
      btn.textContent = "Subscribed";
      input.value = "";
      setTimeout(() => { btn.textContent = original; }, 2200);
    });
  }
});

// Renders a row of product cards into a container element.
function renderProductCards(container, products) {
  container.innerHTML = products.map(p => `
    <a class="product-card" href="product.html?id=${p.id}">
      <div class="product-thumb">
        <img src="${productImage(p.seed, 500, 620)}" alt="${p.name}" loading="lazy">
        <button class="product-add" type="button" title="Quick add" onclick="event.preventDefault(); quickAdd('${p.id}')">+</button>
      </div>
      <div class="product-cat">${p.category}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price">${formatPrice(p.price)}</div>
    </a>
  `).join("");
}

function quickAdd(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  addToCart(productId, product.sizes[0], 1);
  const el = document.querySelector(`[data-flash]`);
  flashMessage(`${product.name} added to cart`);
}

function flashMessage(text) {
  let el = document.getElementById("flash-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "flash-toast";
    el.style.position = "fixed";
    el.style.bottom = "24px";
    el.style.left = "50%";
    el.style.transform = "translateX(-50%)";
    el.style.background = "var(--ink)";
    el.style.color = "var(--stone)";
    el.style.padding = "13px 22px";
    el.style.fontSize = "14px";
    el.style.zIndex = "100";
    el.style.transition = "opacity 0.25s ease";
    document.body.appendChild(el);
  }
  el.textContent = text;
  el.style.opacity = "1";
  clearTimeout(window.__flashTimer);
  window.__flashTimer = setTimeout(() => { el.style.opacity = "0"; }, 1800);
}
