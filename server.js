const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

    // Home Page
    if (req.method === "GET" && req.url === "/") {

        fs.readFile(path.join(__dirname, "public", "signup.html"), (err, data) => {

            if (err) {
                res.writeHead(500);
                return res.end("Error Loading Page");
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });

    }

    // CSS File
    else if (req.method === "GET" && req.url === "/style.css") {

        fs.readFile(path.join(__dirname, "public", "style.css"), (err, data) => {

            res.writeHead(200, {
                "Content-Type": "text/css"
            });

            res.end(data);

        });

    }

    // Signup Form
    else if (req.method === "POST" && req.url === "/signup") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const formData = querystring.parse(body);

            const userData = `
========================================
Name             : ${formData.name}
Email            : ${formData.email}
Mobile Number    : ${formData.phone}
Date of Birth    : ${formData.dob}
Gender           : ${formData.gender}
Password         : ${formData.password}
Confirm Password : ${formData.confirmPassword}
========================================

`;

            fs.appendFile("users.txt", userData, (err) => {

                if (err) {

                    res.writeHead(500);
                    res.end("Error Saving Data");

                } else {

                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });

                    res.end(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Success</title>
                        <style>
                            body{
                                font-family:Arial;
                                background:#6c63ff;
                                display:flex;
                                justify-content:center;
                                align-items:center;
                                height:100vh;
                                color:white;
                            }

                            .box{
                                background:white;
                                color:black;
                                padding:40px;
                                border-radius:15px;
                                text-align:center;
                                box-shadow:0 10px 25px rgba(0,0,0,.3);
                            }

                            a{
                                text-decoration:none;
                                background:#6c63ff;
                                color:white;
                                padding:10px 20px;
                                border-radius:8px;
                            }
                        </style>
                    </head>

                    <body>

                    <div class="box">

                    <h1>Signup Successful 🎉</h1>

                    <p>Your details have been saved successfully.</p>

                    <br>

                    <a href="/">Go Back</a>

                    </div>

                    </body>
                    </html>
                    `);

                }

            });

        });

    }

    else {

        res.writeHead(404);
        res.end("404 Page Not Found");

    }

});

server.listen(3000, () => {

    console.log("Server Running Successfully");
    console.log("http://localhost:3000");

});