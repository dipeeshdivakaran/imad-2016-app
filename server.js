var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one': {
 title: 'dipeesh tricks',
 heading: 'arictle one',
 date: 'sep.5.2016',
 content:`
          <p>
            ekjhdkw.ebqubkfmhbsdcmkvwufgwmmbskjbclglwglgmnkxgfgnbkcjlgfg
            ekjhdkw.ebqubkfmhbsdcmkvwufgwmmbskjbclglwglgmnkxgfgnbkcjlgfg
          </P>
          <p>
            ekjhdkw.ebqubkfmhbsdcmkvwufgwmmbskjbclglwglgmnkxgfgnbkcjlgfg
            ekjhdkw.ebqubkfmhbsdcmkvwufgwmmbskjbclglwglgmnkxgfgnbkcjlgfg
         </P>`
},
'article-two':{
 title: 'dipeesh tricks',
 heading: 'arictle two',
 date: 'sep.7.2016',
 content:`
          <p>
            ekjhdkw.ebqubkfmhbsdcmkvwufgwmmbskjbclglwglgmnkxgfgnbkcjlgfg
            ekjhdkw.ebqubkfmhbsdcmkvwufgwmmbskjbclglwglgmnkxgfgnbkcjlgfg
          </P>
          <p>
            SECOND ARTICLEekjhdkw.ebqubkfmhbsdcmkvwufgwmmbskjbclglwglgmnkxgfgnbkcjlgfg
            ekjhdkw.ebqubkfmhbsdcmkvwufgwmmbskjbclglwglgmnkxgfgnbkcjlgfg
         </P>`
},
'article-three': {
title: 'dipeesh tricks',
 heading: 'arictle three',
 date: 'sep.20.2016',
 content:`
          <p>
            ekjhdkw.ebqubkfmhbsdcmkvwufgwmmbskjbclglwglgmnkxgfgnbkcjlgfg
            ekjhdkw.ebqubkfmhbsdcmkvwufgwmmbskjbclglwglgmnkxgfgnbkcjlgfg
          </P>
          <p>
            ekjhdkw.ebqubkfmhbsdcmkvwufgwmmbskjbclglwglgmnkxgfgnbkcjlgfg
            third articleekjhdkw.ebqubkfmhbsdcmkvwufgwmmbskjbclglwglgmnkxgfgnbkcjlgfg
         </P>`
}
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
    <head>
        <title>${content}</title>
         <link href="/ui/style.css" rel="stylesheet" />
        <style>
            
     </style>
    </head>
    <body>
    <div class="container">
        <div>
            <a href="/">home</a>
        </div>
     <hr/>
     <h3>
       ${heading}
     </h3>
     <div>
        ${date}
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

app.get('/:articlename',  function (req, res) {
    //articlename == article-one
    //articles[articlename] == {} content object for article one
    var articlename = req.params.articlename;
  res.send(createTemplate(articles[articlename]));
});

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
