var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:'article1 | shambhavi shashi',
    heading:' ARTICLE ONE',
    date:'19 march 2017',
    content:`<p>this is shambhavi on imad console.this is shambhavi on imad console.this is shambhavi on imad console.
              this is shambhavi on imad console.this is shambhavi on imad console.this is shambhavi on imad console.this is
              shambhavi on imad console.this is shambhavi on imad console.this is shambhavi on imad console.this is shambhavi on
              imad console.this is shambhavi on imad console.</p>`
};
function createtemp(data)
{
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmltemp=
` <html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="con">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h2>
            ${heading}
        </h2>
        <div>
           ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>`;
return htmltemp;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1',function(req,res){
res.send(createtemp(articleone))});

app.get('/article2',function(req,res){
res.send('this is article2')});

app.get('/article3',function(req,res){
res.send('this is article3')});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
