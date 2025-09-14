import { IncomingMessage, request, ServerResponse } from "http";

import {serviceListEpisodes} from '../services/list-episodes-services'
import { serviceFilterEpisodes } from "../services/filter-episodes-services";

export const getListEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse,
) =>{   
    const content = await serviceListEpisodes();
    res.writeHead(200, {'content-type': "application/json"});
    res.end(JSON.stringify(content))
};


export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {

     const querystring = req.url?.split("?p=")[1] ?? "";

    const content = await serviceFilterEpisodes (querystring);

    res.writeHead(200, {'content-type': "application/json"});
    res.end(JSON.stringify(content));
};
 