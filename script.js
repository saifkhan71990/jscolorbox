
/*box Content*/

function onclickfun1()
{
    document.getElementById('box1').style.border="red"
    document.getElementById('box1').style.background="red"
         
}


function onclickfun2()
{    
    document.getElementById('box2').style.border="blue"
    document.getElementById('box2').style.background="blue"
       
}

function onclickfun3()
{    
    document.getElementById('box3').style.border="green"
    document.getElementById('box3').style.background="green"
        
}


function onclickfun4()
{    
    document.getElementById('box4').style.border="yellow"
    document.getElementById('box4').style.background="yellow"
       
}



const myBox1=document.getElementById('box1');
const myBox2=document.getElementById('box2');
const myBox3=document.getElementById('box3');
const myBox4=document.getElementById('box4');

myBox1.addEventListener('click',onclickfun1);
myBox2.addEventListener('click',onclickfun2);
myBox3.addEventListener('click',onclickfun3);
myBox4.addEventListener('click',onclickfun4);




/*form Content*/


function onbtnclick() {
  const name = document.getElementById('user').value;

  if (name === "") {
    document.getElementById("herdertext").innerText = "Hello";
  } else {
    document.getElementById("herdertext").innerText = "Hello, " + name;
  }
}




    
  



function cleartext()
{
    document.getElementById('user').value="";
   
}


const myButton=document.getElementById('mybtn');
myButton.addEventListener('click',onbtnclick);
myButton.addEventListener('click',cleartext);
