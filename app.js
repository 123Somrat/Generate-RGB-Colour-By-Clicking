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


}

// step 2 random color generator function 

function generateRGBcolor(){

   const red = Math.floor(Math.random()* 255);
   const green = Math.floor(Math.random()* 255);
   const blue = Math.floor(Math.random()* 255);

   return `rgb(${red}, ${green}, ${blue} )`

}
