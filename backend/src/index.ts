import Express from "@infra/http/express/Express";

async function index() {
	const httpServer = new Express();
	httpServer.listen(5000);
}

index();
