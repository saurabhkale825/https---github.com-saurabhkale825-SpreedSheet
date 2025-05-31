# 🧮 React Spreadsheet App

A web-based spreadsheet application built with **React.js**, supporting dynamic rows and columns, cell formatting (bold, background color), copy-paste functionality, and save/load via JSON files.

---

## 🚀 Features

- Create and edit a spreadsheet grid
- Select cell ranges
- Copy & paste selected cells
- Format cells (bold text, background color)
- Save and load spreadsheets as `.json` files

---

## 📦 Tech Stack

- **React.js**
- **Context API** for global state
- **HTML5** and **CSS3** for layout and styling

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/saurabhkale825/SpreedSheet.git
cd SpreedSheet

### 2. Install Dependencies
```bash
npm install

### 3. Start the Development Server
```bash
npm start


##📁 Project Structure
📦 src/
├── 📁 Components/         # Reusable UI components like Toolbar, CellGrid
├── 📁 Context/            # Spreadsheet state using React Context
├── 📁 Utils/              # File handling, cell formatting, copy/paste logic
├── App.js                 # Main component
├── index.js               # Entry point
└── styles/                # CSS files


✨ Usage Guide

📄 Editing Cells

    Click on a cell to type and edit content.
    Click and drag across multiple cells to select a range.
--------------------
✂️ Copy & Paste

    Copy: Select a range of cells and click the Copy button.
    Paste: Select a target cell and click the Paste button.
    Note: The paste action works relative to the selected top-left cell.
------------------
🎨 Cell Styling

    Select a range and click the B button to toggle bold text.
    Use the color picker to set background color for selected cells.
------------------

💾 Save & Load

    Click Save to download the current spreadsheet as a .json file.
    Click Load to upload a previously saved .json spreadsheet.




