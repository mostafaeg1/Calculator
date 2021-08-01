let firstoperand="0";
let secondoperand="";
let number="0";
let dicimaPoint=false;
let currentOp="";
let upperScreen=document.getElementById("user-input");
let lowerScreen=document.getElementById("result-screen");

////////////// digits keys ///////////////
let digits=document.getElementsByClassName("digits");
for(let i=0;i<digits.length;i++)
{
    digits[i].addEventListener("click",(e) => {
        appendNumber(e.target.value);
    })
}

function appendNumber(num)
{
    if(number !=="0")
    {
        number+=num;
    }
    else
    {
        if(num !== "0")
        {
           number=num;
        }
    }
    if(currentOp!=="")
    {
        secondoperand=number;
    }
    lowerScreen.textContent=number; 
}


/////////////// dicimal point button ///////////////
document.getElementById("dot").addEventListener("click",AddPoint)

function AddPoint()
{
    if(dicimaPoint===false)
    {
        number+=".";
        dicimaPoint=true;
        lowerScreen.textContent=number;
    }
}

////////////// operator keys //////////////
let operators=document.getElementsByClassName("op");
for(let i=0;i<operators.length;i++)
{
    operators[i].addEventListener("click",(e) => {
        appendOp(e.target.value);
    })
}

function  appendOp(op)
{
    if(secondoperand!=="")
    {
       equalkey();
    }
    if(currentOp==="")
    {
        firstoperand=number;
    }
    currentOp=op;
    lowerScreen.innerHTML="&nbsp;";
    upperScreen.textContent=`${firstoperand} ${op}`;
    number="0";
    dicimaPoint=false;
}


///////////////// equal key /////////////////
document.getElementById("equal-btn").addEventListener("click",equalkey)

function equalkey()
{
    if(secondoperand!=="")   
    {
       firstoperand=Operate(currentOp,parseFloat(firstoperand),parseFloat(secondoperand));
       number=firstoperand.toString();
       firstoperand=number;
       secondoperand="";
       lowerScreen.textContent=firstoperand;
       upperScreen.innerHTML="&nbsp;";
       currentOp="";
       if(parseFloat(number)-parseInt(number)!==0)
       {
          dicimaPoint=true;
       }
    }
}

///////////////  keyboard /////////////// 
document.addEventListener('keydown', (e)=> {
    let keycode=e.keyCode;
    let value=(String.fromCharCode(keycode));
    if(keycode>47 && keycode<58)
    {
        if(e.key!=="*" && e.key!=="%")
        {
            appendNumber(value);
        }
    }
    if(keycode===8)          
    {
       clear();
    }
    if(keycode===190)   // . 
    {
        AddPoint();
    }
    if(keycode===189)  // - 
    {
        appendOp("-");
    }
    if(keycode===191)  // / 
    {
        appendOp("÷");
    }
    if(keycode===187 || keycode===13)  // = or enter 
    {
        e.preventDefault();
        equalkey();
    }
     if(keycode===32)     // space
     {
        e.preventDefault();  
     }
     if(e.key==="+")
     {
       appendOp("+");
     }
     if(e.key==="*")
     {
         appendOp("×");
     }
     if(e.key==="%")
    {
        appendOp("%");
    }
});


///////////////// clear button /////////////////
document.getElementById("C").addEventListener("click",clear)

function clear()
{
    if(lowerScreen.textContent==="0" || lowerScreen.innerHTML==="&nbsp;")
    {
        op="";
        number=firstoperand;
        lowerScreen.textContent=number;
        upperScreen.innerHTML="&nbsp;";
    }
    else
    {
        if(number.charAt(number.length-1)===".")
        {
          dicimaPoint=false;
        }
        number=number.slice(0,-1);
        if(number==="")
        {
            number="0";
        }
        lowerScreen.textContent=number;
    }
}

///////////////// all clear button /////////////////
document.getElementById("AC").addEventListener("click",()=> {
    ClearAll();
    })
    
    function ClearAll()
    {
        currentOp="";
        number="0";
        firstoperand="0";
        secondoperand="";
        dicimaPoint=false;
       lowerScreen.textContent=number;
       upperScreen.innerHTML="&nbsp;";
    }



function Operate(op,num1,num2)
{
    if(op==="+")
    {
        return num1+num2;;
    }
    if(op==="-")
    {
        return num1-num2;;
    }
    if(op==="×")
    {
        return num1*num2;
    }
    if(op==="÷")
    {
        return num1/num2;;
    }
    if(op==="%")
    {
        return num1%num2;;
    }
}

