/* app/controllers/welcome.controller.ts */

// Import only what we need from express
import { Router, Request, Response } from 'express';
import { PriceModel } from '../models/price-model';

// Assign router to the express.Router() instance
const router: Router = Router();

router.get('/communications', (req: Request, res: Response) => {

    // mongodb+srv://mongosa:<PASSWORD>@mongo-qdafj.mongodb.net/test?retryWrites=true

    const fs = require('fs-extra');
    let version: string = "default ";

    fs.readJson('./cmsdata.json')
        .then((packageObj: any) => {            

            res.json(packageObj);

        })
        .catch((err: any) => {

            console.error(err)
            res.send("error: " + err);

        })


});


// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World! Mike');
});

// Export the express.Router() instance to be used by server.ts
export const CMSController: Router = router;