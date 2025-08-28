const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

/*const blogRoute = require('./routes/blogRoute');
const bookRoutes = require('./routes/bookRoute');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const addressRoutes = require('./routes/addressRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');*/
//const uploadRoutes = require('./routes/uploadRoutes');


const app = express();
app.use(express.json());
app.use(cors());


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection failed:", err));


/*app.use('/api/blog', blogRoute);
app.use('/api/book', bookRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/address',addressRoutes);
app.use('/api/payment',paymentRoutes);
app.use('/api/products',productRoutes);
app.use('/api/user',userRoutes);
//app.use('/api',uploadRoutes);
// backend/server.js or app.js
//app.use('api/uploads', express.static('uploads'));*/


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));