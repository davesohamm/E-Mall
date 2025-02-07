# E-Mall

E-Mall is a modern, full-featured e-commerce platform built with the MERN stack. It provides a seamless online shopping experience with robust features such as user authentication, product browsing, shopping cart management, and a secure checkout process.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication:** Secure registration and login using JWT.
- **Product Browsing:** Browse and search through a variety of products.
- **Product Details:** Detailed product pages with images and reviews.
- **Shopping Cart:** Add, update, or remove items with ease.
- **Secure Checkout:** A complete checkout process ensuring transaction security.
- **Admin Dashboard:** Manage products, orders, and user data (for admin users).

## Technologies Used

- **MongoDB:** NoSQL database for data persistence.
- **Express:** Server-side framework for building robust APIs.
- **React:** Front-end library for building a responsive user interface.
- **Node.js:** JavaScript runtime for server-side logic.
- **JWT:** For secure user authentication.
- **Optional:** Redux (or Context API) for state management, CSS frameworks like Bootstrap or Material-UI for styling.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/emall.git
   cd emall
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup:**

   Create a `.env` file in the `server` directory and add your configuration details:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
   *Adjust any other environment variables as needed.*

5. **Running the Application:**

   For development, you can run both the server and client concurrently.

   - **Server:**
     ```bash
     cd server
     npm run dev
     ```
   - **Client:**
     ```bash
     cd client
     npm start
     ```

   The client will typically run on [http://localhost:3000](http://localhost:3000) and the server on [http://localhost:5000](http://localhost:5000).

## Usage

- **User Side:**  
  - Register or log in to your account.
  - Browse through products and add them to your cart.
  - Proceed to checkout and complete your purchase securely.

- **Admin Side:**  
  - Log in with an admin account.
  - Access the admin dashboard to add, update, or remove products and manage orders.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request describing your changes.

Please ensure your code follows the project’s style guidelines.

## Contact

For any questions, issues, or feedback, please reach out to:

- **Email:** davesohamm@gmail.com
- **GitHub:** [davesohamm](https://github.com/davesohamm)

---
