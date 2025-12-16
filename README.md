# 🎲 Random GIF Generator

A simple and fun React application that fetches **random GIFs** using the **GIPHY API**. Users can either generate completely random GIFs or search GIFs based on a specific tag.

---

## 🚀 Features

* Generate random GIFs with one click
* Search GIFs by tag (e.g., cats, memes, anime)
* Custom React Hook (`useGif`) for clean logic separation
* Loading spinner while fetching data
* Styled using **Tailwind CSS**

---

## 🛠️ Tech Stack

* React
* Tailwind CSS
* Axios
* GIPHY API

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Random.js
│   ├── Tag.js
│   └── Spinner.js
├── hooks/
│   └── useGif.js
├── App.js
└── index.js
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_GIPHY_API_KEY=your_giphy_api_key_here
```

⚠️ **Do not push `.env` to GitHub** (already added to `.gitignore`).

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone <your-repo-link>

# Install dependencies
npm install

# Start the development server
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## 🔁 How It Works

* `useGif` custom hook handles API calls and loading state
* `Random` component fetches completely random GIFs
* `Tag` component fetches GIFs based on user input

---

## 🌐 Live Demo

🔗 [https://random-gif-red.vercel.app/](https://random-gif-red.vercel.app/)



⭐ If you like this project, don’t forget to star the repo!
