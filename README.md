# Signup Page 

A simple and responsive **Signup Page** built using **HTML, CSS, JavaScript, and Node.js**. This project allows users to register by entering their details, and the data is stored on the server using the Node.js File System (`fs`) module.

## Features

* User-friendly signup form
* Responsive design
* Form validation
* Password and Confirm Password fields
* Stores user data in a text file (`users.txt`)
* Built with Node.js and Express
* Clean and modern UI

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Node.js
* Express.js
* File System (`fs`) Module

## Project Structure

```
signup-project/
│── public/
│   ├── signup.html
│   ├── style.css
│── server.js
│── users.txt
│── package.json
│── README.md
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/SimranTripathi/Signup-Page-website.git
```

2. Navigate to the project folder

```bash
cd Signup-Page-website
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
node server.js
```
node install 

5. Open your browser and visit:

```
http://localhost:3000
```

## How It Works

1. Enter your details in the signup form.
2. Click the **Sign Up** button.
3. The server receives the form data.
4. User information is saved in the `users.txt` file using the Node.js File System (`fs`) module.

## Future Improvements

* Store data in MongoDB/MySQL
* Password encryption using bcrypt
* Login page
* Email verification
* JWT Authentication
* Dashboard after signup

## Author

**Simran Tripathi**

If you found this project helpful, feel free to ⭐ the repository.
