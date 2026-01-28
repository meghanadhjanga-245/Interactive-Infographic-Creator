# Interactive Infographic Creator

A lightweight, **zero-dependency**, fully client-side tool to create, edit, and export infographics right in the browser.

Built with **pure HTML, CSS, and JavaScript** — no frameworks, no build tools, no backend.



## Features

- Drag-and-drop elements from the toolbar (Text, Bar Chart, Pie Chart, Line Chart, Icon)
- Move, resize, and edit elements directly on the canvas
- Real-time property editing (text content, background color, z-index)
- Dark/light theme toggle
- "AI Optimize" layout suggestion (simple client-side auto-arrangement & coloring)
- Export canvas as PNG (using SVG → canvas conversion)
- Grid background for precise alignment
- Fully offline — works without internet after first load
- Accessible and mobile-friendly layout (responsive sidebar/canvas)


### Light mode
![Light mode](screenshots/light-mode.png)

### Dark mode with elements
![Dark mode](screenshots/dark-mode.png)

### Properties panel in action
![Properties panel](screenshots/properties.png)

*(Add your own screenshots here — recommended sizes: ~800–1200px wide)*

## Tech Stack

- HTML5
- CSS3 (Custom properties + Flexbox + Grid)
- Vanilla JavaScript (no libraries or frameworks)
- Drag & Drop API
- Canvas → SVG → PNG export trick

## How to Use

1. Clone or download the repository
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari)
3. Drag elements from the left toolbar onto the canvas
4. Click an element to select it → edit properties on the right panel
5. Use buttons in the header:
   - 🌙 Toggle theme
   - AI Optimize → auto-arrange elements
   - Export PNG → download current canvas
   - Clear → reset canvas

## License

MIT License — feel free to use, modify, and learn from this project.

Made with ❤️ as a fun, educational, zero-dependency experiment.

Happy infographic making!
