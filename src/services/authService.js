// // src/services/authService.js
// import axios from '../axios/axios';
//
//
// const TOKEN_KEY = 'auth_token';
//
// const authService = {
//     login: async (username, password) => {
//         try {
//             // During development, you can bypass the actual login request
//             // and just set a hardcoded token
//
//             // For real authentication:
//             // const response = await axios.post('/user/login', { username, password });
//             // const token = response.data.token;
//
//             // Hardcoded token (example)
//             const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJsaWJyYXJpYW4iLCJpYXQiOjE2MjM0NTY3ODksImV4cCI6MTYyMzQ2MDM4OSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9MSUJSQVJJQU4iXX0.example-signature";
//
//             // Store token in localStorage
//             localStorage.setItem(TOKEN_KEY, token);
//             return true;
//         } catch (error) {
//             console.error('Login failed:', error);
//             return false;
//         }
//     },
//
//     logout: () => {
//         localStorage.removeItem(TOKEN_KEY);
//     },
//
//     getToken: () => {
//         return localStorage.getItem(TOKEN_KEY);
//     },
//
//     isAuthenticated: () => {
//         return !!localStorage.getItem(TOKEN_KEY);
//     }
// };
//
// export default authService;