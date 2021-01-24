// const express = require("express");
// //const http = require('http');
// const app = express();
// app.get("/", (req, res) => {
//     res.send("Home1");
// })

// ////////Method 1 - use express app to listen on port, here server object cannot be reused.
// // app.listen(8888, () => {
// //     console.log("app is running on 8888");
// // })


// ////////Method 2 - create http server using express app, reuse this server, generally used for socket application
// // const server = http.createServer(app);

// // server.listen(8888, () => {
// //     console.log("app is running on 8888");
// // });

// ////////Method 3 - reuse express app as server
// const server = app.listen(8888);


const express = require("express");
const cors = require("cors");
const {
    routes: userRoutes
} = require("./user/routes");

const app = express();

app.use(cors());

app.use(express.json());
app.use("/users", userRoutes);

app.listen(8888, () => {
    console.log("app is running on 8888");
})

module.exports = app;