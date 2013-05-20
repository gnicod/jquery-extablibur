(function($){
	var defaults = {
		toShrink : [],
		callback : function(data,json){
		}
};

function Extablibur(element,options){
	this.options = $.extend( {}, defaults, options );
	this._defaults = defaults;
	this.table = element;
	this._name = "extablibur";
	this.init();		   
}

Extablibur.prototype = {
	init : function(){
			   _this = this;
			   var _j = 0;
			   this.table.find('th').each(function(){
				   if($(this).attr('data-shrink')!==undefined){
					   shval = $(this).attr('data-shrink');
					   _this.options.toShrink.push([_j,shval]);
				   }
				   _j ++;
			   });

			   this.table.find("tbody tr").each(function(){
				   for(var i=0;i<_this.options.toShrink;i++){
					   var tabShrink = _this.options.toShrink[i];
					   var col   = tabShrink[0];
					   var shval = tabShrink[1];
					   var td = $(($(this).find('td')[col]));
					   var fulltext = td.text();
					   td.html(fulltext.substr(0,shval)+"<span class='ext_longtd ext_longtd_h'>"+fulltext.substr(shval,fulltext.length)+"</span>");
				   }
			   });
		   },

	expand : function(){
				 this.table.find('.ext_longtd').removeClass('ext_longtd_h');
			 },

	shrink : function(){
				 this.table.find('.ext_longtd').addClass('ext_longtd_h');
			 }
};

$.fn.extablibur = function (options) {
	var ret = null;
	this.each(function () {
		ret = new Extablibur($(this), options);
	});
	return ret;
};
}(window.jQuery));
