function generatePassword()
{
  
  var lowerCaseLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upperCaseLetter = ['A','B','C','D','E','F','G','H','I','J','J','L','M','N','O','P','Q','R','S','T','U','V','w','X','Y','Z']
  var specialCharacters = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@",'[',"\\",']','^',"_","`","{","|","}","~"]
  var numbs=['1','2','3','4','5','6','7','8','9','0']
  var priorPassword=[]
  var currentPassword=[]
  var currentPasswordindex=[]
  var i=0

  
  var input1 = window.prompt("Choose length of the password (please input 8-128)")
  var passwordLength = parseInt(input1)
  
  if(input1 === null){
    return alert("Please try again with an input of 8-128")
  }

  while (true) 
    if (passwordLength <8 || passwordLength>128 || !passwordLength){
       passwordLength= window.prompt("Error! please try again!"+"/n"+"Length of the password (please input 8-128)")
      if(passwordLength=== null){
        return alert("Please try again with an input of 8-128")
      }
    } 

  else{
      var lowerCaseQuery= window.confirm("Including lowercase letters?")
      if (lowerCaseQuery){
      priorPassword= priorPassword.concat(lowerCaseLetter);
      lowercaseIndex= (Math.floor(Math.random() * lowerCaseLetter.length));
      currentPassword.push(lowerCaseLetter[lowercaseIndex]);
      i++
      
      }
    
      var upperCaseQuery= window.confirm("Including uppercase letters?")
      if (upperCaseQuery){
      priorPassword=priorPassword.concat(upperCaseLetter);
      upperCaseLetterIndex= (Math.floor(Math.random() * upperCaseLetter.length));
      currentPassword.push(upperCaseLetter[upperCaseLetterIndex]);
      i++
    }
  
   var specialCharQuery= window.confirm("Including special characters?")
    if (specialCharQuery){
    priorPassword=priorPassword.concat(specialCharacters);
    specialcharactersIndex= (Math.floor(Math.random() * specialCharacters.length));
    currentPassword.push(specialCharacters[specialcharactersIndex]);
    i++
    }
  
    var numbsQuery= window.confirm("Including numbers?")
    if (numbsQuery){
    priorPassword=priorPassword.concat(numbs);
    numbsIndex= (Math.floor(Math.random() * numbs.length));
    currentPassword.push(numbs[numbsIndex]);
    i++
    }
  
   while (i<passwordLength){
    currentPasswordindex= (Math.floor(Math.random() * priorPassword.length));
    
    currentPassword.push(priorPassword[currentPasswordindex]);
    
    i++;
    }
  
    return currentPassword.join("")

  }
}

var generateBtn = document.querySelector("#generate");
  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
  
generateBtn.addEventListener("click", writePassword);
