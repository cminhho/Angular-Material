var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

// dummy database
var allTasks = {
  "count": 9,
  "data": [
    {
      "name": "Task center 1, Task center 1",
      "lastExecutedDate": 1449050640000,
      "author": "admin",
      "executedBy": {
        "fullUsername": "Chung Ho",
        "userID": "admin"
      },
      "totalExecutions": 71,
      "lastMonthExecutions": 71,
      "favourite": true
    },
    {
      "name": "Task center 1",
      "lastExecutedDate": 1449050640000,
      "author": "admin",
      "executedBy": {
        "fullUsername": "Chung Ho",
        "userID": "admin"
      },
      "totalExecutions": 21,
      "lastMonthExecutions": 21,
      "favourite": false
    },
    {
      "name": "Task center 1",
      "lastExecutedDate": 1449050640000,
      "author": "admin",
      "executedBy": {
        "fullUsername": "Chung Ho",
        "userID": "admin"
      },
      "totalExecutions": 21,
      "lastMonthExecutions": 21,
      "favourite": false
    },
    {
      "name": "Task center 1",
      "lastExecutedDate": 1449050640000,
      "author": "admin",
      "executedBy": {
        "fullUsername": "Chung Ho",
        "userID": "admin"
      },
      "totalExecutions": 21,
      "lastMonthExecutions": 21,
      "favourite": false
    },
    {
      "name": "Task center 1",
      "lastExecutedDate": 1449050640000,
      "author": "admin",
      "executedBy": {
        "fullUsername": "Chung Ho",
        "userID": "admin"
      },
      "totalExecutions": 21,
      "lastMonthExecutions": 21,
      "favourite": false
    },
    {
      "name": "Task center 1",
      "lastExecutedDate": 1449050640000,
      "author": "admin",
      "executedBy": {
        "fullUsername": "Chung Ho",
        "userID": "admin"
      },
      "totalExecutions": 21,
      "lastMonthExecutions": 21,
      "favourite": false
    },
    {
      "name": "Task center 1",
      "lastExecutedDate": 1449050640000,
      "author": "admin",
      "executedBy": {
        "fullUsername": "Chung Ho",
        "userID": "admin"
      },
      "totalExecutions": 21,
      "lastMonthExecutions": 21,
      "favourite": false
    },
    {
      "name": "Task center 1",
      "lastExecutedDate": 1449050640000,
      "author": "admin",
      "executedBy": {
        "fullUsername": "Chung Ho",
        "userID": "admin"
      },
      "totalExecutions": 21,
      "lastMonthExecutions": 21,
      "favourite": false
    },
    {
      "name": "Task center 1",
      "lastExecutedDate": 1449050640000,
      "author": "admin",
      "executedBy": {
        "fullUsername": "Chung Ho",
        "userID": "admin"
      },
      "totalExecutions": 21,
      "lastMonthExecutions": 21,
      "favourite": false
    }
  ]
};

var tasks = [
  {
    id: 0,
    name: 'Ne',
    description: 'Unclock',
    input: '<div>\n <div class="form-group">\n <label for="a">a</label>\n <input id="a" ng-model="a" class="form-control">\n </div>\n <div class="form-group">\n <label for="b">b</label>\n <input id="b" ng-model="b" class="form-control">\n </div>\n </div>',
    behaviour: 'var parse = this.parseInt;\n var a = parse(params.a, 10);\n var b = parse(params.b, 10);\n callback.call(context, a + b);',
    output: '<div>\n <h3>Result is {{a}}</h3> /n</div>'
  },
  {
    id: 1,
    name: 'Unclock',
    description: 'Unclock',
    input: '<div>\n <div class="form-group">\n <label for="a">a</label>\n <input id="a" ng-model="a" class="form-control">\n </div>\n <div class="form-group">\n <label for="b">b</label>\n <input id="b" ng-model="b" class="form-control">\n </div>\n </div>',
    behaviour: 'var parse = this.parseInt;\n var a = parse(params.a, 10);\n var b = parse(params.b, 10);\n callback.call(context, a + b);',
    output: '<div>\n <h3>Result is {{a}}</h3> /n</div>'
  },
  {
    id: 2,
    name: 'Clock',
    description: 'Unclock',
    input: '<div>\n <div class="form-group">\n <label for="a">a</label>\n <input id="a" ng-model="a" class="form-control">\n </div>\n <div class="form-group">\n <label for="b">b</label>\n <input id="b" ng-model="b" class="form-control">\n </div>\n </div>',
    behaviour: 'var parse = this.parseInt;\n var a = parse(params.a, 10);\n var b = parse(params.b, 10);\n callback.call(context, a + b);',
    output: '<div>\n <h3>Result is {{a}}</h3> \n</div>'
  }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname + '/'));

app.get('/api/tasks', function (req, res) {
  res.json(allTasks);
});

app.get('/api/tasks/:id', function (req, res) {
  res.json(tasks[req.params.id]);
});

app.delete('/api/tasks/:id', function (req, res) {
  if (tasks[req.params.id] == undefined) {
    res.statusCode = 404;
    return res.send('Task ' + req.params.id + ' not found');
  }

  var data = [];

  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id != req.params.id) {
      data.push(tasks[i]);
    }
  }

  console.log(data)
//  delete tasks[req.params.id];
//  res.json(data);
});

app.post('/api/tasks', function (req, res) {
  if (!req.body.hasOwnProperty('name')) {
    res.statusCode = 400;
    return res.send('Error 400: Invalid data.');
  }

  var id = tasks.length;
  tasks[id] = {
    'name': req.body.name,
    'description': req.body.description,
    'behaviour': req.body.behaviour,
    'output': req.body.output,
    'input': req.body.input,
    'status': 0,
    'id': id
  };
  res.json(tasks[id]);
});


//Auth

var currentUser = {};
var users = [
  {
    id: 0,
    username: 'admin',
    password: 'admin',
    mode: 'Administrator'
  },
  {
    id: 1,
    username: 'chungho',
    password: 'chungho',
    mode: 'User'
  }
];

app.get('api/auth/forget', function (req, res) {
  res.clearCookie('remember');
  res.redirect('back');
});

app.get('/api/auth/admin', function (req, res) {
  res.send(true);
});

app.post('/api/auth/login', function (req, res) {

  var result = false;
  var minute = 60 * 1000;

  if (!req.body.hasOwnProperty('username')) {
    res.statusCode = 400;
    return res.send('Error 400: Invalid data.');
  }

  for (var i = 0; i < users.length; i++) {
    if (req.body.username === users[i].username && req.body.password === users[i].password) {
      currentUser = users[i];
      result = true;
      break;
    }
  }

//    if (req.body.remember) res.cookie('remember', users[i].id, { maxAge: minute });
//    res.clearCookie('name', { path: '/admin' });
//  res.cookie('username', '#'+req.body.username+'#');
  res.send(result);

});

app.get('/api/auth/logout', function (req, res) {
  // destroy the user's session to log them out
  // will be re-created next request
  req.session.destroy(function () {
    res.redirect('/');
  });
});

app.get('/api/auth/current-user', function (req, res) {
  // destroy the user's session to log them out
  // will be re-created next request
  res.json(currentUser);
});

//app.get('/', function(req, res){
//  res.redirect('login');
//});

app.all('/*', function (req, res) {
  res.redirect('app/index.html');
});

app.listen(port);
console.log("Angular App Server listening at http://localhost:" + port);