import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true }));

app.get("/" , (req,res) =>{
    res.render("index.ejs" , {
        quote : "cjbcj s c  n cjbuoibvb",
        author : "Shaik Darbar",
    });
});

app.post("/submit" , async (req,res) =>{
    try {
        const result = await axios.get("https://programming-quotesapi.vercel.app/api/random");
        res.render("index.ejs" , {
        quote : result.data.quote,
        author : result.data.author,
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port , () =>{
    console.log(`Server is Started ! ${port}`);
});