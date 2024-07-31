const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

//so para testar
router.get('/test', (req, res) => {
    res.send('deu certo');   
});

//Get a list
router.get('/add', (req, res) => {
    res.render('add');
});

//detalhe da vaga
router.get('/view/:id', (req, res) => Job.findOne({
    where: {id: req.params.id}
}).then(job => {
    res.render('view', {job});
}).catch(err => console.log(err)));


// Add job via post
router.post('/add', (req, res) => {

   let {title, salary, company, description, email, new_job} = req.body;

    //insert
    Job.create({
        title,
        salary,
        company,
        description,
        email,
        new_job
    })
    .then(()=> res.redirect('/'))
    .catch(err => {console.log(err);});
});

// Rota para deletar uma vaga
router.delete('/delete/:id', (req, res) => {
    Job.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.sendStatus(200);
    })
    .catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = router;