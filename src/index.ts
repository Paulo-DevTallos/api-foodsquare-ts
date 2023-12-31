import express from 'express';
import path from 'node:path';
import http  from 'node:http';
import { config } from 'dotenv';
import { Server } from 'socket.io';
import { router } from './router';
import { dbConnection } from './database';

const app = express();
export const server = http.createServer(app)
export const io = new Server(server)

config();

//mongo db conection
dbConnection();

/*io.on('connection', () => {
	console.log('Conectado');
})*/
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(express.json())

//habilitando cors
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', '*')
	res.setHeader('Access-Control-Allow-Headers', '*')

	next()
})

app.use(router);
