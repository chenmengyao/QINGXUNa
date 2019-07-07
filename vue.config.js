//const mockdata = require('./public/mock/form.json');
//const _Ip="http://192.168.0.104:8081";
const _Ip="http://139.155.113.181:80";
module.exports = {
	devServer: {
         proxy: _Ip
	}
}