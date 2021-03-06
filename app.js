/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps 

// Step 1 Create Onload handler 

window.onload = () => {
   main();
};

function main(){
    // Selete UI Element

    const root = document.getElementById("root");
    const btn = document.getElementById("change-btn");

    // Add Event listener In Button

    btn.addEventListener("click",function(){

        const bgcolor =  generateRGBcolor();
        root.style.backgroundColor = bgcolor;
    })


}

// step 2 random color generator function 

function generateRGBcolor(){

   const red = Math.floor(Math.random()* 255);
   const green = Math.floor(Math.random()* 255);
   const blue = Math.floor(Math.random()* 255);

   return `rgb(${red}, ${green}, ${blue} )`

}
