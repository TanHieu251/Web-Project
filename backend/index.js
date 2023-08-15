const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require('cors')


app.use(express.json())
app.use(cors())

app.listen(3002, () => {
    console.log('Server is running on port 3002')
})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'plantdb',

})

app.post('/register', (req, res) => {
    const sentEmail = req.body.Email
    const sentUserNmae = req.body.UserName
    const sentPassword = req.body.Password


    const SQL = 'INSERT INTO users (email,username,password) VALUES (?,?,?)'
    const Values = [sentEmail, sentUserNmae, sentPassword]

    db.query(SQL, Values, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            console.log('User inserted succes')
            res.send({ message: 'User added' })
        }
    })
})

app.post('/login', (req, res) => {
    const sentLoginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword


    const SQL = 'SELECT * FROM users WHERE username= ? AND password=?'
    const Values = [sentLoginUserName, sentLoginPassword]

    db.query(SQL, Values, (err, result) => {
        // console.log(result);
        if (err) {
            // console.log(err)
            res.send({ error: err })
        }
        if (result.length > 0) {
            res.send(result)
        }
        else {
            res.send({ message: `Credentials don't match!` })
        }

    })
})