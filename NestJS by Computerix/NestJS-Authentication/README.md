# 🔐 Auth API - NestJS

## Endpoints

### 1 ✅ SignUp
- **Method:** POST  
- **Route:** `http://localhost:3000/auth/signup`  
- **Body:** `{ name, email, password }`

### 2 ✅ Login
- **Method:** POST  
- **Route:** `http://localhost:3000/auth/login`  
- **Body:** `{ email, password }`

### 3 🔄 Refresh Token
- **Method:** POST  
- **Route:** `http://localhost:3000/auth/refresh`  
- **Body:** `{ refreshToken }`

### 4 🔁 Change Password
- **Method:** PUT  
- **Route:** `http://localhost:3000/auth/change-password`  
- **Headers:** `Authorization: Bearer <accessToken>`  
- **Body:** `{ password, newPassword }`

### 5 ❓ Forgot Password
- **Method:** POST  
- **Route:** `http://localhost:3000/auth/forgot-password`  
- **Body:** `{ email }`

### 6 🔒 Reset Password
- **Method:** PUT  
- **Route:** `http://localhost:3000/auth/reset-password`  
- **Body:** `{ password, newPassword }`





SignUp  {name, email, password } ,  post request, route http://localhost:3000/auth/signup
login  { email, password } ,  post request, route http://localhost:3000/auth/login
RefreshToken { refreshToken } ,  post request, route http://localhost:3000/auth/refresh
Change Password { password, newPassword } in Authorization send Bear Token ,  put request, route http://localhost:3000/auth/change-password
forget Password { email } ,  post request, route http://localhost:3000/auth/forgot-password
reset Password { password, newPassword } ,  put request, route http://localhost:3000/auth/reset-password