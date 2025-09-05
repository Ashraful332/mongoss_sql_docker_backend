const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = [
        {
            id: Math.random(),
            name: (function () {
                const firstNames = ["ashraful","sojon","jamal","kamal","forhad","afaj","kmal","lalmiya","manya"];
                const lastNames = ["pathan","houlader","chudory","khan","miya","islam","mirja","banerjy","hasan"];

                function generateRandomFullName() {
                    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
                    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                    return `${randomFirstName} ${randomLastName}`;
                }
                return generateRandomFullName()

            }()),
            aeg: Math.floor((Math.random() * 10) + 12)
        },{
            id: Math.random(),
            name: (function () {
                const firstNames = ["ashraful","sojon","jamal","kamal","forhad","afaj","kmal","lalmiya","manya"];
                const lastNames = ["pathan","houlader","chudory","khan","miya","islam","mirja","banerjy","hasan"];

                function generateRandomFullName() {
                    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
                    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                    return `${randomFirstName} ${randomLastName}`;
                }
                return generateRandomFullName()

            }()),
            aeg: Math.floor((Math.random() * 10) + 12)
        },{
            id: Math.random(),
            name: (function () {
                const firstNames = ["ashraful","sojon","jamal","kamal","forhad","afaj","kmal","lalmiya","manya"];
                const lastNames = ["pathan","houlader","chudory","khan","miya","islam","mirja","banerjy","hasan"];

                function generateRandomFullName() {
                    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
                    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                    return `${randomFirstName} ${randomLastName}`;
                }
                return generateRandomFullName()

            }()),
            aeg: Math.floor((Math.random() * 10) + 12)
        },{
            id: Math.random(),
            name: (function () {
                const firstNames = ["ashraful","sojon","jamal","kamal","forhad","afaj","kmal","lalmiya","manya"];
                const lastNames = ["pathan","houlader","chudory","khan","miya","islam","mirja","banerjy","hasan"];

                function generateRandomFullName() {
                    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
                    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                    return `${randomFirstName} ${randomLastName}`;
                }
                return generateRandomFullName()

            }()),
            aeg: Math.floor((Math.random() * 10) + 12)
        },{
            id: Math.random(),
            name: (function () {
                const firstNames = ["ashraful","sojon","jamal","kamal","forhad","afaj","kmal","lalmiya","manya"];
                const lastNames = ["pathan","houlader","chudory","khan","miya","islam","mirja","banerjy","hasan"];

                function generateRandomFullName() {
                    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
                    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                    return `${randomFirstName} ${randomLastName}`;
                }
                return generateRandomFullName()

            }()),
            aeg: Math.floor((Math.random() * 10) + 12)
        },
    ]
    res.send(data)
})

module.exports = router;
