import express from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

app.get('/ping', (request, response)=>{
    const status = "pong"
    response.send(status);
});

 