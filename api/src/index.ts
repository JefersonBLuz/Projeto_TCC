import { App } from "./app"

const host = process.env.PORT || 8083
const app = new App
app.getServer().listen(host, ()=>{
    console.log(`Servidor rodando na prota http://localhost:${host}`);
})
