console.log('Loaded!');
confirm("hello");
prompt("wanna join black knights?");

/*var element= document.getElementById('main-text');
element.innerHTML= "New value";

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
  marginLeft=marginLeft+1;
  img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};*/
var button=document.getElementById('counter');
button.onclick=function(){
//create a request object
var request= new XMLHttpRequest();
//create a request
//capture the request and store it to some variable
request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE){
        //take some action
        if(request.status===200){
            var counter=request.responseText;
            var span=document.getElementById('count');
span.innerHTML=counter.toString();
        }
        
        
    }
    //not done yet
    };
    //make the request
    request.open('GET','http://vaishaliagarwal2010.imad.hasura-app.io/counter',true);
    request.send(null);

};

// submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
    //make a request to the server and send the name
    
    //capture a list of names and render it as a list
    
    var names=['Lelouch','C.C','Kallen','Ohgi'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list+="<li>"+names[i]+"</li>";
        
    }
    var ul=document.getElementById('namelist');
    ul.innerHTMl=list;
};

