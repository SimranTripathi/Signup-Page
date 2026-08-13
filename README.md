# Signup Page 

A simple and responsive **Signup Page** built using **HTML, CSS, JavaScript, and Node.js**. This project allows users to register by entering their details, and the data is stored on the server using the Node.js File System (`fs`) module.

## Features

* User-friendly signup form
* Request process
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
* React.js
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
5. see the information in user.text

##Screenshot of Signup-Page
<img width="2850" height="1624" alt="Screenshot 2026-08-04 232714" src="https://github.com/user-attachments/assets/cfb1d714-d79d-4aec-ac5f-db0b2def272e" />
<img width="2864" height="1612" alt="Screenshot 2026-08-04 232749" src="https://github.com/user-attachments/assets/7caab19b-3992-4a3e-b98b-1ce22b576831" />
<img width="2846" height="1482" alt="Screenshot 2026-08-04 232813" src="https://github.com/user-attachments/assets/614d8558-ad7d-4a19-b564-a758e741110a" />
<img width="1340" height="840" alt="Screenshot 2026-08-05 211813" src="https://github.com/user-attachments/assets/d37e3ebd-e773-4472-a7ed-9ace2785c07a" />



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
