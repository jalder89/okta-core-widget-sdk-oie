import express from "express";

const app = new express();

app.listen(Number(process.env.PORT || 8080));
console.log(`App listening on ${process.env.PORT || 8080}`);