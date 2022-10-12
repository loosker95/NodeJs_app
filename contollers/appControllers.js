const mydata = require('../models/countries')

module.exports = {

    homeView: (req, res)=>{
        let theTitle = "List of worldwide countries...";
        let total = mydata.length;
        let numbers = 1;
        res.render('../views/index', {'mydata': mydata, 'theTitle': theTitle, 'numbers': numbers, 'total':total});
    },

    aboutView: (req, res) =>{
        res.render('../views/about');
    },

    infoView: (req, res) =>{
        res.render('../views/information');
    },

    contactView: (req, res) =>{
        res.render('../views/contact');
    }

}