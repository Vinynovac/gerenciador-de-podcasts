import * as dotenv from "dotenv";
import * as http from "http";

import { getFilterEpisodes, getListEpisodes} from "./controllers/podcasts-controller"; 

const server = http.createServer(async(req: http.IncomingMessage, res: http.ServerResponse) => {

    //querystring
    //http://localhost:3636/api/episode?/p=flow

    const [baseUrl, querystring] = req.url?.split("?") ?? ["",""];

     console.log("Base URL:", baseUrl);


   //listar podcasts
    if(req.method === "GET" && baseUrl === "/api/list"){
       await getListEpisodes(req, res)
    }
    if (req.method === "GET" && baseUrl === "/api/episode"){
        await getFilterEpisodes(req, res)
    }
});

const port = process.env.PORT || 3636;

server.listen(port,()=>

console.log(`servidor iniciado na porta ${port}`));