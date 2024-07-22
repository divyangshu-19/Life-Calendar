function get_weeks () {
    
    var birth = new Date( document.getElementById("birth-year").value)
    var last = document.getElementById("last-year").value
   
    const today = new Date();
    const totalweeks = last * 52 || 4000; // converts to total no of year to weeks

    const weekslived = Math.floor((today - birth) / (1000 * 60 * 60 * 24 * 7)); // Convert milliseconds to weeks
    const weeksleft = totalweeks - weekslived;
    
    document.getElementById("weeks-lived").innerHTML = weekslived;
    document.getElementById("weeks-left").innerHTML = weeksleft;
    document.getElementById("total").innerHTML = totalweeks;

    
}