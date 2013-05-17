(function($){
	var defaults = {
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
				   this.table.find("tbody tr").each(function(){
					   console.log($(this).text());
					   var td = $(($(this).find('td')[5]));
					   var fulltext = td.text();
					   td.html(fulltext.substr(0,5)+"<span class='ext_longtd ext_longtd_h'>"+fulltext.substr(5,fulltext.length)+"</span>");
				   });
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
