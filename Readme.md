 Step-by-Step Authentication Flow
🧾 1. User Login — Send Credentials
File: Login.jsx

The user enters their email and password.

You send these credentials to the backend via an API call.

js
Copy
Edit
const res = await axios.post('/api/login', { email, password });
🔑 2. Backend — Validate & Create JWT Token
File: authController.js (Backend)

Check if the email exists and password is correct.

Create a JWT token using jwt.sign().

js
Copy
Edit
const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
res.json({ token });
💾 3. Frontend — Save Token in localStorage
File: Login.jsx

After receiving the token, store it in the browser’s localStorage:

js
Copy
Edit
localStorage.setItem('token', res.data.token);
📦 4. Get User Data — Service Layer
File: frontend/services/data.js

Create a function getUserData() that:

Fetches the token from localStorage.

Sends a GET request with the token in Authorization header.

Returns user data like name and email.

js
Copy
Edit
export const getUserData = async () => {
  const token = localStorage.getItem('token');
  const res = await axios.get('/api/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
🧠 5. Call getUserData() After Login
File: Login.jsx

After storing the token, call getUserData() right after login to fetch user details.

js
Copy
Edit
const userData = await getUserData();
console.log("Logged in as:", userData.name);
📌 6. Where to Use the Fetched User Data
Use getUserData() in any component that needs to show user information. For example:

✅ Header.jsx:
To show user's name/email at the top.

js
Copy
Edit
useEffect(() => {
  const fetchUser = async () => {
    const data = await getUserData();
    setUser(data);
  };
  fetchUser();
}, []);
✅ Dashboard.jsx:
To personalize the dashboard with user’s name.

🗂️ Summary of Files and Flow
Step	File	Purpose
Login Request	Login.jsx	Sends credentials to backend
Token Creation	authController.js	Verifies login & returns JWT
Save Token	Login.jsx	Saves token in localStorage
Extract Token + Get User	services/data.js	Builds getUserData()
Use User Info	Header.jsx, etc.	Display user info where needed