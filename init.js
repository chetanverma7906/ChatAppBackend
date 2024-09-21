const mongoose = require("mongoose");
const Chat = require("./models/chat.js");



main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

let allchats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me your ans sheets",
        created_at: new Date(),
        },
        {
            from: "ram",
            to: "shyam",
            msg: "whats about you",
            created_at: new Date(),
        },
        {
            from: "hari",
            to: "arak",
            msg: "fine",
            created_at: new Date(),
        },
        {
            from: "aman",
            to: "tanya",
            msg: "whats is going",
            created_at: new Date(),
            },
]

Chat.insertMany(allchats);


