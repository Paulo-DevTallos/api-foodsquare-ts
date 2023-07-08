import mongoose from "mongoose";

export const dbConnection = () => {
	mongoose.connect(process.env.MONGO_DB_CONNECT_URL || "localhost:27017");

	const db = mongoose.connection;

	db.once('open', () => {
		console.log('connected do Mongo Database');
	})

	db.on('error', console.error.bind(console, 'connection error'))
}
