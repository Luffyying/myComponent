  function Elem(obj){
	    	this.obj = obj;
	    	this.disx = 0;
	    	this.dixy = 0;
	    }
	    Elem.prototype.go= function(){
            this.obj.onmousedown=function(e){
            	e=e|| window.event;
	            this.disx = e.clientX-this.offsetLeft;
				this.disy = e.clientY-this.offsetTop;
				div.onmousemove = function(e){
					e=e|| window.event;
		            this.style.left = e.clientX - this.disx + 'px';
		            this.style.top = e.clientY - this.disy+ 'px';
		        }
		        div.onmouseup =function(e){
		        	e=e|| window.event;
		            this.onmousemove = null;
		            this.onmouseup = null;
		        }	
           }
	    }
	    var div=document.getElementById('div1');