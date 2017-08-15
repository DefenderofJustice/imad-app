var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
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
app.get('/article-one', function(req,res){
  res.send(createTemplate(articleone));
});
app.get('/article-two', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
