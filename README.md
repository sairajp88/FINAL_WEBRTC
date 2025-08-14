# WebRTC-Based Real-Time Communication Platform

A **WebRTC-powered real-time communication platform** that enables users to connect via video/audio calls, chat, and file sharing in a room-based environment. This project is built using **ReactJS**, **NodeJS/ExpressJS**, **Socket.io**, and **WebRTC**.
http://webrtc-based-real-time-communication.onrender.com
---

## 🌟 Features

1. **Room-Based Communication**  
   - Users can join specific rooms using a unique room ID to connect with other participants.

2. **Video and Audio Calls**  
   - Real-time video and audio communication with toggle functionality to enable/disable video or audio.

3. **Text Chat**  
   - Send and receive text messages in real-time within the room.

4. **File Sharing**  
   - Securely share files directly with other participants in the same room.

5. **Peer-to-Peer Connection**  
   - Once the connection is established, all communication (video, audio, chat, file sharing) happens directly between peers, reducing server dependency.

---

## 🛠️ Technologies Used

- **Frontend**: ReactJS, Vite
- **Backend**: NodeJS, ExpressJS
- **Real-Time Communication**: Socket.io, WebRTC
- **Styling**: CSS (with inline styles)

---

## ⚙️ Setup and Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/sairajp88/FINAL_WEBRTC.git
cd FINAL_WEBRTC
```

### 2. Install Dependencies

#### For the Frontend:
```bash
cd client
npm install
```

#### For the Backend:
```bash
cd ../server
npm install
```

### 3. Run the Project

#### Start the Backend:
```bash
cd server
npm start
```

#### Start the Frontend:
```bash
cd ../client
npm run dev
```

### 4. Access the Application
- Open your browser and navigate to `http://localhost:3000` to access the frontend.
- Ensure the backend is running on `http://localhost:8000` (or the port specified in the `.env` file).

---

## 🧑‍💻 How It Works

1. **Join a Room**: Enter your email and a room ID to join a specific room.
2. **Signaling Server**: The backend server facilitates the exchange of WebRTC offers, answers, and ICE candidates.
3. **Peer-to-Peer Connection**: Once signaling is complete, all communication (video, audio, chat, file sharing) happens directly between peers.

---

## 📂 Project Structure

```
FINAL_WEBRTC/
├── client/          # Frontend code (ReactJS)
│   ├── src/
│   ├── public/
│   └── package.json
├── server/          # Backend code (NodeJS/ExpressJS)
│   ├── routes/
│   ├── controllers/
│   └── package.json
├── README.md        # Project documentation
└── .env             # Environment variables
```

---

## 🚀 Deployment

To deploy the project, follow these steps:

1. **Frontend**: Build the React app using:
   ```bash
   cd client
   npm run build
   ```
   Deploy the `client/dist` folder to a hosting service like **Vercel**, **Netlify**, or **Render**.

2. **Backend**: Deploy the `server` folder to a hosting service like **Render**, **Heroku**, or **AWS**.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## 📧 Contact

For any inquiries or support, reach out to **[Sairaj](mailto:sairajp88@gmail.com)**.
