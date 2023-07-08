import { server } from "./src";

const port = process.env.PORT || 3020;

server.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`)
})
