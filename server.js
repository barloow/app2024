const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT, MONGO_DB_URI } = require('./config/dotenv');
const ConnectDB = require('./config/database');
const UserRoutes = require('./routes/UserRoutes');
const ReservationRoutes = require('./routes/ReservationRoutes');
const ReviewRoutes = require('./routes/ReviewRoutes');
const MenuRoutes = require('./routes/MenuRoutes');
const RestaurantRoutes = require('./routes/RestaurantRoutes');

const app = express();
ConnectDB();


app.use(cors());
app.use(express.json());

app.use('/users', UserRoutes);
app.use('/restaurants', RestaurantRoutes);
app.use('/reservations', ReservationRoutes);
app.use('/reviews', ReviewRoutes);
app.use('/menus', MenuRoutes);

app.get('/health', (req,res) => {
    res.send('Server radi')
});

app.listen(PORT, ()=> {
    console.log("server is running on port:" + PORT);
});