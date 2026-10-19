# Image Size Changer — V1

I made this project while learning React. I wanted to understand how the `useState` Hook works and how React updates the UI when a value changes.

In this version, I used an image stored in the project folder and added buttons to change its height and width independently.

## 📸 Screenshot
![V1 - Basic Image Size Changer](screenshots/SS_v1.png)

## Features

- Displays an image stored in the project folder
- Sets the initial image size to 100 × 100 pixels
- Increases or decreases height by 10px
- Increases or decreases width by 10px
- Prevents the dimensions from going below 10px

## 💭My Approach

My idea was to make a simple application where I could change an image's size by clicking buttons. I didn't want to depend on the image's original dimensions, so I decided to start with a fixed height and width of 100px.

To implement this, I used React's `useState` Hook to store the height and width. I then created four functions to increase or decrease each dimension by 10px. Finally, I connected these functions to the buttons using `onClick`.

## ⚙️ How It Works

1. The image is imported from the project's `assets` folder.
2. The `height` and `width` state variables are initialized to `100`.
3. When a button is clicked, its corresponding function updates the relevant state using the setter function.
4. React re-renders the component with the updated state.
5. The image's inline CSS uses the new height and width values, so the displayed image resizes automatically.

## 🛠️ Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite

## 📚 What I Learned

- Using the `useState` Hook to store and update values
- Creating functions to handle button clicks
- Using `onClick` to connect buttons with functions
- Applying dynamic inline CSS using state values
- Understanding how React re-renders the UI when state changes

## ▶️ How to Run

Open the project folder in your terminal and run:

```bash
npm install
npm run dev
```

Open the local URL provided by Vite in your browser.

## 💡 Next Step

In V2, I plan to add an image upload feature so users can select an image from their computer instead of using a fixed image.

I'm building this project step by step to improve my understanding of React through practical learning.
