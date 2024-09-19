
let weekslived

function get_weeks () {
    
    var birth = new Date( document.getElementById("birth-year").value)
    var last = document.getElementById("last-year").value
   
    const today = new Date();
    const totalweeks = last * 52 || 4000; // converts to total no of year to weeks

    weekslived = Math.floor((today - birth) / (1000 * 60 * 60 * 24 * 7)); // Convert milliseconds to weeks
    const weeksleft = totalweeks - weekslived;
    
    document.getElementById("weeks-lived").innerHTML = weekslived;
    document.getElementById("weeks-left").innerHTML = weeksleft;
    document.getElementById("total").innerHTML = totalweeks;

    createDivs()
}

// function createDivs() {
//     const numberOfDivs = weekslived; // The number of divs you want to create (this can be from another function)
//     const container = document.getElementById('container'); // Get the container element

//     // Loop to create the number of divs
//     for (let i = 0; i < numberOfDivs; i++) {
//         const newDiv = document.createElement('div'); // Create a new div element
//         // newDiv.textContent = `This is div ${i + 1}`; // Set some text inside the div
//         newDiv.classList.add("boxstyle")

//         container.appendChild(newDiv); // Add the new div to the container
//     }
// }
function createDivs() {
    const container = document.getElementById('container');
    container.innerHTML = ""; // Clear previous boxes

    const totalWeeks = parseInt(document.getElementById("last-year").value) * 52 || 4000;
    
    // Create total weeks boxes
    for (let i = 0; i < totalWeeks; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add("boxstyle");
        
        // Fill the weeks lived with black color
        if (i < weekslived) {
            newDiv.classList.add("lived");
        }

        container.appendChild(newDiv);
    }
}

