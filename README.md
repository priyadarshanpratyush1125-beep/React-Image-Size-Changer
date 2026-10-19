# React Image Size Changer

I made this project while learning React. I wanted to understand how React state works, so I started with a simple image resizing application and improved it step by step.

This project contains three versions. I started with a fixed image, then added image uploading, and finally implemented resizing while maintaining the image's original aspect ratio.

## 🚀 Project Versions

### V1 — Basic Image Size Changer

In this version, I used an image stored inside the project folder and set its initial height and width to 100 × 100 pixels.

I created four functions to increase and decrease the image's height and width independently in steps of 10 pixels.

**Output Screenshot**

<!-- Add your V1 screenshot link here -->

![V1 - Basic Image Size Changer](V1-Basic Image Size Changer\SS_v1.png)

### V2 — Image Upload

In this version, I added the option to upload an image from my computer instead of using a fixed image.

The uploaded image starts at 100 × 100 pixels. Users can then increase or decrease its height and width using the four resize buttons.

**Output Screenshot**

<!-- Add your V2 screenshot link here -->

![V2 - Image Upload](V2 -Image Upload\SS2_v2.png)

### V3 — Original Dimensions + Maintain Ratio

In this version, I wanted the uploaded image to start at its original dimensions instead of forcing it to 100 × 100 pixels.

I added two more buttons to increase or decrease both dimensions proportionally while maintaining the image's original aspect ratio. The four independent resize buttons are also available.

**Output Screenshot**

<!-- Add your V3 screenshot link here -->

![V3 - Original Dimensions and Maintain Ratio](V3-Original Dimensions + Maintain Ratio\SS2_V3.png)

## 💭 My Approach

I wanted to learn React by building something where every button produces a visible change.

I started by storing the image's height and width using the `useState` Hook. Then, I created functions to update these values when the buttons are clicked.

In V2, I added a file input and used `URL.createObjectURL()` to display uploaded images. In V3, I used `naturalWidth`, `naturalHeight`, and a scale factor to calculate proportional dimensions.

I kept the three versions separate so I could understand each new concept before moving to the next one.

## 📁 Project Structure

```text
React-Image-Size-Changer/
│
├── V1-Basic Image Size Changer/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   └── sample.jpg
│   │   ├── components/
│   │   │   └── ImageSizeChanger.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── V2 -Image Upload/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   └── components/
│   │       └── ImageSizeChanger.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── V3-Original Dimensions + Maintain Ratio/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   └── components/
│   │       └── ImageSizeChanger.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

*Note: The tree above shows the main project files. Each version also contains its own dependencies and other configuration files. V1 uses an image stored in its assets folder.*

## 🛠️ Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite

## 📚 What I Learned

While building this project, I practised:

- Using the `useState` Hook to store and update values
- Creating functions and handling button clicks with `onClick`
- Applying dynamic inline CSS using state values
- Handling image uploads with `onChange`
- Displaying uploaded images using `URL.createObjectURL()`
- Reading original image dimensions using `naturalWidth` and `naturalHeight`
- Using conditional rendering and `useEffect`
- Calculating proportional dimensions using a scale factor
- Understanding how React updates the UI when state changes

## ▶️ How to Run

Each version is a separate React + Vite project. Open a terminal in the main project folder and run the commands for the version you want to try.

### V1 — Basic Image Size Changer

```powershell
cd "V1-Basic Image Size Changer"
npm install
npm run dev
```

### V2 — Image Upload

```powershell
cd "V2 -Image Upload"
npm install
npm run dev
```

### V3 — Original Dimensions + Maintain Ratio

```powershell
cd "V3-Original Dimensions + Maintain Ratio"
npm install
npm run dev
```

Open the local URL provided by Vite in your browser.

## 💡 Final Thoughts

This project helped me understand React through practical implementation. I started with basic state management, moved to handling user-uploaded images, and then worked on proportional resizing.

I'm still learning React, and building the application in three versions helped me understand the concepts one step at a time.