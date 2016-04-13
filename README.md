#postcss-flexadapter

[![NPM](https://nodei.co/npm/postcss-flexadapter.png)](https://nodei.co/npm/postcss-flexadapter/)

##Introduce
一款基于Postcss的gulp插件，用于兼容flexbox的所有新旧版本属性。编码时只需要使用最新的flexbox属性，之后通过该工具的转化会把对应flexbox属性的对应历史属性都补全，兼容各浏览器的呈现。注意，该插件只会对flexbox相关属性处理，其他属性一律不变。

例如，编码时（开发）：
```css
display:flex;
```

实用工具后（发布）：
```css
display: -webkit-inline-box;
display: -moz-inline-box;
display: -ms-inline-box;
display: inline-box;
```

同时，工具会自动去重，并且能够智能识别前缀，因此是否有前缀都能正常处理，例如：

```css
-webkit-display:flexbox;
-ms-display:box;
display:flex;
```

这两个属性都是属于不同时期不同浏览器前缀的兼容，在插件处理后将会被当作同一个属性处理，因此结果只会生成一样的：

```css
display: -webkit-inline-box;
display: -moz-inline-box;
display: -ms-inline-box;
display: inline-box;
```

##QuickUse
提供了[test.css](https://github.com/targetkiller/postcss-flexadapter/blob/master/test.css)作为测试文件。

提供了[Mac版绿色GUI客户端](http://pan.baidu.com/s/1o8Sswau)，即装即用不需要gulp命令行。

提供了[PC版绿色GUI客户端](http://pan.baidu.com/s/1dEXemel)，即装即用不需要gulp命令行。

##Install
当然，你需要先安装[gulp](http://gulpjs.com/)和gulp-postcss。

```js
$ npm install --global gulp
$ npm install --save-dev gulp-postcss
```

然后安装插件。

```js
//全局安装
$ npm install --global postcss-flexadapter

//局部安装
$ npm install --save-dev postcss-flexadapter
```

记得同时检查插件是否已经安装对应依赖，若没有请`cd postcss-flexadapter`，然后`npm install`其依赖。

##Usage

```js
var postcss = require('postcss');
var flexadapter = require('postcss-flexadapter');

gulp.task('default', function() {
	var processors = [
		flexadapter
  	];
	gulp.src('test.css')
	    .pipe(postcss(flexadapter))
	    .pipe(gulp.dest('build/'));
});
```