const _ = require('lodash') //ele procura o index.js dentro de node_modules/lodash
setInterval(() => console.log(_.random(1, 1000)), 1000)