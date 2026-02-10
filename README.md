# Weather App

A simple, dynamic weather application built with Node.js, Express, and EJS that fetches real-time weather data from OpenWeatherMap API.

---

## 🚀 Live Demo

Check out the live app here: https://weatherapp-zvux.onrender.com/

---

## 🔍 Features

- Search weather by city name  
- Displays temperature (°C), humidity, wind speed, and weather condition  
- Dynamic weather icons and background effects  
- Responsive and clean UI  

---

## 🛠️ Technologies Used

- Node.js  
- Express.js  
- EJS (Embedded JavaScript templating)  
- Axios (HTTP requests)  
- OpenWeatherMap API  
- CSS (with blur and translucent effects)  

---

## 💻 Getting Started

### Prerequisites

- Node.js (v14+) installed  
- OpenWeatherMap API key (free at [https://openweathermap.org/api](https://openweathermap.org/api)

### Installation

1. Clone the repo:

```bash
git clone https://github.com/rohan07-design/weatherApp.git
cd weatherApp
```

2. Install Dependencies

```bash
npm install
```

3. Create a .env file in the root folder and add your API key:
   
```bash
OPENWEATHER_API_KEY=your_api_key_here
```

4. Start the app locally (with live reload):

```bash
npm start
```

⚙️ Deployment

- This app is deployed on Render

- The server listens on the port assigned by Render via process.env.PORT.

- The start script uses node index.js for production.

- The API key is securely stored as an environment variable in Render dashboard.

📂 Project Structure

weatherApp/
│
├── index.js          # Main server file
├── package.json
├── .gitignore
├── .env              # Local environment variables (not committed)
├── views/            # EJS templates
├── public/           # Static files (CSS, images)
└── README.md
