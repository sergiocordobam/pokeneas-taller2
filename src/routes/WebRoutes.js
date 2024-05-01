const PokeneaController = require('../controllers/PokeneaController');
const express = require('express');

class WebRoutes {
    static init() {
        const router = express.Router();

        router.get('/pokenea', PokeneaController.show);
        return router;
    }
}

module.exports = WebRoutes;