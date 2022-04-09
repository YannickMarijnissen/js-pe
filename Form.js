const voornaam = document.querySelector("#inputVoornaam")
const naam = document.querySelector("#inputNaam")
const gebruikersnaam = document.querySelector("#inputGebruikersnaam")
const email = document.querySelector("#inputEmail")
const wachtwoord = document.querySelector("#inputWachtwoord")
const herhaalWachtwoord = document.querySelector("#inputHerhaalWachtwoord")
const adres = document.querySelector("#inputAdres")
const land = document.querySelector("#inputLand")
const provincie = document.querySelector("#inputProvincie")
const postcode = document.querySelector("#inputPostcode")
const akkoordMetVoorwaarde = document.querySelector("#inputgridCheck2")
const Submit_btn=document.querySelector('#Submit')
const melding=""


checkEmptyFieldVoornaam=(voornaam,melding)=>{
if (voornaam.value=="") {
    
 return"Het veld voornaam is verplicht"
  
   
}}
checkEmptyFieldNaam=(naam,melding)=>{
if (naam.value=="") {
    
 return  "Het veld naam is verplicht"
 
   
}}
checkEmptyFieldGebruikersnaam=(gebruikersnaam,melding)=>{
    if (gebruikersnaam.value=="") {
        
    return  "Het veld gebruikersnaam is verplicht"
    
       
    }}
    checkEmptyFieldAdres=(adres,melding)=>{
    if (adres.value=="") {
        
      return"Het veld adres is verplicht"
       
    }}
    checkEmptyFieldLand=(Land,melding)=>{
        if (Land.value=="") {
            
          return"Het veld land is verplicht"
          
           
        }}
        checkEmptyFieldProvincie=(naam,melding)=>{
        if (provincie.value=="") {
            
          return"Het veld provincie is verplicht"
           
           
        }}


ValidateEmail=(email)=>
{//https://www.w3resource.com/javascript/form/email-validation.php
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{

}
else
{
return "E-mailadres is niet correct."

}}

ValidateWachtwoorden=(wachtwoord,herhaalWachtwoord)=>{
    //lengte valideren werkt niet
if (wachtwoord.length <=7 ) {
   return "Je wachtwoord is te kort"
}
if (wachtwoord.value=="") {
    return "Het veld wachtwoord is vereist."
}
if (herhaalWachtwoord.value=="") {
   return "Het veld herhaal wachtwoord is vereist."
}
if (herhaalWachtwoord.value != wachtwoord.value) {
   return"Je wachtwoorden komen niet overeen"
}
}


checkPC=(postcode)=>{
    if (postcode.value=="") {
     return"Het veld postcode is vereist"
    }
    else if (postcode.value <1000 || postcode.value>=10000 ) {
     return"De waarde van postcode moet tussen 1000 en 9999 liggen." 
    }
}

ValidateForm=()=>{
 alert (checkEmptyFieldVoornaam(voornaam,melding)+ "\n"
+ checkEmptyFieldNaam(naam,melding)+ "\n"
+ checkEmptyFieldGebruikersnaam(gebruikersnaam,melding)+ "\n"
+checkEmptyFieldAdres(adres,melding)+ "\n"
+checkEmptyFieldLand(land,melding)+ "\n"
+ checkEmptyFieldProvincie(provincie,melding)+ "\n"
+ ValidateEmail(email)+ "\n"
+ ValidateWachtwoorden(wachtwoord,herhaalWachtwoord)+ "\n"
+checkPC(postcode)+ "\n")
if (voornaam.value !=""&&naam.value!=""&&gebruikersnaam.value!=""&&adres.value!=""&&wachtwoord.value!=""&&herhaalWachtwoord.value!=""&&land.value!=""&&provincie.value!=""&&postcode.value!="") {
    alert("Goed gedaan!"+"\n"+"aww yeah, je werd geregistreerd"+"\n"+ "Betalingswijze!")

}}

Submit_btn.addEventListener('click',ValidateForm)
