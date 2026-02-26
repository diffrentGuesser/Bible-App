# FaithFlow 🕊️

A beautiful Christian social media web app — daily verses, reel-style scrolling, favourites, a trivia game, and user profiles.

## 🚀 Deploy FREE on GitHub Pages

### Step 1: Create a GitHub repository
1. Go to [github.com](https://github.com) → click **New repository**
2. Name it `faithflow` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 2: Upload your files
Upload these files to the repository root:
- `index.html`
- `app.js`
- `README.md`

### Step 3: Add your Bible files (optional but recommended)
Create this folder structure in your repo:
```
NIV/
  NIV Books/
    Genesis.json
    Exodus.json
    ... (all your book JSON files)
    1 Chronicles.json
    Revelation.json
```

### Step 4: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under "Source", select **main** branch → **/ (root)**
3. Click **Save**
4. Your site will be live at: `https://yourusername.github.io/faithflow`

---

## 📱 Features

| Tab | Feature |
|-----|---------|
| 🏠 Home | Daily verse + trending saved verses |
| 📖 Verses | Reel-style infinite scroll with save/share |
| ❤️ Saved | All your favourited verses |
| 🎮 Game | Guess the Bible reference — earn points! |
| 👤 Profile | Stats, login/register, settings |

## 🎮 Game Scoring
- Correct Testament (OT/NT): **+1 point**
- Correct Book: **+1 more point**
- Correct Chapter: **+1 more point**
- **ALL correct**: Points are **doubled!**

## 📁 Bible File Format
Each JSON file should be named after the book (e.g. `1 Chronicles.json`) and formatted as:
```json
{
  "1 Chronicles": {
    "1": {
      "1": "Adam, Seth, Enosh,",
      ...
    }
  }
}
```

## 🛠️ Built With
- Vanilla HTML, CSS, JavaScript (no frameworks needed)
- Cormorant Garamond + DM Sans fonts
- LocalStorage for data persistence
- NIV Bible (New International Version)