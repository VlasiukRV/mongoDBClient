var express = require("express");
var proxyMiddleware = require('http-proxy-middleware')

var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var devConfig = config.devServer


var app = express()
var compiler = webpack(config)

var port = devConfig.port

app.use(webpackDevMiddleware(compiler, { 
	noInfo: true,
	// server and middleware options
	publicPath: config.output.publicPath 
}))
// Enables HMR
app.use(webpackHotMiddleware(compiler))
// Proxy api requests to api server
if(devConfig.proxy) {
  Object.keys(devConfig.proxy).forEach(function(context) {
    app.use(proxyMiddleware(context, devConfig.proxy[context]));
  });
}

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  }
  
  console.info("==> 🌎  Listening at http://localhost:%s. APP Server start", port)
})