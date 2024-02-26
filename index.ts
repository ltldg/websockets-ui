import { WebSocketServer } from "ws";
import { httpServer } from "./src/http_server/index";

const HTTP_PORT = 8181;
const WS_PROT = 3000
console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);



const websocket = new WebSocketServer({port:WS_PROT})



websocket.on('connection', (ws)=>{
    ws.on('message', (msg)=>{
        console.log(JSON.parse(msg.toString()))
    });
    ws.send(JSON.stringify('dog'))


    ws.on('close', ()=>{
        console.log('disconnected')
    })
})