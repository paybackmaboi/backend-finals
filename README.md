<h1>Collaborative Development of a Full-Stack Application: Group 6</h1>

<h2>Project Description</h2>
<p>This project is a full-stack web application designed to provide user authentication, role-based access control, profile management, and email verification. It consists of:</p>
<ul>
  <li><strong>Backend:</strong> Node.js + MySQL API</li>
  <li><strong>Frontend:</strong> Angular 19</li>
  <li><strong>Testing:</strong> Fake backend for initial testing, real API for integration.</li>
</ul>
<p>The application allows users to register, log in, and manage their profiles securely with authentication and role-based access control.</p>

<hr>

<h2>Setup Instructions</h2>

<h3>Prerequisites</h3>
<p>Before setting up the project, ensure you have the following installed:</p>
<ul>
  <li><strong>Node.js</strong> (v16+)</li>
  <li><strong>MySQL</strong> (Latest Version)</li>
  <li><strong>Angular CLI</strong> (v19+)</li>
  <li><strong>Git</strong> (Latest Version)</li>
</ul>

<h3>Backend Setup (Node.js + MySQL)</h3>
<ol>
  <li><strong>Clone the repository:</strong>
    <pre><code>git clone https://github.com/yourusername/groupX-fullstack-app.git
cd backend</code></pre>
  </li>
  <li><strong>Install dependencies:</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li><strong>Configure the environment variables:</strong>
    <pre><code>DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
JWT_SECRET=your_secret_key
SMTP_HOST=smtp.mailtrap.io
SMTP_USER=your_username
SMTP_PASS=your_password</code></pre>
  </li>
  <li><strong>Run the database migrations:</strong>
    <pre><code>npm run migrate</code></pre>
  </li>
  <li><strong>Start the backend server:</strong>
    <pre><code>npm start</code></pre>
  </li>
</ol>

<h3>Frontend Setup (Angular 19)</h3>
<ol>
  <li><strong>Navigate to the frontend directory:</strong>
    <pre><code>cd frontend</code></pre>
  </li>
  <li><strong>Install dependencies:</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li><strong>Run the Angular app:</strong>
    <pre><code>ng serve</code></pre>
  </li>
  <li><strong>Using the Fake Backend:</strong>
    <p>Open <code>app.module.ts</code> and ensure <code>fakeBackendProvider</code> is included in the <code>providers</code> array:</p>
    <pre><code>providers: [fakeBackendProvider]</code></pre>
    <p>This allows testing without connecting to the real API.</p>
  </li>
</ol>

<hr>

<h2>API Endpoints</h2>
<table border="1">
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
    <th>Auth Required</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/auth/register</td>
    <td>Register a new user</td>
    <td>No</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/auth/login</td>
    <td>Login user</td>
    <td>No</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/users/me</td>
    <td>Get current user details</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/api/users/update</td>
    <td>Update user profile</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/auth/forgot-password</td>
    <td>Request password reset</td>
    <td>No</td>
  </tr>
</table>

<h3>Request & Response Example</h3>
<h4>User Login Request</h4>
<pre><code>{
  "email": "user@example.com",
  "password": "password123"
}</code></pre>
<h4>User Login Response</h4>
<pre><code>{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}</code></pre>

<hr>

<h2>Frontend Features</h2>
<ul>
  <li><strong>User Authentication:</strong> Register, Login, Logout</li>
  <li><strong>Profile Management:</strong> Update profile details</li>
  <li><strong>Role-Based Access:</strong> Different UI for Admin and Users</li>
  <li><strong>Email Verification & Password Reset</strong></li>
  <li><strong>Fake Backend for Testing</strong></li>
</ul>

<hr>

<h2>Testing Instructions</h2>

<h3>Backend Testing (Postman)</h3>
<ol>
  <li><strong>Install <a href="https://www.postman.com/">Postman</a>.</strong></li>
  <li><strong>Import <code>postman_collection.json</code> into Postman.</strong></li>
  <li><strong>Run API requests</strong> for login, register, and user management.</li>
</ol>

<h3>Frontend Testing</h3>
<ul>
  <li><strong>Fake Backend Testing:</strong>
    <ul>
      <li>Enable <code>fakeBackendProvider</code> in <code>app.module.ts</code>.</li>
      <li>Test UI interactions (login, register, etc.).</li>
    </ul>
  </li>
  <li><strong>Real API Testing:</strong>
    <ul>
      <li>Disable the fake backend, connect frontend to the real API.</li>
      <li>Verify that all features work as expected.</li>
    </ul>
  </li>
</ul>

<hr>

<h2>Contributors</h2>
<table border="1">
  <tr>
    <th>Name</th>
    <th>Role</th>
  </tr>
  <tr>
    <td>Lourd Angelo Bufete</td>
    <td>Backend Developer</td>
  </tr>
  <tr>
    <td>Romy A. Formentera Jr.</td>
    <td>Frontend Developer</td>
  </tr>
  <tr>
    <td>Roy P. Estorco</td>
    <td>Tester</td>
  </tr>
  <tr>
    <td>Raquel Pacure</td>
    <td>Documentation Specialist</td>
  </tr>
  <tr>
    <td>Ly Ann Kate Candido</td>
    <td>Documentation Specialist</td>
<tr>
<td>Jade Steve Molejon</td>
    <td>DevOps Lead</td>
</tr>
  </tr>
</table>