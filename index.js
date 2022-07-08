const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let leftPassword = document.getElementById("password-one")
let rightPassword = document.getElementById("password-two")
let generateBtn = document.getElementById("generate-password")

generateBtn.addEventListener("click", generatePassword)

// function generatePassword(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

// console.log(generatePassword(15));


function generatePassword() {
    let pass_length = 15
    let passwordOne = ''
    let passwordTwo = ''
    
    for (let i = 0; i < pass_length; i++) {
        let rnum = Math.floor(Math.random() * characters.length)
        passwordOne += characters[rnum]
        passwordTwo += characters[rnum]
    }

    leftPassword.innerText=passwordOne
    rightPassword.innerText=passwordTwo

    
}