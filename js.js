// JavaScript Document

flag = 0;
function openpara(val)
{
form.screen.value+=val;
flag+=1;
}
function closepara(valval)
{
form.screen.value+=valval;
flag-=1;
}
function backspace(form)
{
var size = form.screen.value.length;
form.screen.value=form.screen.value.substring(0,size-1);
}
function Resetfunction(form)
{
form.screen.value=" ";
form.screen2.value=" ";

flag=0;
}

function factorial(num)
{
	
   
    if (num < 0) {
        return -1;
    }
    
    else if (num == 0) {
        return 1;
    }
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    return tmp;
}
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

function fac(p){
	d=reverse(p);	
 m=d.lastIndexOf("!")
 	
	if(p.indexOf("(")>=0 || p.indexOf(")")>=0){
		p=p.replace(/\(/, "");
		p=p.replace(/\)/, "");
		p=p.trim();
		return p;
	}
	
	p=p.trim();
	q=p.length;


for(var b=m+1; b<d.length;){
	if(!isNaN(d.charAt(b))){
			b++;
	}
	else{break;}
}
h=d.slice(m+1,b);
fis=p.substr(0,q-b);
las=p.substr(q-m,q-1);
h=reverse(h);
	f=factorial(h);
	c=p.slice(q-(b-1),q-m);
	c=c.replace(/!/gi, f);
	final=fis + c + las;
	
	if(final.indexOf("!")>=0){
			
			return(final=fac(final));
			
	}
	else{
	return final.toString();}
}

function power(p){
	if(p.indexOf("(")>=0 || p.indexOf(")")>=0){
		p=p.replace(/\(/, "");
		p=p.replace(/\)/, "");
		p=p.trim();
		
		
		return p;
	}
	
	p=p.trim();
	q=p.length;
d=reverse(p);	
 m=d.lastIndexOf("^")

for(var b=m+1; b<d.length;){
	if(!isNaN(d.charAt(b))||d.charAt(b)=="+"||d.charAt(b)=="-"||d.charAt(b)=="/"||d.charAt(b)=="*"||d.charAt(b)=="."){
			b++;
	}
	else{break;}
}
for(var j=q-m; j<p.length;){
	if(!isNaN(p.charAt(j))){
			j++;
	}
	else{break;}
}
fis1=q-(m+1);
las1=q-m;
h=d.slice(m,m+1);
fis=p.substring(q-b, fis1);
las=p.substring(las1, j);
if(fis=eval(fis)){
		dap=Math.pow(fis,las);
		return dap.toString();		
		}
		else {
dap=Math.pow(fis,las);}

	c=p.slice(q-(b-1),q-m);
	c=c.replace(/\^/gi, dap);
	final=fis + h + las;
	final=p.replace(final,dap);
	if(final.indexOf("^")>=0){
			
		return(final=power(final));
			
	}
	else{
	return final.toString();}
}

function degree(k){
	degrees = eval(k) * (180/Math.PI)
	return degrees;
}

