const express = require("express");
const routes = require("./routes")
const cors = require('cors')


const app = express();
app.use(cors())
app.use(express.json());
app.use('/api',routes)

app.listen(3001, () => {
  console.log(`server runing on port 3001`);
})