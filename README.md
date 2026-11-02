# WanderGhost - Custom Premium Ghost Theme

A highly customized, high-performance Ghost theme framework featuring a floating pill-shaped mobile navigation deck, native real-time color scheme management, and interactive geolocated map overrides.

## 🚀 Key Features

*   **Floating Pill Header:** A modern sticky desktop header that adapts on mobile screens into a floating pill configuration with a glassy, blurred overlay slide-out menu card.
*   **Integrated Interactive Maps:** Specialized template styling overrides for fullscreen Leaflet core integrations, including custom popups, theme-aware mapping layers, and optimized mobile zooming control zones.
*   **Zero-Flash Theme Engine:** Immediate local-storage system evaluation running inline to prevent light/dark flash during initial page paints.
*   **Fully Responsive Alignment:** Shared math alignment tracking across standard posts, page collections, and full-bleed geographic layout sheets.

---

## 🛠️ Local Development & Asset Compilation

This theme is built on top of a compilation framework utilizing **Rollup** and **PostCSS** to minify assets automatically.

### 1. Setup & Installation
Navigate into the root directory of your theme and install dependencies using `pnpm`:
```bash
pnpm install
```

### 2. Start Live-Reload Development Mode
Compile structural files, watch asset tracks, and trigger automated browser refreshes on file modification saves:
```bash
pnpm dev
```
*Press `Ctrl + C` in your CLI interface to terminate your active watch runner safely.*

### 3. Production Compilation & Distribution Packaging
When you are ready to prepare your updates for an live production release on your site, compile optimized code blocks and compress everything down into a production-ready `.zip` archive package:
```bash
# Compile and minify JavaScript / CSS source tracks
pnpm build

# Generate distribution archive file
pnpm zip
```

---

## 📂 Structural Code Manifest

*   `default.hbs` - Core viewport shell containing script preference hooks, Leaflet CDNs, and main element stack structures.
*   `assets/css/header.css` - Complete layout architecture managing floating pill parameters, layout transformations, and mobile action drawers.
*   `page-travel-map.hbs` (or custom wrapper) - Specialized full-bleed geography layouts containing mobile coordinate safety clearances.

---

## 🚢 Git Deployment Workflow

This theme repository contains Ghost's official **GitHub Deploy Action** setup configuration. 

Whenever you push code commits directly to your default production branch (`main`), the automated workflow script will validate files against compatibility layers via `gscan`, compile optimized production bundles, and push code changes directly to your live production website.
