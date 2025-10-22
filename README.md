 # Infinite Scroll Gallery

- A simple JavaScript app that loads random images from the Unsplash API as you scroll down the page — just like social media feeds.
Built using HTML, CSS, and Vanilla JS (no frameworks).
 ##  Features

 - Fetches random photos from Unsplash
 -  Loads more photos automatically when you scroll near the bottom
 - Lightweight and responsive grid layout
 - Each image links directly to its page on Unsplash
 ## How It Works

1. The app calls the Unsplash API using fetch() to get a list of random photos.
2. The response (JSON) contains URLs, descriptions, and links for each photo.
3. JavaScript dynamically creates <a> and <img> elements for each photo.
4. When the user scrolls near the bottom, the app automatically loads more images — creating an infinite scroll effect.
 ## Technologies Used
 - HTML5 – page structure
 - CSS3 – layout and styling (grid system)
 - JavaScript (ES6) – logic and API interaction
 - Unsplash API – image data source
 ## Setup & Installation
  1. Clone or download this repository
 - git clone https://github.com/yourusername/infinite-scroll.git
  2. Create an Unsplash Developer Account
  - Go to unsplash.com/developers
  -Log in → “Your Apps” → “New Application”
   - Copy your Access Key
  3. Add your Access Key to script.js
   - const apiKey = 'YOUR_UNSPLASH_ACCESS_KEY';
   4. Run the project
   - Open index.html in your browser
   - Scroll down to watch new photos load automatically!
  ## Future Improvements
 - Add a loading spinner while images load
 - Include a search feature (e.g. “mountains”, “space”)
 - Add lazy loading for performance
 - Add dark mode
 ## Author
    Abenezer.T
    Email: abenezertekalign118@gmail.com
    GitHub: Abeni118