function angle(p){
	q=p.length;
d=reverse(p);	
 m=d.indexOf("(")
 if(d.indexOf(d.charAt(m))==q-1){
	 return p;
 }
else{
for(var b=m+1; b<d.length;){
	if(!isNaN(d.charAt(b))){
			b++;
	}
	else{break;}
}
for(var j=q-m; j<p.length;){
	if(!isNaN(p.charAt(j))||p.charAt(j)=="+" ||p.charAt(j)=="-" || p.charAt(j)=="*" ||p.charAt(j)=="/" ||p.charAt(j)=="." ){
			j++;
	}
	else{break;}
}
fis1=q-(m+1);
las1=q-m;
h=d.slice(m,m+1);
fis=reverse(d.substring(m+1, m+4));
las=p.substring(las1, j);
dap=radian(las);

	f=fis + h + las + ")";
	g=fis + h + dap + ")";
	if(f.indexOf("cos(")>=0){
		gap=g.replace(/cos\(/gi,"Math.cos(");
		gap=eval(gap);	
	}
	if(f.indexOf("sin(")>=0){
		gap=g.replace(/sin\(/gi,"Math.sin(");
		gap=eval(gap);	
	}
	if(f.indexOf("tan(")>=0){
		gap=g.replace(/tan\(/gi,"Math.tan(");
		gap=eval(gap);	
	}
	final=p.replace(f,gap);
	if(final.indexOf("(")>=0){
			
			return(final=angle(final));
			
	}
	else{
	
	return final.toString();}}
}

function radian(k){
	radians = eval(k) * (Math.PI/180)
	return radians;
}

function arch(p){
	q=p.length;
d=reverse(p);	
 m=d.lastIndexOf("(")

for(var b=m+1; b<d.length;){
	if(!isNaN(d.charAt(b))){
			b++;
	}
	else{break;}
}
for(var j=q-m; j<p.length;){
	if(!isNaN(p.charAt(j))){
			j++;
	}
	else{break;}
}
indi=p.indexOf(")");
fis1=q-(m+1);
las1=q-m;
h=d.slice(m,m+1);
fis=reverse(d.substring(m+1, m+6));
las=p.substring(las1, indi);
//dap=Math.acos(las);
//dap=degree(dap);
	f=fis + h + las + ")";
	if(f.indexOf("cos−¹(")>=0){
		dap=Math.acos(las);
		dap=degree(dap);	
	}
	if(f.indexOf("sin−¹(")>=0){
		dap=Math.asin(las);
		dap=degree(dap);	
	}
	if(f.indexOf("tan−¹(")>=0){
		dap=Math.atan(las);
		dap=degree(dap);	
	}
	
	final=p.replace(f,dap);
	if(final.indexOf("(")>=0){
			
			return(final=arch(final));
			
	}
	else{
	
	return final.toString();}
}


function evaluation(form)
{
var n = form.screen.value;
	n=n.trim();
var size = form.screen.value.length;
var lastchar = form.screen.value.charAt(size)
if(isNaN(lastchar) && lastchar!=")" && lastchar!="!")   {form.screen.value="syntax error";}
/*else if(flag!=0){form.screen.value="error:paranthesis";}*/
else if(form.screen.value==null){form.screen.value=" ";}
else {
	for(i=0; i<=n.length; i++){
	
	
	if(n.indexOf("cos(")>=0){
		n=angle(n);
		n=n.replace(/cos\(/gi,"Math.cos(");
		
	}
	if(n.indexOf("sin(")>=0){
		n=angle(n);
		n=n.replace(/sin\(/gi,"Math.sin(");
		
	}
	if(n.indexOf("tan(")>=0){
		n=angle(n);
		n=n.replace(/tan\(/gi,"Math.tan(");
		
	}
	if(n.indexOf("cos−¹(")>=0){
		n=arch(n);
		//n=n.replace(/cos−ⁱ\(/gi,"Math.acos(");
		
	}
	if(n.indexOf("sin−¹(")>=0){
		n=arch(n);
		//n=n.replace(/sin−¹\(/gi,"Math.asin(");
		
	}
	if(n.indexOf("tan−¹(")>=0){
		n=arch(n);
		//n=n.replace(/tan−¹\(/gi,"Math.atan(");
		
	}
	
	if(n.indexOf("log(")>=0){
		n=n.replace(/log\(/gi,"Math.log10(");
		
	}
	if(n.indexOf("!")>=0){
			
			n=fac(n).toString();
			
	}
	if(n.indexOf("π")>=0){
		n=n.replace(/π/gi,"Math.PI");
		
	}
	if(n.indexOf("^")>=0){
		n=power(n); 
		
	}
	
	if(n.indexOf("ANS")>=0){
		n=n.replace(/ANS/gi, ANS);
		form.screen2.value= ANS;
	}
	if(n.indexOf("√(")>=0){
		n=n.replace(/√\(/gi,"Math.sqrt(");
		
	}
	if(n.indexOf("Eⁿ(")>=0){
		n=n.replace(/Eⁿ\(/gi,"Math.exp(");
		
	}
	
	
	
	
	}
var result=eval(n);
ANS=result;
form.screen2.value=result;
//form.screen.value=" ";
}
}