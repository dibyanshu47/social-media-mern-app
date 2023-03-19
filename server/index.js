const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const postRoutes = require('./routes/posts.js');
const userRoutes = require('./routes/users.js');

const app = express();
dotenv.config();

//Body Parser
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(cors());

// app.use(function (req, res, next) {
//     if (req.user) {
//         console.log("USER");
//         console.log(req.user);
//     }
//     if (req.body) {
//         console.log("BODY");
//         console.log(req.body);
//     }
//     if (req.params) {
//         console.log("PARAMS");
//         console.log(req.params);
//     }
//     next();
// });

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('APP IS RUNNING');
});


const CONNECTION_URL = 'mongodb+srv://dibyanshu47:Y6DIw4WI2RVapwoa@cluster0.gbvxlo7.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
