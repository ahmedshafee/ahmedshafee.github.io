

///////////////////////////////////
/// Function to viwe the number  
///////////////////////////////////
function print(a)
{
    document.getElementById("phonenumber").value+=a.value; 
}

///////////////////////////////////
///////// Edite button 
///////////////////////////////////
function deleteNumber()
{
   var strng=document.getElementById("phonenumber").value;
   document.getElementById("phonenumber").value=strng.substring(0,strng.length-1)
   
}
////////////////////////////////////////////////
///////// Change from call to cancel button
//////////////////////////////////////////////
function changeBackground()
{
    var text=document.getElementById("Number10").style.backgroundColor="red";

}
//////////////////////////////////////
////////
/////////////////////////////////////
function BackToNormal(){
    var text=document.getElementById("Number10").style.backgroundColor="";

}
/////////////////////////////////////////////
/////// diplay the defualt viwe of the app
/////////////////////////////////////////////
function call()
{
    document.getElementById("LOGS").style.display="none";
    document.getElementById("FAVOURITES").style.display="none";
    document.getElementById("CONTACTS").style.display="none";
    document.getElementById("CREATEDiv").style.display="none";
    document.getElementById("defualt").style.display="block";  
}
/////////////////////////////////////////////
/////// diplay the contact  viwe of the app
/////////////////////////////////////////////
function contact(){
document.getElementById("defualt").style.display="none";
document.getElementById("LOGS").style.display="none";
document.getElementById("FAVOURITES").style.display="none";
document.getElementById("CREATEDiv").style.display="none";
document.getElementById("CONTACTS").style.display="block";
}
/////////////////////////////////////////////
/////// diplay the log  viwe of the app
/////////////////////////////////////////////
function log()
{
    document.getElementById("defualt").style.display="none";
    document.getElementById("FAVOURITES").style.display="none";
    document.getElementById("CONTACTS").style.display="none";
    document.getElementById("CREATEDiv").style.display="none";
    document.getElementById("LOGS").style.display="block";    
}
/////////////////////////////////////////////////
/////// diplay the favourites  viwe of the app
////////////////////////////////////////////////
function favourites()
{
    document.getElementById("defualt").style.display="none";
    document.getElementById("LOGS").style.display="none";
    document.getElementById("CONTACTS").style.display="none";
    document.getElementById("CREATEDiv").style.display="none";
    document.getElementById("FAVOURITES").style.display="block";

    
}

////////////////////////////////////////////////////////////////////////
////////////////// This is very importan issue that i must to finish
///////////////////////////////////////////////////////////////////////

/////////////auto complete search for the contacts 
/////////////////////////////////////////////////////

function AutoCompleteSearch() 
{
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1 ) 
        {
            li[i].style.display = "";
        } 
        else 
        {
            li[i].style.display = "none";

        }
    }
}

/////////////////////////////////////////////////////
/////////// button for diplay the creating contact  
////////////////////////////////////////////////////
function Creating()
{
      
    if(document.getElementById("phonenumber").value!="")
        {
      document.getElementById("defualt").style.display="none";
      document.getElementById("LOGS").style.display="none";
      document.getElementById("FAVOURITES").style.display="none";
      document.getElementById("CONTACTS").style.display="none";
      document.getElementById("CREATEDiv").style.display="block";
      document.getElementById("phonenumber").value+="#";
      
    }
       else 
       {
           alert("Plese insert the number first");
       }
}

///////////////////////////////////////
///////// create new contact 
///////////////////////////////////////
function CreatContact()
{
   
    var CheckTypeNumber=document.getElementById("phonenumber").value;
    var lastChar = CheckTypeNumber.charAt(CheckTypeNumber.length - 1); 
    CheckTypeNumber = CheckTypeNumber.slice(0, -1); 
    document.getElementById("phonenumber").value=CheckTypeNumber;
   
 if(lastChar=="*")
 {
    CreatContactFavorites();
  
 }
 else if(lastChar=="#")
  {
    CreateRegularContact();

  }

}

var CounterRegularContact=5;  

