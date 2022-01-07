let express = require("express");
let app = express();

let { showmsg, addmsg } = require("./user");

app.get("/mshow", async(req, res) => {
    let list = await showmsg();
    res.json(list);
});

app.post("/madd", async (req, res) => {
    let result = req.body;
    await addmsg(result);
    res.json({message :"message show"});

});

app.listen(4000, () => {
    console.log("server started");
});
