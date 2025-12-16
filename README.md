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

## 🔁 How It Works

* `useGif` custom hook handles API calls and loading state
* `Random` component fetches completely random GIFs
* `Tag` component fetches GIFs based on user input

---

## 🌐 Live Demo

🔗 [https://random-gif-red.vercel.app/](https://random-gif-red.vercel.app/)


