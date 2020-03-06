const { Router } = require('express');
const router = Router();

router.get('/api/characters/luke', (req, res) => {
    const data = [{
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "Tato oine",
        "image": "images/luke.jpg",
        "species": [
        "Human"
        ],
        "vehicles": [
        "Snowspeeder",
        "Imperial Speeder Bike"
        ],
        "starships": [
        "X-wing",
        "Imperial shuttle"
        ],
        "films": [
        ]
     }];
     res.json(data);
});

router.get('/api/characters/darth-vader', (req, res) => {
    const data = [{
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hair_color": "none",
        "skin_color": "white",
        "eye_color": "yellow",
        "birth_year": "41.9BBY",
        "gender": "male",
        "homeworld": "Tatooine",
        "image": "images/darth-vader.jpg",
        "species": [
            "Human"
        ],
        "vehicles": [],
        "starships": [
            "TIE Advanced x1"
        ],
        "films": [
        ]
    }];
     res.json(data);
});

module.exports = router;