if (process.env.NODE_ENV === 'productiction') {
    module.exports = require('./Root.prod');
} else {
    module.exports = require('./Root.dev');
}