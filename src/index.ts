import express from 'express';
import path from 'node:path';
import http  from 'node:http';
import { config } from 'dotenv';
import { Server } from 'socket.io';
import { router } from './router';
import { dbConnection } from './database';

const app = express();
config();
const server = http.createServer(app)
export const io = new Server(server)

//mongo db conection - stabelishing connection api when database is up
dbConnection();

/*io.on('connection', () => {
	console.log('Conectado');
})*/
//habilitando cors
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', '*')
	res.setHeader('Access-Control-Allow-Headers', '*')

	next()
})
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(express.json())
app.use(router);

const port = process.env.PORT || 3020;

server.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`)
})
