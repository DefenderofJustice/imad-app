var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var config={
    user: 'vaishaliagarwal2010',
    database:'vaishaliagarwal2010',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));
var articles={
 'article-one':{
  title:"article-one|black knights",
  heading:"article one of the order of black knights",
  law:"C.C law",
  content: ` <p>
             This is the law which states that C.C. must get a pizza every 5 hours!!!! She must participate in ashford academy's largest pizza event every year. If due to unforseen coincidental circumstances the pizza is delayed she must evacuate the building immediately before king charles li britannia and queen marianne and v.v. and the code of geass finds her. 
         </p>
         <p>
             In case C.C. is found wandering around she must be lured in by pizza. If by chance suzaku shows up he must get a series of shock images by c.c. immediately. It will confuse him for a while but you'll be able to escape. Oh and there is no danger to c.c as she cannot die! but doesn't mean you can cut her up like mao wanted to. That damn sadist.
         </p>
         <p>
             In case C.C. is found unexpectedly staring at you. You must know that she infact doesn't care about it. She is a witch whose sole purpose is to eat pizza. If C.C. hears me she might give me geass. Ugh, the deathly power. I must stay clear of even touching c.c. Though I sometimes wonder hwat kind of shock wave images I might receive. Ugh Ugh. Lulu only you can save us ;~;
         </p> `
},
 'article-two':{
     title:"article-two|black knights",
  heading:"article two of the order of black knights",
  law:"lulu law",
  content: ` <p>
             This is the law which states that you must obey every order of Lelouch because he has the power of king, the absolute power which makes anyone do as he commands. Look into his eyes and be blessed. Lelouch vi Britannia commands you to follow his every order.
         </p>
         <p>
             Lelouch has two wishes. One to create a peaceful world for his little sister nunnally and second to avenge the death of his mother lady marianne. Even though she is still alive (spoiler) Anyway, to do so he acquires the power of geass from a mysterious girl C.C. He uses this power to fight against the kingdom of britannia with the help of black knights.
         </p>
         <p>
             While he is a britannian he lives everyday loathing his country and his father who sent him and his little sister nunally as bargain chip to japan. He knew he'd die there. Anyway miraculously he survives and finds a friend suzaku who is actually the devicer of the white helmet that's current;y causing his group of black knights. But fear not Lelouch has Kallen! Lelouch ultimately gets his dream fulfilled and now spends his life with C.C. while driving a cart. LOLOLOL
         </p>
  `
     
},
'article-three':{
    title:"article-three|black knights",
  heading:"article three of the order of black knights",
  law:"Suzaku law",
  content:`<p>
             This is the law which states that I am too sleepy to write about suzaku. I'll write about you tomorrow. Love from Euphy~. lolololol
         </p>
         <p>
             In case C.C. is found wandering around she must be lured in by pizza. If by chance suzaku shows up he must get a series of shock images by c.c. immediately. It will confuse him for a while but you'll be able to escape. Oh and there is no danger to c.c as she cannot die! but doesn't mean you can cut her up like mao wanted to. That damn sadist.
         </p>
         <p>
             In case C.C. is found unexpectedly staring at you. You must know that she infact doesn't care about it. She is a witch whose sole purpose is to eat pizza. If C.C. hears me she might give me geass. Ugh, the deathly power. I must stay clear of even touching c.c. Though I sometimes wonder hwat kind of shock wave images I might receive. Ugh Ugh. Lulu only you can save us ;~;
         </p>`

}

};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var law=data.law;
    var content=data.content;
var htmlTemplate=`
<html>
 <head>
     <title>
         ${title}
     </title>
     <meta name="viewport" content="width=device-width, initial-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />
 </head>
 <body>
     <div class="container">
     <div>
         <a href ="/">Home</a>
     </div>
     <hr/>
     <h3>
         ${heading}
     </h3>
     <div>
         ${law}
     </div>
     <div>
        ${content}
     </div>
     </div>
 </body>
</html>
`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter =0;
app.get('/counter', function(req,res)
{
    counter=counter+1;
    res.send(counter.toString());

});
var pool=new Pool(config);
app.get('/test-db',function(req,res){
    //make a select request
    //return a response with the results
    pool.query('SELECT * from test',function(err,result){
    if(err){
        res.status(500).send(err.toString());
    
    }
    else{
        res.send(JSON.stringify(result));
    }
    });
});
var names=[];

app.get('/submit-name',function(req,res){
//get the name from the request object
var name=req.query.name;
names.push(name);
//Json java scipt notation
res.send(JSON.stringify(names));
});

app.get('/:articleName', function(req,res){
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
