const os = require('os');
const { pokeneas } = require('../../models/Pokenea');

class PokeneaApiController {
    static show(req, res) {
        
        const number = Math.floor(Math.random() * pokeneas.length);
        const pockenea = pokeneas[number];
        const { id, name, height, ability } = pockenea

        let response = {
            id: id,
            name: name,
            height: height,
            ability: ability,
            hostname: os.hostname(),
        }

        res.send(response)
    }
}

module.exports = PokeneaApiController;