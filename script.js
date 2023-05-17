// Grab values from the submitted form in the URL
//const words = new URLSearchParams(window.location.search);

// assign values to variable
//const name= words.get("name")
//const month=words.get("month")
let user=""
let month=""

//console.log(`the name is ${name}`)
let button = document.getElementById("button")
function processForm (){
     user = document.getElementById("name").value  
     month = document.getElementById("month").value

 
let features =[]
let fortune=[]
switch (month){
    case jan:
        features =["big hearted", "self-motivate", "mature","calm","kind","natural leader","loyal","generous","adaptable","warm"]
        fortune=["You feel good about your self and people can tell", "People are attracted to you today and want to take part in you rhealing serenity","today you should listen without judgment as people pour their hearts to you","today you will fisht a lion and come out victorius","today you will feel like walking barefoot and playing with childre, its OK!"]
        break;
    case feb:
        features =["compassionate", "easy going", "empathetic","life of the party","kind","natural leader","loyal","original","strong","smart"]
        fortune=["today you feel like its a great days in the country side", "People are attracted to you today and want to take part in you rhealing serenity","today you should watch 3 episodes of southpark","today you should give every doggie you see a treat","today is an excellent time to share your feelings with the person you love"]
        break;
        case mar:
            features=["compassionate", "caring", "empathetic","artistic","kind","sensetive","loyal","organised","loving","creative"]
            fortune=["today use your deep intuition to solve a lingering problem", "today you might struggle to wrap your head around a certain problem","today you are full of fuzzy energy","today you should give every doggie you see a treat","today you will be the reigning drama queen"]
            break;
        case apr:
            features =["compassionate", "easy going", "empathetic","life of the party","kind","natural leader","loyal","original","strong","smart"]
            fortune=["today you feel like its a great days in the country side", "People are attracted to you today and want to take part in you rhealing serenity","today you should watch 3 episodes of southpark","today you should give every doggie you see a treat","today is an excellent time to share your feelings with the person you love"]
            break;
        case may:
            features =["big hearted", "self-motivate", "mature","calm","kind","natural leader","loyal","generous","adaptable","warm"]
            fortune=["You feel good about your self and people can tell", "People are attracted to you today and want to take part in you rhealing serenity","today you should listen without judgment as people pour their hearts to you","today you will fisht a lion and come out victorius","today you will feel like walking barefoot and playing with childre, its OK!"]
            break;
        case jun:
            features=["compassionate", "caring", "empathetic","artistic","kind","sensetive","loyal","organised","loving","creative"]
            fortune=["today use your deep intuition to solve a lingering problem", "today you might struggle to wrap your head around a certain problem","today you are full of fuzzy energy","today you should give every doggie you see a treat","today you will be the reigning drama queen"]
            break;
        case jul:
            features =["compassionate", "easy going", "empathetic","life of the party","kind","natural leader","loyal","original","strong","smart"]
            fortune=["today you feel like its a great days in the country side", "People are attracted to you today and want to take part in you rhealing serenity","today you should watch 3 episodes of southpark","today you should give every doggie you see a treat","today is an excellent time to share your feelings with the person you love"]
            break;
        case aug:
            features=["compassionate", "caring", "empathetic","artistic","kind","sensetive","loyal","organised","loving","creative"]
            fortune=["today use your deep intuition to solve a lingering problem", "today you might struggle to wrap your head around a certain problem","today you are full of fuzzy energy","today you should give every doggie you see a treat","today you will be the reigning drama queen"]
            break;
            case sep:
            features=["compassionate", "caring", "empathetic","artistic","kind","sensetive","loyal","organised","loving","creative"]
            fortune=["today use your deep intuition to solve a lingering problem", "today you might struggle to wrap your head around a certain problem","today you are full of fuzzy energy","today you should give every doggie you see a treat","today you will be the reigning drama queen"]
            break;
        case oct:
            features =["compassionate", "easy going", "empathetic","life of the party","kind","natural leader","loyal","original","strong","smart"]
            fortune=["today you feel like its a great days in the country side", "People are attracted to you today and want to take part in you rhealing serenity","today you should watch 3 episodes of southpark","today you should give every doggie you see a treat","today is an excellent time to share your feelings with the person you love"]
            break;
        case nov:
            features=["compassionate", "caring", "empathetic","artistic","kind","sensetive","loyal","organised","loving","creative"]
            fortune=["today use your deep intuition to solve a lingering problem", "today you might struggle to wrap your head around a certain problem","today you are full of fuzzy energy","today you should give every doggie you see a treat","today you will be the reigning drama queen"]
            break;
            case dec:
                features=["compassionate", "caring", "empathetic","artistic","kind","sensetive","loyal","organised","loving","creative"]
                fortune=["today use your deep intuition to solve a lingering problem", "today you might struggle to wrap your head around a certain problem","today you are full of fuzzy energy","today you should give every doggie you see a treat","today you will be the reigning drama queen"]
                break;
}

const f1 = features[Math.floor(Math.random()*10)];
const f2 = features[Math.floor(Math.random()*10)];
const f3 = features[Math.floor(Math.random()*10)];
const whatsHappening = fortune[Math.floor(Math.random()*5)]

const story =`Hi ${user} the Mighty Wombles thinks you are ${f1} , ${f2} and ${f3}. He thinks ${whatsHappening} `

console.log(story)
}

button.onclick = processForm ()
