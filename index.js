const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
app.use(express.urlencoded({extended: true}));

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));



async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

app.get("/chats", async(req, res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", {chats});
});

//new route
app.get("/chats/new", (req, res)=>{
  res.render("new.ejs")  
});

app.post("/chats", (req, res)=>{
 let {from, to, msg} = req.body;
 let newchat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
 });
 newchat.save().then(res => {console.log("new chat created");

 })
 .catch((err) =>{
  console.log(err);
 });

 res.redirect("/chats");
});

app.get("")
 




app.get("/",(req, res) =>{
res.send("Root is working");
})

app.listen(8080, ()=>{
    console.log("server is listing to port8080 ");
});