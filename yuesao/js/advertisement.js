/*广告轮播*/
window.onload=function()
{
	var oDiv= document.getElementById('div1');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var speed=-1;
	
	oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
	oUl.style.height=aLi[0].offsetHeight*aLi.length+'px';
	function move(){
		if( oUl.offsetTop<-oUl.offsetHeight/2)
		  {  oUl.style.top='0'}
		if(oUl.offsetTop>0)
		{ oUl.style.top=-oUl.offsetHeight/2+'px'}
		oUl.style.top=oUl.offsetTop+speed+'px';
		}
	var timer=setInterval(move,30)
		oDiv.onmouseover=function()
		{
			clearInterval(timer);
		};
		oDiv.onmouseout=function()
		{
			timer=setInterval(move,30);
		}

}