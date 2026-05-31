const express = require('express');
const connectDB = require('./config/db');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');
const authRouter = require('./routes/auth.routes');
const postRouter = require('./routes/post.routes');

const app = express();

app.use(express.json());

const PORT = 5000;
connectDB();

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send("working...")
});

app.use("/", authRouter);
app.use('/posts', postRouter);

app.use(errorMiddleware);
// app.get("*", (req, res) => {
//   return res.status(404).send("404 not fount");
// });

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})