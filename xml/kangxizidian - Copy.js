﻿console.log(require('yase').build({
	dbid:'kangxizidian',
	blockshift:7,
	schema:function() {
		this.toctag(["wh"])
		      .emptytag("pb").attr("pb","id",{"depth":1,"saveval":true})
		      .emptytag("sc").attr("sc","n",{"depth":1,"allowrepeat":true})
		      .emptytag(["d","ph"])
		      .newslot(["d","ph","zy"])
			  .attr("xml","src",{"allowrepeat":false})
			  .attr("wh","wid",{"allowrepeat":true,"saveval":true})
	},
	extra: {
		decompose: require('./decompose_kangxi.js')
	},
	min_yase_version:'0.0.16',
	input:'kangxizidian.lst',
	output:'../kangxizidian.ydb',
	author:'chipanwang@gmail.com',
	url:'http://www.ksana.tw',
	version:'0.0.2',
	outputencoding:'ucs2',
	blob: { 'images' : './images'},
	//maxfile:1
}));