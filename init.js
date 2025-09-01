const mongoose = require("mongoose");
const chat = require("./models/chat.js");


main()
    .then(() => {
        console.log("connection sucessful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let allChats = [
    {
        from: "neha",
        to: "preeti",
        msg: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "tony",
        to: "boni",
        msg: "send me some fruits",
        created_at: new Date(),
    },
    {
        from: "peter",
        to: "preeti",
        msg: "love you 3000",
        created_at: new Date(),
    },
];

chat.insertMany(allChats);