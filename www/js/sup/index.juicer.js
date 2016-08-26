define(['juicer'], function(juicer) {
  var template = juicer.template, templates = juicer.templates = juicer.templates || {};
templates['index.juicer.html'] = function(_, _method) {_method = juicer.options._method;
'use strict';var _=_||{};var _out='';_out+=''; try { _out+=''; var user=_.user;var div=_.div;var span=_.span;var strong=_.strong;var qweqwe=_.qweqwe;var hello=_.hello;var helloqwe=_.helloqwe; _out+='<div>   ';_out+= _method.__escapehtml.escaping(_method.__escapehtml.detection(user.name)) ;_out+='   <span><strong>qweqwe</strong>';_out+= _method.__escapehtml.escaping(_method.__escapehtml.detection(user.pass)) ;_out+='</span>   <hello>helloqwe权威</hello> </div>'; } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} _out+='';return _out;
};
});