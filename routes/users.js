var express = require('express');
var router = express.Router();
var organisateur = require("./added_data.json");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('  Collections');
});

router.get("/organizers/:id",(req,res) => {
    
    
  res.json(organisateurs.find((organisateur)=>{
      return req.params.id == organisateur.id
  }))
  
  res.send(req.params)
  
})

router.post("/add_organizers",
    body('organisateur').notEmpty(),
    body('mail').normalizeEmail().isEmail().notEmpty(),
    body('ville').notEmpty(),(req,res)=>{
    
    organisateurs.push(req.body)
    res.render("home",{data:organisateurs})
})

router.put('/organizers/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let organizer = or.find(organizer => organizer.id === id)
    organizer.organisateur =req.body.organisateur,
    organizer.mail =req.body.mail,
    organizer.ville =req.body.ville,
    res.render("organisateur",{data:organisateurs})
})


router.delete('/organizers/:id',(req,res) => {
    const id = parseInt(req.params.id)
    let organizer = organizer.find(organizer => organizer.id === id)
    organizer.splice(organizer.indexOf(organizer),1)
    res.render("home",{data:organizer})
})


router.all("*",(req,res)=>{
  res.render("home",{data:"404 NOT FOUND"})
      
})

module.exports = router;
