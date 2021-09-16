import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';

const app = express();
mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://localhost/ecommerce-project'
);

app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get('/', (req, res) => res.send('O server está pronto'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server: http://localhost:${port}`));
