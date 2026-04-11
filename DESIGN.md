```markdown
# Design System Documentation

## 1. Overview & Creative North Star

### The Creative North Star: "The Precision Manifesto"
This design system rejects the soft, homogenized aesthetic of modern mobile software. Instead, it draws inspiration from the rigor of the Bauhaus movement and the raw honesty of early computer graphics. It is a "Precision Manifesto" for the digital age—treating the iOS screen not as a window, but as a physical museum poster.

The aesthetic is defined by **Modular Rigor**. We move beyond generic templates by using intentional asymmetry and a "flat-depth" philosophy. Hierarchy is not suggested through shadows, but commanded through scale, thick strokes, and high-contrast color blocks. Every pixel is axis-aligned; every element is a deliberate architectural choice.

---

## 2. Colors

The palette is a high-tension dialogue between the organic depth of the forest and the synthetic vibrance of coral.

- **Primary Background (`surface` / `#001804`):** A deep, nocturnal green that acts as our canvas. It provides more sophistication than pure black while maintaining maximum contrast for typography.
- **Structural Coral (`primary_container` / `#f3797a`):** Used for UI blocks, heavy borders, and active states. This color represents the "ink" of our system.
- **High-Contrast Text (`white` / `#ffffff`):** Reserved for small, functional text and labels that must cut through the dark background.
- **Tonal Accents (`on_surface` / `#c6edc3`):** A pale, desaturated mint used for secondary text and grid lines to maintain legibility without the aggression of pure white.

### The "No-Line" Rule vs. The Structural Border
While this system utilizes thick 2px-4px borders for structural components (like buttons or cards), we prohibit the use of thin, 1px "divider" lines for general sectioning. 
- **Nesting Hierarchy:** To create depth without shadows, use the **Surface-Container Tiers**. A `surface_container_high` (`#103015`) section should sit on the `surface` background to define a region. 
- **The Color Block Rule:** Instead of a line, use a full-width block of `primary_container` to separate major content areas, creating a "Museum Poster" layout.

### Texture & Soul
Gradients and glassmorphism are strictly forbidden. To provide professional polish, we rely on **Tonal Layering**. Use `surface_container_lowest` for the deepest background layers and `surface_bright` for interactive containers to create a "mechanical" sense of lift through color value shifts alone.

---

## 3. Typography

Typography is the primary architecture of this system. We use a "Size as Structure" approach.

- **Display & Headlines (`spaceGrotesk`):** Bold and condensed. These should feel like architectural beams. Use `display-lg` (3.5rem) for hero moments, ensuring the letter spacing is tight to emphasize the "blocky" brutalist feel.
- **Body & Labels (`inter` / `sans-serif`):** Minimalist and clinical. Inter provides the high readability required for independent software. 
- **The Editorial Shift:** Break the "centered" mobile habit. Align headlines to the extreme left and body text to the extreme right of the grid to create a sophisticated, asymmetrical tension.

---

## 4. Elevation & Depth (The Modular Stacking)

In this system, "Elevation" is a measure of visual weight, not physical height.

- **The Layering Principle:** Depth is achieved by stacking axis-aligned rectangles. A card doesn't "float"; it sits on the grid. To denote a primary action, use a thick 4px border of `primary_container` around the element.
- **Zero-Shadow Policy:** Shadows are a lie of light. We represent importance through **Inversion**. An active state is not a lifted button; it is a button that flips from a `surface` background with a `primary_container` border to a solid `primary_container` block with `surface` text.
- **The "Ghost Grid" Fallback:** Use the `outline_variant` at 20% opacity to render a visible modular grid in the background of layouts. This reinforces the "early computer graphics" aesthetic and guides the user's eye through the composition.

---

## 5. Components

All components adhere to the **0px Roundedness Scale**. If a corner exists, it must be sharp.

### Buttons
- **Primary:** Solid `primary_container` (#F3797A) block. Text is `on_primary` (#630C16). 0px corners.
- **Secondary:** `surface` background with a 2px `primary_container` border.
- **States:** On press, the primary button should "invert" its colors instantly. No transition animations; the change should feel mechanical.

### Input Fields
- **Styling:** Forgo the four-sided box. Use a 2px bottom-border of `primary_container` only. 
- **Labeling:** Use `label-md` in `white` (#FFFFFF) placed strictly above the input, aligned to the left grid line.

### Cards & Lists
- **Forbid Dividers:** Never use a 1px line to separate list items. Use alternating background shades (`surface_container_low` vs `surface_container_high`) or 8px of vertical "Dead Space."
- **Layout:** Cards should use a 2px border. Content inside the card must have "Generous Margins" (minimum 24px) to mimic a gallery plaque.

### Additional Component: The "Data Header"
- A full-width, 4px thick `primary_container` bar at the top of a view containing the view title in `spaceGrotesk`. This mimics the header of early technical manuals and provides an immediate anchor for the user.

---

## 6. Do's and Don'ts

### Do:
- **Use the Grid:** Align every element to a strict 8-column modular grid. If an element doesn't sit on a grid line, it is a bug.
- **Embrace Asymmetry:** Place a large headline on the left and a small body paragraph on the bottom right. The "void" (empty space) is a design element.
- **High Contrast:** Ensure all functional text is `white` or the primary `on_surface` mint color against the deep green.

### Don't:
- **No Rounding:** Not for buttons, not for images, not for checkboxes. 0px is the only allowed value.
- **No Softness:** Avoid soft transitions or fades. Elements should appear and disappear with "digital" immediacy.
- **No Gradients or Shadows:** Do not use light to imply depth. Use color blocks and borders.
- **No Center-Alignment:** Standard "centered" mobile layouts feel cheap in this system. Always seek an asymmetrical balance.

---

*Director's Final Note: Remember, we are building a tool that feels like an artifact. It should feel heavy, intentional, and undeniably digital.*```