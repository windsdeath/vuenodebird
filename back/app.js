const { urlencoded } = require('express');
const express = require('express');

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send('안녕 백엔드 !!')
})
app.post('/user', (req, res) => {
    req.body.email;
    req.body.nickname;
    req.body.password;
})

app.listen(3085, () => {
    console.log(`백엔드 서버가 ${3085}번 포트에서 가동중`)
})