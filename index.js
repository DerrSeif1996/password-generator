const Uppercharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
 "R","S","T","U","V","W","X","Y","Z" ];

const Lowercharacters = ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const Numbers=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*"];

let Uprchrctrs = false ;
let Lwrchrctrs = false ;
let Nmbrs = false ;
let symbls = false ;


let password1 = document.querySelector("#password1");
let password2 = document.querySelector("#password2");
let range = document.querySelector("#enterrange");
let Uprchrctrschecked = document.querySelector("#Upperchar-checkbox");
let Lwrchrctrschecked = document.querySelector("#lowerchar-checkbox");
let Nmbrschecked = document.querySelector("#numbers-checkbox");
let symblschecked = document.querySelector("#symbols-checkbox");




function generatePasswords(){
        password1.textContent = "";
        password2.textContent = "";
        updateCheckboxStates();
        if (!customization()) {
            return; 
        }
        display();
}

function updateCheckboxStates() {
    Uprchrctrs = Uprchrctrschecked.checked;
    Lwrchrctrs = Lwrchrctrschecked.checked;
    Nmbrs = Nmbrschecked.checked;
    symbls = symblschecked.checked;
}

function newarray(){
    
    let newArray = [];
    newArray = Uprchrctrs ? newArray.concat(Uppercharacters): newArray ;
    newArray = Lwrchrctrs ? newArray.concat(Lowercharacters): newArray ;
    newArray = Nmbrs ? newArray.concat(Numbers): newArray ;
    newArray = symbls ? newArray.concat(symbols): newArray ;
    return newArray;

}

function randomNumberGenerator(array){
    let randomNumber = Math.floor(Math.random()*array.length)
    return randomNumber ;
}

function customization() {
    if (!Uprchrctrs && !Lwrchrctrs && !Nmbrs && !symbls) {
        password1.textContent = "Please check ";
        password2.textContent = "Please check";
        return false; 
    }
    return true;
}

function display(){
    let rangeI = range.value ; 
    const combinedarray = newarray();
        for( let i = 0 ; i < rangeI ; i++){
            password1.textContent += combinedarray[randomNumberGenerator(combinedarray)]; 
            password2.textContent += combinedarray[randomNumberGenerator(combinedarray)]; 
        }
}