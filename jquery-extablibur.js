(function($){
	var defaults = {
		column   : 1, //TODO what about multiple columns
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
				   this.table.find("tbody tr").each(function(){
					   console.log($(this).text());
					   var td = $(($(this).find('td')[_this.options.column]));
					   var fulltext = td.text();
					   td.html(fulltext.substr(0,5)+"<span class='ext_longtd ext_longtd_h'>"+fulltext.substr(5,fulltext.length)+"</span>");
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
