const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const propertiesRouter = require('./routes/properties');

const app = express();
app.use(cors());

const PORT = process.env.PORT;
const URI = process.env.MONGODB_URI;

app.use(express.json());

// API Gateways
app.use('/api/properties', propertiesRouter)

// Moongoose
const connectToDB = async () => {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('MongoDB is now connected!')
  }).catch((error) => {
    console.log('Some error pops up', error)
  })
}

// Server endpoint
app.listen(PORT, async () => {
  await connectToDB()
  console.log(`Your Express + NodeJS server is running localhost:${PORT}`)
})