////////////////////////////////////////////
/////////
///////////////////////////////////////////
function CreateRegularContact()
{
    
      var  NewContact=document.getElementById("insertdetails1").value ;
      NewContact+="  "+ document.getElementById("insertdetails2").value;
      var firstChar = NewContact.charAt(0);   
      firstChar=firstChar.toUpperCase();

      if(document.getElementById("insertdetails1").value=="")
      {
       if(document.getElementById("#")==null)  
       { 
      var ul =document.getElementById("myUL");    
      var liS=document.getElementById("A");
      var ligroup=document.createElement("li");
      var agroup=document.createElement("a");
      agroup.appendChild(document.createTextNode("#"));
      agroup.setAttribute("class","header");
      ligroup.appendChild(agroup);
      ligroup.setAttribute("id","#"); 
      ul.appendChild(ligroup);
      
      var li=document.createElement("li");
      var a=document.createElement("a");
      a.appendChild(document.createTextNode(document.getElementById("phonenumber").value));
      li.appendChild(a);
      li.setAttribute("id",++CounterRegularContact);
      li.setAttribute("value",document.getElementById("phonenumber").value);      
      ligroup.parentNode.insertBefore(li, ligroup.nextSibling);
        
        alert("Creating New  Contact");
        contact();       
    }else {

        var liS = document.getElementById("#");
        var li=document.createElement("li");
        var a=document.createElement("a");
        a.appendChild(document.createTextNode(document.getElementById("phonenumber").value))
        li.appendChild(a);
        li.setAttribute("id",++CounterRegularContact);
        li.setAttribute("value",document.getElementById("phonenumber").value);
        liS.parentNode.insertBefore(li, liS.nextSibling);
  
        alert("Creating New  Contact");
        contact(); 
    }
    
    }

     else if(document.getElementById(firstChar)!=null)
      {
      var liS = document.getElementById(firstChar);
      var li=document.createElement("li");
      var a=document.createElement("a");
      a.appendChild(document.createTextNode(NewContact))
      li.appendChild(a);
      li.setAttribute("id",++CounterRegularContact);
      li.setAttribute("value",document.getElementById("phonenumber").value);
      liS.parentNode.insertBefore(li, liS.nextSibling);

      alert("Creating New  Contact");
      contact();       
    
    }
      else
      {

// you need to add a new charchter 
// and then add the new contact 
      var ul =document.getElementById("myUL");
      var liS=document.getElementById("5");
      var ligroup=document.createElement("li");
      var agroup=document.createElement("a");
      agroup.appendChild(document.createTextNode(firstChar));
      agroup.setAttribute("class","header");
      ligroup.appendChild(agroup);
      ligroup.setAttribute("id",firstChar);  
      liS.parentNode.insertBefore(ligroup, liS.nextSibling);
      

      var li=document.createElement("li");
      var a=document.createElement("a");
      a.appendChild(document.createTextNode(NewContact))
      li.appendChild(a);
      li.setAttribute("id",++CounterRegularContact);
      li.setAttribute("value",document.getElementById("phonenumber").value);      
      ligroup.parentNode.insertBefore(li, ligroup.nextSibling);
      alert("Creating New  Contact");
      contact(); 
     
     }
    }

/////////////////////////////////////////////////////////
///////////implimntion create favorite contact  function 
/////////////////////////////////////////////////////////
var counterfavorites=1;

function CreatContactFavorites()
{
  var  NewContact=document.getElementById("insertdetails1").value ;
   NewContact+="  "+ document.getElementById("insertdetails2").value;

  if(document.getElementById("insertdetails1").value!="")
  {
    var ul = document.getElementById("myUL2");
    var li = document.createElement("li");
    var a=document.createElement("a");
    a.appendChild(document.createTextNode(NewContact))
    li.appendChild(a);
    li.setAttribute("id",++counterfavorites);
    li.setAttribute("value",document.getElementById("phonenumber").value);
    ul.appendChild(li);
    alert("Creating New Favorite Contact");
    favourites();
  }
  else{
  
    var ul = document.getElementById("myUL2");
    var li = document.createElement("li");
    var a=document.createElement("a");
    a.appendChild(document.createTextNode(document.getElementById("phonenumber").value))
    li.appendChild(a);
    li.setAttribute("id",++counterfavorites);
    li.setAttribute("value",document.getElementById("phonenumber").value);
    ul.appendChild(li);
    alert("Creating New Favorite Contact");
    favourites();

  }

}

////////////////////////////////////////////
///////////////get sound 
///////////////////////////////////////////
      function play()
      {
            var audio = document.getElementById("audio");
            audio.play();
      }
//////////////////////////////////////////////
//////////call button 
///////////////////////////////////////////// 

    function calling()
      {
     if(document.getElementById("phonenumber").value !="")
     {
        document.getElementById("call").style.display="none";  
        document.getElementById("Cancel").style.display="block"; 
        
       alert("CALLING "+document.getElementById("phonenumber").value );
        
           var counter=1;
            var NewNumber=document.getElementById("phonenumber").value;

            var ul = document.getElementById("myUL1");
            var li = document.createElement("li");
            var a=document.createElement("a");
            a.appendChild(document.createTextNode(NewNumber))
            li.appendChild(a);
            li.setAttribute("id",counter++);
            ul.appendChild(li);
       }       
      } 
      
//////////////////////////////////////////////
//////////cancel  button 
///////////////////////////////////////////// 
      function Canceling()
      {
        document.getElementById("Cancel").style.display="none";        
        document.getElementById("call").style.display="block";
        document.getElementById("phonenumber").value =""
      } 


      function CreateFavorites()
      {
        if(document.getElementById("phonenumber").value !="")
        {
            document.getElementById("defualt").style.display="none";
            document.getElementById("LOGS").style.display="none";
            document.getElementById("FAVOURITES").style.display="none";
            document.getElementById("CONTACTS").style.display="none";
            document.getElementById("CREATEDiv").style.display="block";
            document.getElementById("phonenumber").value+="*";
            
          }  
          else
          {
              alert("Plese insert the number first");
          }

      
      }
      
////////////////////////////////////////////////////
//////////check if the input value is  number  
/////////////////////////////////////////////////
      function isNumberKey(evt)
      {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
      }

      //////////////////////////////////
      /////////////////////////////////
    
      function ChangeStringToNumber(number)
      {

        
          



        

      }

      function ChangeNumberToString(number)
      {

        
          



      }

     






































































