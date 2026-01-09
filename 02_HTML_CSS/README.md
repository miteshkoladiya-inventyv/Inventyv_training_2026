# Login/Register Tabs (HTML + CSS)

A clean split-screen Login/Register UI. Tabs are implemented with anchors and CSS `:target`—no JavaScript required.

## Features

* **CSS-only tabs**: `#login` and `#register` sections toggle via `:target`.
* **Responsive layout**: Flexbox + media queries for 768px, 480px, 360px.
* **Split screen**: Left panel shows a circular logo and greeting; right panel holds tabs and forms.
* **Deep-linkable**: Open directly to a tab (e.g., `index.html#register`).
* **Pure HTML/CSS**: Simple to run and customize; no build step.

## Technologies Used

* **HTML5**
* **CSS3** (Flexbox, pseudo-classes like `:target`, media queries)

## How to Run

1. Download or clone the repository.
2. Open the `02_HTML_CSS` folder.
3. Double-click `index.html` to open it in your browser.
	* Optional: ensure `tesla.png` exists in the same folder to avoid a broken image.

## Project Structure

* `index.html`: Page markup with left/right layout and tab sections.
* `style.css`: Styles, responsive rules, and `:target` tab logic.
* `tesla.png`: Logo shown on the left panel (replace with your brand).
