const PokeneaApiController = require('../controllers/api/PokeneaApiController');
const express = require('express');

class ApiRoutes {
    static init() {
        const router = express.Router();

        router.get('/pokenea', PokeneaApiController.show);
        return router;
    }
}

module.exports = ApiRoutes;