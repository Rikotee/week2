'use strict';
import express  from 'express';
import catRoute from './routes/catRoute'
import userRoute from './routes/userRoute'
import authRoute from './routes/authRoute'
import passport from './utils/pass';
import db from './utils/db';
import cors from 'cors'
const app = express();
const port = 3000;

console.log('app is comming?');

app.use(passport.initialize());

app.use(cors())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/', (req, res) => {
	res.send('Seriously azure?');
});
app.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute)
app.use('/auth', authRoute)

db.on('connected', () => {
	app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}).on('open', () => {
	console.log('Mongoose connection open to database');
}).on('error', (err) => {
	console.log(`Connection error: ${err.message}`);
});

