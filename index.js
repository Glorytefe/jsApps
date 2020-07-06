let wakeUpTime = 7;
let noon = 12;
let lunchTime = 12;
let napTime = lunchTime + 2;
let evening = 18;
let partytime;


let newTime = document.getElementById('time');
let currentTime = function (){
   let newDate = new Date();
   let  hours = newDate.getHours();
    let  minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let meredian = "AM";

// set meredian
    if (hours >= noon){
        meredian = "PM"
    }
// set clock to 12hrs clock 
    if (hours >= noon){
        hours = hours - 12;
    }
// set minutes
    if (minutes < 10){
        minutes = "0" + minutes;
    }
// set seconds
    if (seconds < 10){
       seconds= "0" + seconds;
    }
// set time
    let clock = hours + ":" + minutes + ":" + seconds + " " +  meredian;
    newTime.innerText = clock; 
}





// Another function that changes images, text and bg-color based on time

let updateTime = function (){
    let newImg = document.getElementById('images')
    let message = document.getElementById('events')
    let body = document.getElementById('boddy')

    message.style.color = "white"
    

    let newCurrentTime = new Date().getHours();
     if (newCurrentTime == partytime){
        newImg.setAttribute ('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg' )
        message.innerText= "It's time to paarrrtty!!!"
        
    }

    else if (newCurrentTime < noon){
        newImg.setAttribute ('src', 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg' )
        message.innerText = "Good morning"
        body.style.backgroundColor = "green"
    }
    else if (newCurrentTime == wakeUpTime){
        newImg.setAttribute ('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg' )
        message.innerText= "I'm awake!!!!"
    }
    else if (newCurrentTime == lunchTime){
        newImg.setAttribute ('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg' )
        message.innerText= "It's Lunch time!!"
    }
    else if (newCurrentTime == napTime){
        newImg.setAttribute ('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg' )
        message.innerText = "Taking a break for nap"
    }
    else if (newCurrentTime >= evening ){
        newImg.setAttribute ('src', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg')
        message.innerText = "Good evening"
        newImg.style.maxWidth = "40%"
    }
    
    else if (newCurrentTime >= noon){
        newImg.setAttribute ('src', 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg' )
        message.innerText ='Good Afternoon';
    }
    else {
        newImg.setAttribute ('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg' )
        message.innerText = "What are you up to?"
        body.style.backgroundColor = "blue"
    }

    console.log(message.innerText);
    


currentTime();
}

updateTime();

// updating the time

let oneSecond = 1000;
setInterval(updateTime, oneSecond);

// Activating the party button

let partydeal = document.getElementById('party');
    let partyevent = function(){
        if (partytime < 0){
                partytime = new Date().getHours();
                party.innerText = "Party Over!";
               party.style.backgroundColor = "#0A8DAB";
        }
        else {
            partytime = -1;
            party.innerText = "Party Time!";
             party.style.backgroundColor = "#222";
             party.style.color = "white"

        }
        
    };

partydeal.addEventListener("click", partyevent);
partyevent();
    
   
// activating the selectors

let waken = document.getElementById('wake');

let wakeUp = function(){
wakeUpTime = waken.value;
}

wake.addEventListener('change', wakeUp);

let lunchs = document.getElementById('lunch')
let lunchEvent = function(){
    lunchTime = lunchs.value;
}

lunch.addEventListener('change', lunchEvent);

let naps = document.getElementById('nap');
let napEvent = function(){
    napTime = naps.value;
}

nap.addEventListener('change', napEvent);