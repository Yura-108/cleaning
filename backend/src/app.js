const express = require('express');
const app = express();
const routes = require('./routes');
const {body, validationResult} = require('express-validator');

app.use(express.json());

app.post('/client',
    body('first_name').notEmpty(),
    body('last_name').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors});
        }
        next();
    },
    routes
);

app.use('/api', routes);

app.use((req, res, next) => {
    res.status(500).send('Something went wrong');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})