
// Typewriter animation
const description = document.getElementById('description');
const TargetText = description.innerHTML;
description.innerHTML = '.';
description.style.visibility = 'hidden';

let text = '';
async function Typewriter(){
    await sleep(250); // Initial delay before typing starts
    description.style.visibility = 'visible';
    description.innerHTML = '.';
    for (let i = 0; i < TargetText.length; i++) {
        text += TargetText.charAt(i);
        await sleep(50); // Adjust the speed of typing here

        
        description.innerHTML = text + '|'; // Add the cursor effect
        if (i === TargetText.length - 1) {
            while(true){
                description.innerHTML = text + '|'; // Keep the cursor at the end
                await sleep(500); // Cursor blink speed
                description.innerHTML = text + ' '; // Remove the cursor
                await sleep(500); // Cursor blink speed
            }
        }
    }    
}

Typewriter();

// wave Animation
const languages = document.getElementsByClassName('languages')[0].children;
console.log(languages);
async function wave(){
    for (let i = 0; i < languages.length; i++) {
        languages[i].style.animation = "wave 2s ease-in-out infinite";
        await sleep(300); // Adjust the delay between each wave animation
    }
}

wave();

// Dark Mode Animation

// Hero
const main = document.querySelector('main');
const underline = document.getElementById('underline');
const toggle = document.getElementById('dark-toggle');
const moon = document.getElementById('moon');
const githublogo = document.getElementById('github');

// Odds
const odds = document.getElementById('odds');

let darkmodeToggled = false;

async function toggleDarkMode() {
// Reset animations by removing and re-adding the class
    main.style.animation = 'none';
    underline.style.animation = 'none';
    moon.style.animation = 'none';

    // Trigger reflow to restart the animation
    void main.offsetWidth;
    void underline.offsetWidth;
    void moon.offsetWidth;

    // Apply animations
    if(!darkmodeToggled){
        
        // Hero
        toggle.style.backgroundColor = "white";
        main.style.animation = "whitetoblack 0.5s forwards";
        underline.style.animation = "whitetoblack 0.5s forwards reverse";
        moon.style.animation = "slideout 1s forwards";
        githublogo.src = "./photos/github-light.svg";

        // Odds
        odds.style.animation = "blacktoGray 1s forwards ";

        // Sun
        await sleep(500);
        moon.src = "./photos/sun.png";
    }else{

        // Hero
        toggle.style.backgroundColor = "black";
        main.style.animation = "whitetoblack 0.5s forwards reverse";
        underline.style.animation = "whitetoblack 0.5s forwards";
        moon.style.animation = "slideout 1s forwards reverse";
        githublogo.src = "./photos/github.png";

        odds.style.animation = "blacktoGray 1s forwards";

        // Moon
        await sleep(500);
        moon.src = "./photos/moon.png";
        
    }
    await sleep(500);
    moon.style.animation = 'none'; // Reset the animation

    darkmodeToggled = !darkmodeToggled;
}

