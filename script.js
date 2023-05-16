// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// assign values to variable
//const name= words.get("name")
//const month=words.get("month")
let user=""
let month=""

//console.log(`the name is ${name}`)

function processForm (){
     user = document.getElementById("name").value  
     month = document.getElementById("month").value
 
let features =[]
let fortune=[]
switch month{
    case jan:
        features =["big hearted", "self-motivate", "mature","calm","kind","natural leader","loyal","generous","adaptable","warm"]
        fortune=["You feel good about your self and people can tell", "People are attracted to you today and want to take part in you rhealing serenity","today you should listen without judgment as people pour their hearts to you","today you will fisht a lion and come out victorius","today you will feel like walking barefoot and playing with childre, its OK!"]
        break;
    case feb:
        features =["compassionate", "easy going", "empathetic","life of the party","kind","natural leader","loyal","original","strong","smart"]
        fortune=["today you feel like its a great days in the country side", "People are attracted to you today and want to take part in you rhealing serenity","today you should 3 episodes of southpark","today you should give every doggie you see a treat","today is an excellent time to share your feelings with the person you love"]
}
}