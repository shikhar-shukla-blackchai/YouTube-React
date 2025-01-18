## Namaste React 🚀🚀

Welcome to the TMBD YouTube clone built with React. This project simulates a YouTube-like experience, with features like searching for videos, viewing video details, and interacting with the video player and comment section.

### 🧑‍💻 Requirements Clarification

#### Features

- Search Button for searching videos
- Comment Box to add user feedback
- Live Chat for interaction (infinitely scrollable)
- Video Suggestions
- Video Container with cards to display video content

#### Tech Stack & Justification

- Redux: For centralized state management, ensuring consistent state across components.
- Tailwind CSS: For fast, customizable styling without the need for complex class names.
- react-router-DOM: For handling routing and navigation within the app.
- Parcel: For bundling the application with faster build times.
- Jest & React Testing Library: For unit and integration tests to ensure app stability and correctness.

### 🔨 Planning Phase

#### Header Component

- Burger icon for navigation
- YouTube logo
- Search bar for querying videos
- User name display for personalization

#### Sidebar Component

- Home button for navigating to the main page
- Subscribed button for viewing user subscriptions
- Like button for rating videos
- Additional menu options (e.g., trending, playlists)

#### Body Component

- Filter list to categorize videos (e.g., by genre, popular)
- Video container to display a list of video cards
  - Each card contains a video thumbnail, title, and metadata

#### Watch Video (New Page)

- Search bar for searching related videos
- Video container with an embedded video player
- Comment box for adding feedback
- Live chat integration

### 🚀 Setup Instructions

### 🎥 YouTube API Integration

- YouTube API provides video data for the app. You can find the documentation here: [YouTube API Docs](https://developers.google.com/youtube/v3)
- Obtain the API key by visiting the YouTube API credentials page and creating a new key.

#### API for Video List

- Use the YouTube Data API to retrieve the most popular videos by querying: `/videos?chart=mostPopular`

### 💬 Live Chat with Infinite Scrolling

Two methods for fetching live data:

1. WebSockets: Real-time, two-way communication between the client and server.
2. Long Polling: Regularly checks for new data from the server at set intervals (e.g., every 100ms).

### 🎬 Conclusion

This YouTube clone offers a fully functional application built with React and modern tools. The app demonstrates practical features like video search, live chat, and video playback, along with state management using Redux and efficient rendering techniques like debouncing and memoization.
