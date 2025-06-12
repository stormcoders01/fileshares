const user = document.getElementById("msg")
const enc = document.getElementById("enc")


user_text = user.value

console.log(user_text)
console.log(user_text.length)

const users_letters = []


for (let i = 0; i < user_text.length ; i++){
    users_letters.push(user_text[i])
    // user_letters_str +=t
}
console.log(users_letters)

let original_text = ""
for (let i =0; i<user_text.length; i++ ){
    original_text+=users_letters[i]
}








// randome text generation

// Create an empty array
let characters = [];

// Add uppercase A-Z
for (let i = 65; i <= 90; i++) {
    characters.push(String.fromCharCode(i));
}

// Add lowercase a-z
for (let i = 97; i <= 122; i++) {
    characters.push(String.fromCharCode(i));
}

// Add digits 0-9
for (let i = 48; i <= 57; i++) {
    characters.push(String.fromCharCode(i));
}

// Add common symbols (you can add more as needed)
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '|', '\\', '`', '~'];
characters = characters.concat(symbols);


let pass_word_numbers = []
for (let i=0; i<=9; i++){
    pass_word_numbers.push(i)
}

// Log the result
console.log(pass_word_numbers);

console.log(characters);


// length of words
user_word_length = users_letters.length
characters_word_length = characters.length







encription_list = []
encription_stirng = ""

for (let i =0; i< user_word_length ; i++ ){
    randome_num = Math.floor(Math.random()*characters_word_length)
    encription_letters = characters[randome_num]
    encription_list.push(encription_letters)
    encription_stirng +=encription_letters

}

pass_word=[]
pass_word_str= ""
for (let i =0; i< 5 ; i++ ){
    randome_num = Math.floor(Math.random()*10)
    pass = pass_word_numbers[randome_num]
    pass_word.push(pass)
    pass_word_str +=pass;
}






console.log(pass_word)
console.log(pass_word_str)
console.log(encription_list)
console.log(encription_stirng)

const user_Index = users_letters.map((users_letters, index) => `${index}: ${users_letters}`);
const encription_index = encription_list.map((encription_list, index) => `${index}: ${encription_list}`);

console.log(user_Index)
console.log(encription_index)




// Output: [{key: 'a', value: 'anto'}, {key: 'c', value: 'raj'}, ...]

const otp =  pass_word_str
if (otp == pass_word_str){
    console.log("otp is correct")}
else{
    console.log("enter corroct otp")
}
    


class Meassage_database {
    constructor(encription_stirng, original_text,otp) {
        this.encription_stirng = encription_stirng;
        this.original_text = original_text;
        this.otp = otp;

    }

    method1() {

        console.log( `your OTP IS ${otp} The Encripted message is ${encription_stirng} and The Original message is ${original_text}`)
        
    }
}

mes1  = new Meassage_database(encription_stirng,original_text)
console.log(mes1.method1())

console.log(encription_stirng,original_text)


enc.innerHTML = `your OTP IS <h1>${otp}</h1> The Encripted message is <h1>${encription_stirng}</h1> and The Original message is <h1>${original_text}</h1>`