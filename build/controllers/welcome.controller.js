"use strict";
/* app/controllers/welcome.controller.ts */
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = require("express");
// Assign router to the express.Router() instance
var router = express_1.Router();
router.get('/parseJSON', function (req, res) {
    var fs = require('fs-extra');
    var version = "default ";
    var rootObject = {
        baseID: '1',
        name: 'test',
        description: 'test',
        brand: 'test',
        gender: 'test',
        family: 'test',
        brand_image_url: 'test',
        products: []
    };
    var root = [];
    var priceModel;
    var priceModels = [];
    fs.readJson('./euro.json')
        .then(function (packageObj) {
        //console.log(packageObj.version) // => 0.1.3
        for (var _i = 0, packageObj_1 = packageObj; _i < packageObj_1.length; _i++) {
            var obj = packageObj_1[_i];
            rootObject = {
                baseID: obj.baseID,
                name: obj.name,
                description: obj.description,
                brand: obj.brand,
                gender: obj.gender,
                family: obj.family,
                brand_image_url: obj.brand_image_url,
                products: obj.products
            };
            root.push(rootObject);
            priceModel = {
                level: 'MODEL',
                type: 'UPDATE',
                keys: ['modelId'],
                modelId: obj.baseID,
                data: {
                    desc: obj.name,
                    brandGroup: {
                        brandGroupAbbr: obj.brand,
                        brandGroupDesc: obj.brand,
                    },
                    genderAge: {
                        key: '20',
                        value: obj.gender
                    },
                    fob: {
                        key: '3',
                        value: obj.family
                    },
                    urls: [
                        {
                            url: obj.brand_image_url,
                            urlType: '',
                            resolution: '',
                            Country: '',
                            Region: '',
                            OtherAttr: '',
                        }
                    ]
                }
            };
            priceModels.push(priceModel);
        }
        ;
        // console.log('Root length is ...' + root.length);
        // rootObject = {
        //     baseID: packageObj[0].baseID,
        //     name: packageObj[0].name,
        //     description: packageObj[0].description,
        //     brand: packageObj[0].brand,
        //     gender: packageObj[0].gender,
        //     family: packageObj[0].family,
        //     brand_image_url: packageObj[0].brand_image_url,
        //     products: []
        // }
        console.log(priceModels);
        res.json(priceModels);
    })
        .catch(function (err) {
        console.error(err);
        res.send("error: " + err);
    });
});
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', function (req, res) {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World! Mike');
});
// router.get('/:name', (req: Request, res: Response) => {
//     // Extract the name from the request parameters
//     let { name } = req.params;
//     // Greet the given name
//     res.send(`Hello, ${name}`);
// });
// Export the express.Router() instance to be used by server.ts
exports.WelcomeController = router;
