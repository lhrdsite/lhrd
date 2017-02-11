(function(){

	window.onload=function(){
	    
	    
	/***
	 *函
	 *数
	 *库
	 *开始——————————————————————————————————————————————————————————————————————
	***/	
        /*函数名带_下划线的函数均内置事件绑定*/
	    /*设置global.x为切换状态标记符*/
	    var global={};
		/*全局变量*/
		global.x=0;global.y=0;global.z=0;global.k=0;global.j=0;
	
/*函数一(show_hidden)------显示隐藏输入框*/	
		function show_hidden(arg){
			var h=arguments;
			document.getElementById(h[0]).onclick=function(){
				/***
	             *下面
	             *第一行
	             *扩展函数
	            ***/
				
				eval(h[h.length-1]); 
				
				if(global.x===1){
					for(var i=1;i<h.length-2;i++){
						if(i%2!==0){
						document.getElementById(h[i]).style.display="none";
						}
					}
					global.x=0;
				}else{
					for(var k=1;k<h.length-2;k++){
						if(k%2!==0){
						    var y=k+1;
							document.getElementById(h[k])
							.style.display=h[y];
						}
					}
					global.x=1;
				}
			}
		}
			
/*函数二(change)------show_hidden函数的参数（函数）---改变按钮的名称（添加/保存）*/		
		function change(nis){
			if(global.x===0){
				document.getElementById(arguments[0]).
			    innerHTML=arguments[1];
			}else{
				document.getElementById(arguments[0]).
				innerHTML=arguments[2];
			}
				
		}
			
/*函数三（get_address）------获取文件的地址 return_address */
        function get_address(){
			var lkl=document.getElementsByClassName(arguments[0]);
			lkl[0].onchange=function(){
				global.y=lkl[0].value;
			}	
		}
		
/*函数四（submit_file）-------上传图片*/
        function submit_file(){
			var x=document.getElementsByClassName(arguments[0]);
			var hj=arguments[1];
			x[0].onclick=function(){
				if(global.y!=0){ 
				    global.j=global.j+1;
					if(global.j===1)
						{view_photo("album_one"); }
					else if(global.j===2)
						{view_photo("album_two");}
					else if(global.j===3)
						{view_photo("album_three");}
					else{alert("相框已用完！")}	
				}else{alert("\n   请选择图片!\n")}
			}
		 }
		 
/*函数五（view_photo）-------放大镜图片---submit_file的子集函数.（四）*/
        function view_photo(arg){
		  var jjj=document.getElementById(arguments[0]);
		  var hch=document.getElementById("kuang");
		  var kkk=arguments[0];
		  var i=global.y.split("\\");
					var z=document.getElementById("dizhi").value;
					if(z){hk=z+"\\";}else{hk=z;}
					jjj.innerHTML="<img  src='"+hk+i[i.length-1]+"'\/>";
		   lsl=function (){ 
			    if(!global.k){
			    var yk=document.getElementById("yemu");
				var lkk=document.getElementById("tuce");
				lkk.style.display="table";
				yk.style.display="block";
				

				var fg=(window.getComputedStyle(yk,null).opacity*10+1)/10;
				if(fg<0.9)
				    { var xx=fg.toString();yk.style.opacity=xx;
					      yy=(fg*10+2)/10;jj=yy.toString();
						  xkl[0].style.opacity=jj;}
			    else
				    {clearInterval(gh);}
					}
			}
			var xkl=document.getElementById("kuang")
					      .getElementsByTagName("img");	
			var xk=document.getElementById(arguments[0])
					      .getElementsByTagName("img");	
			
			xk[0].onclick=function(){
				   global.k=0;
				   setInterval(lsl,10);
				  var x=document.getElementsByClassName("background_tong");
				  x[0].style.border="none";
				  x[0].style.opacity="0.3";
				  x[1].style.border="none";
				  x[1].style.opacity="0.3";
				  x[2].style.border="none";
				  x[2].style.opacity="0.3";
				  jjj.style.border="3px #0F0 solid";
				  jjj.style.opacity="1";
				  jsj=hch.getElementsByTagName("img");
				  hch.innerHTML=jjj.innerHTML+'<p id="close">关闭<\/p>';
				  jsj[0].style.opacity="1";
				  close_photo(kkk);//函数六
				}
				   
		    
        }
		 	
/*函数六（close_photo）-------关闭图片---view_photo的子集函数.（五）*/
        function close_photo(){
			
			var x=document.getElementById('close');
			var yk=document.getElementById('yemu');
			var lkk=document.getElementById('tuce');
			var xk=document.getElementById(arguments[0])
					      .getElementsByTagName("img");
			var jjj=document.getElementById(arguments[0]);
			x.onclick=function(){
				lkk.style.display="none";
				yk.style.display="none";
				yk.style.opacity="0.1";
				
				var xa=document.getElementsByClassName("background_tong");
				xa[0].style.border="none";
				xa[0].style.opacity="1";
				xa[1].style.border="none";
				xa[1].style.opacity="1";
				xa[2].style.border="none";
				xa[2].style.opacity="1";
				var xkl=document.getElementById("kuang")
					      .getElementsByTagName("img");	
				xkl[0].style.opacity="0.2";
				global.k=1;
				
			}
		}
		

    
	/***
	 *结束————————————————————————————————————————————————————————————————————————
	 *函
	 *数
	 *库
	***/			 
		
		
	    get_address("load_file");
		
	    show_hidden("add","git","inline","fuck",
		"inline-block","she","block",
		"change('add','保存&nbsp;&radic;','添加&nbsp;+')");
		{submit_file("btn_submit","dizhi");}
		document.getElementById("reset")
		.onclick=function(){global.y=0;};
		
		
		
	}

}());