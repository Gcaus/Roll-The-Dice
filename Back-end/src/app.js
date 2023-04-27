import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());


app.post('/roll', (req, res) => {
    const diceOption = req.body.diceOption;
    const result = Math.floor(Math.random() * diceOption) + 1;
    try {
        res.status(200).json({ result })
    } catch (error) {
        console.log(error)
        res.status(500).send('Erro')
    }
})

export default app