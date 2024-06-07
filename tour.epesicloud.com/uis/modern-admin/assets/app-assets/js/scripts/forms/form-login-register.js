$(document).ready(function(){'use strict';if($("form.form-horizontal").attr("novalidate")!=undefined){$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();}
if($('.chk-remember').length){$('.chk-remember').iCheck({checkboxClass:'icheckbox_square-blue',radioClass:'iradio_square-blue',});}
var $year=new Date().getFullYear();$(".year").text($year);});