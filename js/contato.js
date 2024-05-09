const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Configurar o serviço de email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ni.oliveiraamorim.25@gmail.com',
            pass: 'Ni25Oa12'
        }
    });

    // Definir informações do email
    const mailOptions = {
        from: 'seu-email@gmail.com',
        to: 'ni.oliveiraamorim.25@gmail.com',
        subject: 'Mensagem de contato',
        text: `Mensagem de: ${name} (${email})\n\n${message}`
    };

    // Enviar o email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erro ao enviar email');
        } else {
            console.log('Email enviado: ' + info.response);
            res.send('Email enviado com sucesso');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
