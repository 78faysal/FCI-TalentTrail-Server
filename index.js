const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


// middleware 
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('FCI TalentTrail Server running')
})

app.listen(port, () => {
    console.log("Listening port of", port);
})