
$(window).load(function(){
	var ah1a=$('#lists').find('.a_list');
	var a_click=$('#lists').find('a').not('.a_list');
	
	a_click.click(function(){
		a_click.removeAttr('style');
		$(this).css({'color':'red'});
	});
	ah1a.toggle(function(){
		var _this=$(this);
		$(this).parent().next().css({'height':'auto'});
		this.oHeight=parseInt($(this).parent().next().css('height'));
		$(this).parent().next().css({'height':'0px'});
		
		$(this).parent().next().animate({'height':this.oHeight},function(){
			_this.css('background-image','url("images/jian.png")');
		});
	},function(){
		var _this=$(this);
		$(this).parent().next().animate({'height':0},function(){
			_this.css('background-image','url("images/jia.png")');
		});
	});
	$(document).bind('contextmenu',function(){
		return false;
	});
});
$(window).load(function(){
	var oGet=window.location.search;
	if(oGet){
		var arr_oGet=oGet.split("=");
		var url_arr=decodeURI(arr_oGet[1]);
		$('.dh_list').find('.a_list').hide();
		var alists=$('#lists').find('a').not('.a_list');
		alists.hide();
		alists.each(function(){
			if($(this).text().indexOf(url_arr)!=-1){
				$(this).parent().css({'height':'auto'});
				$(this).show();
				$(this).css({'backgroundPosition':'2px 3px','textIndent':'0px'});
			}
		});
	}
	$('#shouye').click(function(){
		window.location.href='list.htm'
	});
});
function play(play_id){
	var get_id=play_id.split('=');
	if(get_id[0]=='web'){
		window.top.frames['play'].location.href='web/'+get_id[1]+'.htm';
        }else if(get_id[0]=='p'){
                 window.top.frames['play'].location.href='http://10yy.win/emlog/post-/'+get_id[1]+'.html';
        }else if(get_id[0]=='yk'){
                 window.top.frames['play'].location.href='http://10yy.win/s/?url=http://v.youku.com/v_show/id_'+get_id[1]+'.html';
        }else if(get_id[0]=='qy'){
                 window.top.frames['play'].location.href='http://10yy.win/s/?url=http://www.iqiyi.com/v_'+get_id[1]+'.html';
        }else if(get_id[0]=='kj'){
                 window.top.frames['play'].location.href=get_id[1];
        }else if(get_id[0]=='yy'){
                 window.top.frames['play'].location.href='http://play.10yy.win/player/cmp.swf?auto_play=1&skin_id=2&src=http://link.hhtjim.com/'+get_id[1]+'.mp3';
	}else{
		window.top.frames['play'].location.href='xplay.htm?'+play_id;
	}
}