const http = require("http");
const ngrok = require("@ngrok/ngrok");

// Function to generate dynamic HTML content
const generateHTML = (executions, uniqueUsers) => {
  return `
    <html>
    <head>
      <title>Vital.wtf - #1 Apocalypse Rising 2 Script</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
        body {
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, #1f2937, #111827);
          color: #f3f4f6;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 50px 20px;
        }
        .logo {
          width: 150px;
          height: 150px;
          background: url('https://media.discordapp.net/attachments/1058454830571589755/1254433606731038770/61e50e986337a65b2f89d0f92faa83ae.png?ex=66b61ed6&is=66b4cd56&hm=6b59e73f5a243f2b6051c344eb2871e5a84aac5c539b418df723c9a08da1e41e&') no-repeat center center;
          background-size: cover;
          border-radius: 50%;
          margin: 0 auto 20px auto;
          transition: transform 0.3s ease-in-out;
        }
        .logo:hover {
          transform: scale(1.1);
        }
        h1 {
          font-size: 3.5em;
          color: #ffcc00;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        h2 {
          color: #ff6600;
          margin-bottom: 30px;
          font-size: 2em;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        p {
          font-size: 1.4em;
          margin-bottom: 20px;
        }
        .dynamic-number {
          font-weight: bold;
          text-decoration: underline;
          color: #ff99cc;
          transition: color 0.3s ease-in-out;
        }
        .dynamic-number:hover {
          color: #ff66cc;
        }
        .features-list {
          text-align: left;
          margin-top: 50px;
        }
        .features-list h3 {
          font-size: 2em;
          color: #ffcc00;
          margin-bottom: 20px;
        }
        .features-list ul {
          list-style: none;
          padding: 0;
          font-size: 1.2em;
        }
        .features-list li {
          margin-bottom: 15px;
          padding-left: 20px;
          position: relative;
        }
        .features-list li:before {
          content: '✔';
          color: #00cc66;
          font-size: 1.5em;
          position: absolute;
          left: 0;
          top: 0;
        }
        .features-section {
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
          margin-bottom: 50px;
        }
        footer {
          position: fixed;
          bottom: 20px;
          right: 20px;
          font-size: 0.8em;
          color: #ccc;
          text-align: right;
        }
        .footer-logo {
          width: 50px;
          height: 50px;
          background: url('https://media.discordapp.net/attachments/1058454830571589755/1254433606731038770/61e50e986337a65b2f89d0f92faa83ae.png?ex=66b61ed6&is=66b4cd56&hm=6b59e73f5a243f2b6051c344eb2871e5a84aac5c539b418df723c9a08da1e41e&') no-repeat center center;
          background-size: cover;
          border-radius: 50%;
          margin-bottom: 10px;
        }
        .discord-link {
          color: #7289da;
          text-decoration: none;
          font-weight: bold;
        }
        /* Loading animation */
        #loader {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          background-color: #111827;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #loader:before {
          content: '';
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 10px solid #2e2e2e;
          border-top: 10px solid #ffcc00;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      </style>
      <script>
        // Simulate loading effect
        window.onload = function() {
          setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('content').style.display = 'block';
          }, 2000); // Loading animation duration
        };

        // Initialize counter values
        let executions = ${executions};
        let uniqueUsers = ${uniqueUsers};

        // Increment counters
        setInterval(() => {
          executions += Math.floor(Math.random() * 10) + 5; // Faster increment for executions
          uniqueUsers += Math.floor(Math.random() * 3) + 1; // Slower increment for unique users
          document.getElementById('executions').innerText = executions;
          document.getElementById('uniqueUsers').innerText = uniqueUsers;
        }, 2000); // 2-second interval
      </script>
    </head>
    <body>
      <div id="loader"></div>
      <div id="content" style="display: none;">
        <div class="container">
          <div class="logo"></div>
          <h1>Vital.wtf</h1>
          <h2>#1 Apocalypse Rising 2 Script</h2>
          <p>We have over <span id="executions" class="dynamic-number">${executions}</span> executions this month and over <span id="uniqueUsers" class="dynamic-number">${uniqueUsers}</span> unique users.</p>
          
          <!-- Features Section -->
          <div class="features-section">
            <div class="features-list">
              <h3>Key Features:</h3>
              <ul>
                <li>Silent Aim</li>
                <li>Aimbot</li>
                <li>ESP (Extra Sensory Perception)</li>
                <li>Wallhack</li>
                <li>Triggerbot</li>
                <li>Infinite Ammo</li>
                <li>Auto Heal</li>
                <li>Anti-Ban Protection</li>
                <li>Customizable UI</li>
              </ul>
            </div>
          </div>

          <!-- More Sections (e.g., Testimonials, FAQs, etc.) -->
          <div class="features-section">
            <h3>Why Choose Vital.wtf?</h3>
            <ul>
              <li>Proven to work with over 50,000 users globally.</li>
              <li>Regular updates to ensure compatibility and security.</li>
              <li>24/7 customer support through our Discord community.</li>
              <li>Safe, reliable, and easy-to-use interface.</li>
            </ul>
          </div>

          <div class="features-section">
            <h3>Community Feedback</h3>
            <p>"Vital.wtf is a game-changer. The best script I've ever used!"</p>
            <p>"The support team is incredible, always ready to help."</p>
            <p>"Aimbot and ESP are top-notch. Never going back to anything else."</p>
          </div>
        </div>

        <!-- Footer with credits and Discord link -->
        <footer>
          <div class="footer-logo"></div>
          Vital.wtf All rights reserved 2024<br>
          <a href="https://discord.com/invite/getvital" class="discord-link">Join our Discord</a>
        </footer>
      </div>
    </body>
    </html>
  `;
};

// Initial values for the counters
let executions = 40000;
let uniqueUsers = 100;

// Create webserver
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(generateHTML(executions, uniqueUsers)); // Serve the dynamically generated HTML
  })
  .listen(8080, () => console.log("Node.js web server at 8080 is running..."));

// Get your endpoint online
ngrok
  .connect({ addr: 8080, authtoken_from_env: true })
  .then((listener) => console.log(`Ingress established at: ${listener.url()}`));
