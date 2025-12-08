# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- This is a static HTML/CSS/JS project. There is no build system, package manager, linter, or test framework configured.
- All data/state is stored in the browser’s localStorage. There is no backend.
- Pages cover roles and flows like landing/menu, admin, and customer shopping/cart/checkout.

How to run (Windows, PowerShell)
- Open directly in your default browser (quickest):
  - start .\index.html
  - start .\menu.html
  - start .\customer.html
  - start .\admin.html
- Serve locally on http://localhost:8080 (recommended to avoid potential file:// CORS issues):
  - If Python is installed: py -m http.server 8080
  - Then open: start http://localhost:8080/index.html
- There is no build, lint, or test command in this repo.

High-level architecture
- Pages
  - index.html: Marketing/landing page with basic header and featured items.
  - menu.html: Customer-facing in-store menu. Contains an “admin edit mode” UI when the logged-in user is an admin (controlled via localStorage user role). Uses inline scripts to add/delete menu items by updating localStorage.
  - customer.html: Customer shopping experience with categories, product cards, cart side panel, and place-order flow. Contains its own inline “data manager” logic (initialization, render categories/products, cart manipulation, and placeOrder) that reads/writes to localStorage.
  - admin.html: Admin dashboard with stats (sales, orders today, total customers), recent orders table, low-stock list, and menu item CRUD. Loads a shared data module and renders admin views from localStorage.
  - Other role pages exist (cashier.html, supervisor.html, delivery.html, admin_inventory.html, admin_logins.html) but are not required to understand the primary flows above.
- Shared/local data layer
  - data_manager.js: Initializes and maintains localStorage “tables” and provides functions like:
    - initializeData, getMenu, getItemsByCategory, saveMenu, addItem, updateItem, deleteItem
    - placeOrder: updates menu stock/sold counts and appends to bistroOrders
    - logLogin/getLoginHistory and resetUsers
  - Keys used in localStorage across pages (primary ones):
    - bistroMenu: Array of product items with id, name, description, price, imageUrl, category, stock, sold
    - bistroUsers: Array of users with id, name, email, password (plain for demo), role
    - bistroOrders: Array of orders { id, timestamp, status, items, totalPrice, ... }
    - bistroLoginHistory: Array of login log entries { logId, userId, name, email, loginTime }
  - Note on duplication: customer.html embeds its own “data manager” logic inline (including initializeData and placeOrder), separate from data_manager.js used by admin.html. If you change schemas or add fields, update both places (or consider consolidating to the shared file in future refactors).
  - Note on session keys: Different pages use different keys to denote the logged-in user (e.g., currentBistroUser vs bistroLoggedInUser). When implementing features that depend on the current user, read the key used by that specific page.

Development tips specific to this codebase
- There is no bundler or transpiler. Any JS you add will execute as-is in the browser. Prefer small, self-contained scripts per page, keeping in mind the localStorage schema described above.
- Product images are referenced directly from the images/ tree or from external URLs. If you add categories or items, ensure imageUrl paths are correct relative to the HTML page.
- The VS Code launch configuration expects a server on http://localhost:8080. You can match it with: py -m http.server 8080

Notable repo files
- data_manager.js: Shared data helpers for menu/users/orders/login history using localStorage.
- style.css: Global styling reused by all pages.
- .vscode/launch.json: Chrome launch config pointing at http://localhost:8080.
- TODO.md: Maintains a small checklist; currently no actionable items.
