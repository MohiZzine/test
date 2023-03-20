// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// @param {module:http.ServerResponse} res

/*
const httpHandler = (req, res) => {
  // cors(req, res)
  console.log(req.method + ": " + req.url);
  if (req.url === "/candidate" && req.method === "POST") {
    res.setHeader("Content-Type", "application/json");
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://localhost:3000/candidate"
    );
    // const body = [];
    // req.on('data', (chunk) => {
    //   body.push(chunk);
    // });
    // req.on('end', () => {
    //   const parsedBody = Buffer.concat(body).toString();
    //   const message = parsedBody.split('=')[1];
    //   res.statusCode = 302;
    //   res.setHeader('Location', '/');
    //   res.end();
    // });
  }
};
*/

// http.createServer(httpHandler).listen(3000);

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end("Hello, World!");
// });

// server.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });

// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');
// const fs = require('fs');

// const app = express();

// // Enable CORS
// app.use(cors());

// // Enable file upload
// app.use(fileUpload());

// // Enable parsing of application/json
// app.use(bodyParser.json());

// // Enable parsing of application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/candidate', (req, res) => {
//   const { firstName, lastName, email, description } = req.body;
//   const { cv } = req.files;

//   // Check if all required fields are provided
//   if (!firstName || !lastName || !email || !description) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   // Check if CV file is provided and is either a PDF

// const express = require("express"); // Express web server framework, what does it provide to this code ?
// // express is helping us to create a server
// const bodyParser = require("body-parser"); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// const cors = require("cors"); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
// const fs = require("fs"); // File System module, provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

// const app = express(); // create an express app, the express object is the main object of the express module
// const PORT = 3000; // define the port

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.post("/candidate", upload.single("cv"), (req, res) => {
//   // upload.single('cv') is a middleware that will handle the file upload, can we delete it ?
//   if (req.url === "/candidate" && req.method === "POST") {
//     res.setHeader("Content-Type", "application/json");
//     res.setHeader(
//       "Access-Control-Allow-Origin",
//       "https://localhost:3000/candidate"
//     );
//   } // what is this code doing ?

//   if (req.method === "OPTIONS") {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//   }
//   const { firstName, lastName, email, description } = req.body;
//   // const { originalname, path } = req.file;

//   const candidateData = {
//     firstName,
//     lastName,
//     email,
//     description,
//     // cv: {
//     //   filename: originalname,
//     //   path: path,
//     // },
//   };

//   const jsonData = JSON.stringify(candidateData);

//   fs.writeFile(`candidates/${firstName}-${lastName}.json`, jsonData, (err) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Internal server error");
//     } else {
//       console.log(`Candidate data saved for ${firstName} ${lastName}`);
//       res.send("Candidate data saved successfully");
//     }
//   });
// });

// app.post("http:localhost:3000/candidate", (req, res) => {
//   // if (req.method === "OPTIONS") {
//   //   res.setHeader("Access-Control-Allow-Origin", "*");
//   // }
//   res.setHeader("Access-Control-Allow-Origin", "*"); // allow requests from any origin
//   res.setHeader("Access-Control-Allow-Methods", "POST"); // only allow POST requests
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // only allow requests with Content-Type header
//   const formData = req.body;
//   console.log(formData);
//   const jsonString = JSON.stringify(formData);
//   fs.writeFile("./candidate.json", jsonString, (err) => {
//     if (err) {
//       console.log("Error writing file", err);
//     } else {
//       console.log("Successfully wrote file");
//     }
//   });
//   res.json(formData); // return the formData as JSON response
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// let express = require("express");
// let app = express();
// let PORT = 3000;

// app.post("/", (req, res) => {
//   res.send("POST Request Called");
// });

// app.listen(PORT, function (err) {
//   if (err) console.log(err);
//   console.log("Server listening on PORT", PORT);
// });

let express = require("express");
let app = express();
var cors = require("cors");
//cors to allow cross origin resource sharing
app.use(cors());
//Middleware to parse the body of the request as JSON
app.use(express.json());

//The API endpoint that the form will POST to
app.post("/formdata-as-json", (request, response) => {
  //Destructure the request body
  let resData = {
    serverData: request.body,
  };

  //Console log the response data (for debugging)
  console.log(resData);
  //Send the response as JSON with status code 200 (success)
  response.status(200).json(resData);
});

//Start the server on port 5500
app.listen(5500, () => console.log(`we're live 🎉`));
