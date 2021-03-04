const express = require('express'); 
const cors = require('cors'); 

const app = express();
app.use(express.urlencoded()); 
app.use(express.json()); 
app.use(cors())

const dbModule = require('./dbModule');

app.get('/catapi', (req, res) => {
    dbModule.getAll().then(data => {
        const result = data[0];
        res.send(result);
    })
})
app.get('/catapi/rand', (req, res) => {
    dbModule.getAll().then(data => {
        const randCatIndex = Math.floor(Math.random() * data.length);
        const result = data[randCatIndex];
        res.send(result);
    })
})
app.get('/catapi/:id', (req, res) => {
    dbModule.getAll().then(data => {
        const result = data.find(el => el.id == req.params.id);
        res.send(result);
    })
})

app.post('/catapi', (req, res) => {
    
})

app.put('/catapi', (req, res) => {

})

app.delete('/', (req, res) => {

})

app.listen(3001);
