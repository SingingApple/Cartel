const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const kitchenRoutes = require('./routes/kitchenRoutes')


const app = express();



// Middleware
app.use(cors());
app.use(express.json({ extended: false }))


//DB
connectDb();

//Routes
app.use('/kitchen', kitchenRoutes)


app.get('/', async (req, res) => {
    res.send('API')
})

//PORT
const PORT = process.env.PORT || 5000;

//Server Start
app.listen(PORT, () => {
    console.log("Server Started");
});