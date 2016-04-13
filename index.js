var postcss = require('postcss');

module.exports = postcss.plugin('postcss-flexadapter', function(opts){
  	opts = opts || {};

  	// 匹配所有版本的flex写法，并定义替换规则
    var mappings = {
    	'display': {
    		rule: {
        			   'flex':'display:-webkit-box; display:-moz-box; display:-ms-flexbox; display:-webkit-flex; display:flex',
        			'flexbox':'display:-webkit-box; display:-moz-box; display:-ms-flexbox; display:-webkit-flex; display:flex',
        			    'box':'display:-webkit-box; display:-moz-box; display:-ms-flexbox; display:-webkit-flex; display:flex',
        		'inline-flex':'display:-webkit-inline-flex; display:-moz-inline-flex; display:-ms-inline-flex; display:inline-flex',
        	 'inline-flexbox':'display:-webkit-inline-flexbox; display:-moz-inline-flexbox; display:-ms-inline-flexbox; display:inline-flexbox',
          		 'inline-box':'display:-webkit-inline-box; display:-moz-inline-box; display:-ms-inline-box; display:inline-box'
    		}
    	},
    	'flex-direction': {
    		rule: {
        			    'row':'-webkit-box-orient:horizontal; -moz-box-orient:horizontal; -webkit-box-direction:normal; -moz-box-direction:normal; -webkit-flex-direction:row; -moz-flex-direction:row; flex-direction:row',
        		'row-reverse':'-webkit-box-orient:horizontal; -moz-box-orient:horizontal; -webkit-box-direction:reverse; -moz-box-direction:reverse; -webkit-flex-direction:row-reverse; -ms-flex-direction:row-reverse; flex-direction:row-reverse',
        			 'column':'-webkit-box-orient:vertical; -moz-box-orient:vertical; -webkit-box-direction:normal; -moz-box-direction:normal; -webkit-flex-direction:column; -ms-flex-direction:column; flex-direction:column',
        	 'column-reverse':'-webkit-box-orient:vertical; -moz-box-orient:vertical; -webkit-box-direction:reverse; -moz-box-direction:reverse; -webkit-flex-direction:column-reverse; -ms-flex-direction:column-reverse; flex-direction:column-reverse'
    		}
    	},
        'flex-wrap': {
            rule:{
                     'nowrap':'-webkit-box-lines:single; box-lines:single; flex-wrap:-webkit-nowrap; flex-wrap:-ms-nowrap; flex-wrap:nowrap',
                       'wrap':'-webkit-box-lines:multiple; box-lines:multiple; flex-wrap:-webkit-wrap; flex-wrap:-ms-wrap; flex-wrap:wrap',
               'wrap-reverse':'-webkit-flex-wrap:wrap-reverse; -ms-flex-wrap:wrap-reverse; flex-wrap:wrap-reverse'
            }
        },
        'flex-flow': {
            rule:{
                 'row nowrap':'-webkit-flex-flow:row nowrap; -ms-flex-flow:row nowrap; flex-flow:row nowrap',
                   'row wrap':'-webkit-flex-flow:row wrap; -ms-flex-flow:row wrap; flex-flow:row wrap',
           'row wrap-reverse':'-webkit-flex-flow:row wrap-reverse; -ms-flex-flow:row wrap-reverse; flex-flow:row wrap-reverse',
         'row-reverse nowrap':'-webkit-flex-flow:row-reverse nowrap; -ms-flex-flow:row-reverse nowrap; flex-flow:row-reverse nowrap',
           'row-reverse wrap':'-webkit-flex-flow:row-reverse wrap; -ms-flex-flow:row-reverse wrap; flex-flow:row-reverse wrap',
   'row-reverse wrap-reverse':'-webkit-flex-flow:row-reverse wrap-reverse; -ms-flex-flow:row-reverse wrap-reverse; flex-flow:row-reverse wrap-reverse',
              'column nowrap':'-webkit-flex-flow:column nowrap; -ms-flex-flow:column nowrap; flex-flow:column nowrap',
                'column wrap':'-webkit-flex-flow:column wrap; -ms-flex-flow:column wrap; flex-flow:column wrap',
        'column wrap-reverse':'-webkit-flex-flow:column wrap-reverse; -ms-flex-flow:column wrap-reverse; flex-flow:column wrap-reverse',
      'column-reverse nowrap':'-webkit-flex-flow:column-reverse nowrap; -ms-flex-flow:column-reverse nowrap; flex-flow:column-reverse nowrap',
        'column-reverse wrap':'-webkit-flex-flow:column-reverse wrap; -ms-flex-flow:column-reverse wrap; flex-flow:column-reverse wrap',
'column-reverse wrap-reverse':'-webkit-flex-flow:column-reverse wrap-reverse; -ms-flex-flow:column-reverse wrap-reverse; flex-flow:column-reverse wrap-reverse'
            }
        },
        'justify-content': {
            rule:{
                 'flex-start':'-webkit-box-pack:start; -moz-box-pack:start; -ms-flex-pack:start; -webkit-justify-content:flex-start; justify-content:flex-start',
                   'flex-end':'-webkit-box-pack:end; -moz-box-pack:end; -ms-flex-pack:end; -webkit-justify-content:flex-end; justify-content:flex-end',
                     'center':'-webkit-box-pack:center; -moz-box-pack:center; -ms-flex-pack:center; -webkit-justify-content:center; justify-content:center',
              'space-between':'-webkit-box-pack:justify; -moz-box-pack:justify; -ms-flex-pack:justify; -webkit-justify-content:space-between; justify-content:space-between',
               'space-around':'-webkit-box-pack:justify; -moz-box-pack:justify; -ms-flex-pack:distribute; -webkit-justify-content:space-around; justify-content:space-around'
            }
        },
        'align-items': {
            rule:{
                 'flex-start':'-webkit-box-align:start; -moz-box-align:start; -ms-flex-align:start; -webkit-align-items:flex-start; align-items:flex-start',
                   'flex-end':'-webkit-box-align:end; -moz-box-align:end; -ms-flex-align:end; -webkit-align-items:flex-end; align-items:flex-end',
                     'center':'-webkit-box-align:center; -moz-box-align:center; -ms-flex-align:center; -webkit-align-items:center; align-items:center',
                   'baseline':'-webkit-box-align:baseline; -moz-box-align:baseline; -ms-flex-align:baseline; -webkit-align-items:baseline; align-items:baseline',
                    'stretch':'-webkit-box-align:stretch; -moz-box-align:stretch; -ms-flex-align:stretch; -webkit-align-items:stretch; align-items:stretch'
            }
        },
        'align-content': {
            rule:{
                 'flex-start':'-ms-flex-line-pack:start; flex-line-pack:start; -webkit-align-content:flex-start; align-content:flex-start',
                   'flex-end':'-ms-flex-line-pack:end; flex-line-pack:end; -webkit-align-content:flex-end; align-content:flex-end',
                     'center':'-ms-flex-line-pack:center; flex-line-pack:center; -webkit-align-content:center; align-content:center',
              'space-between':'-ms-flex-line-pack:justify; flex-line-pack:justify; -webkit-align-content:space-between; align-content:space-between',
               'space-around':'-ms-flex-line-pack:distribute; flex-line-pack:distribute; -webkit-align-content:space-around; align-content:space-around',
                    'stretch':'-ms-flex-line-pack:stretch; flex-line-pack:stretch; -webkit-align-content:stretch; align-content:stretch'
            }
        },
        'align-self': {
            rule:{
                       'auto':'-webkit-flex-item-align:auto; -ms-flex-item-align:auto; flex-item-align:auto; -webkit-align-self:auto; -ms-align-self:auto; align-self:auto',
                       'flex-start':'-webkit-flex-item-align:start; -ms-flex-item-align:start; flex-item-align:start; -webkit-align-self:flex-start; -ms-align-self:flex-start; align-self:flex-start',
                       'flex-end':'-webkit-flex-item-align:end; -ms-flex-item-align:end; flex-item-align:end; -webkit-align-self:flex-end; -ms-align-self:flex-end; align-self:flex-end',
                       'center':'-webkit-flex-item-align:center; -ms-flex-item-align:center; flex-item-align:center; -webkit-align-self:center; -ms-align-self:center; align-self:center',
                       'baseline':'-webkit-flex-item-align:baseline; -ms-flex-item-align:baseline; flex-item-align:baseline; -webkit-align-self:baseline; -ms-align-self:baseline; align-self:baseline',
                       'stretch':'-webkit-flex-item-align:stretch; -ms-flex-item-align:stretch; flex-item-align:stretch; -webkit-align-self:stretch; -ms-align-self:stretch; align-self:stretch'
            }
        },
        // 数字形式复制赋值，声明为num
        'order': {
            rule:{
                        'num':'-webkit-flex-order:; -ms-flex-order:; flex-order:; -webkit-order:; order:'
            }
        },
        'flex-order': {
            rule:{
                        'num':'-webkit-flex-order:; -ms-flex-order:; flex-order:; -webkit-order:; order:'
            }
        },
        'flex-grow': {
            rule:{
                        'num':'-webkit-box-flex:; -moz-box-flex:; -webkit-flex-grow:; -ms-flex-grow:; flex-grow:'
            }
        },
        'box-flex': {
            rule:{
                        'num':'-webkit-box-flex:; -moz-box-flex:; -webkit-flex-grow:; -ms-flex-grow:; flex-grow:'
            }
        },
        'flex': {
            rule:{
                        'num':'-webkit-box-flex:; -moz-box-flex:; -webkit-flex-grow:; -ms-flex-grow:; flex-grow:'
            }
        },
        'flex-shrink': {
            rule:{
                        'num':'-webkit-flex-shrink:; flex-shrink:'
            }
        },
        'flex-basis': {
            rule:{
                        'num':'-webkit-flex-basis:; flex-basis:'
            }
        }
    }

    return function (css, result) {
        css.walkDecls(function (decl) {
        	var FLAGS_IS_NUM = false, parent = decl.parent, _decl = decl, end_child_index = 0;
        	// 匹配并修改属性
            if ( decl.prop in mappings ) {
	        	// 过滤重复值
	    		parent.walkDecls(decl.prop,function(_decl){
	    			end_child_index = parent.index(_decl);
	    		});

	        	_decl.prop = postcss.vendor.unprefixed(parent.nodes[end_child_index].prop);
	        	_decl.value = postcss.vendor.unprefixed(parent.nodes[end_child_index].value);
	        	
                // 判断是否值为数字
                FLAGS_IS_NUM = ((typeof mappings[_decl.prop].rule['num'])== "undefined")?false:true;

	            if ( _decl.value in mappings[_decl.prop].rule || FLAGS_IS_NUM ) {
            		var prop_ary, _prop ,_val;

                    if(!FLAGS_IS_NUM){
                        prop_ary = mappings[_decl.prop].rule[_decl.value].replace(/(^\s+)|(\s+$)/g,'').split(';');
                    }
                    else{
                        prop_ary = mappings[_decl.prop].rule['num'].replace(/(^\s+)|(\s+$)/g,'').split(';');
                    }

                    // 过滤重复值
                    parent.walkDecls(_decl.prop,function(_mydecl){
                        _mydecl.remove();
                    });
                    for(var i = prop_ary.length-1; i > -1; i--){
                        _prop = prop_ary[i].split(':')[0];
                        if(FLAGS_IS_NUM){
                            _val = _decl.value;
                        }
                        else{
                            _val = prop_ary[i].split(':')[1];
                        }
	                	parent.prepend({prop: _prop, value: _val});
            		}
	            }
        	}
        });
    };
});