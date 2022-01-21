const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/car",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7155',
        secure: false
    });

    app.use(appProxy);
};
