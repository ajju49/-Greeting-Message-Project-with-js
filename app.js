var name = prompt('Enter your name,Please', 'name')
var today = new Date()
var hrs = today.getHours();



if(hrs <= 12)
document.write("Good morning"  + " " +  name  + " " +"!!!");
else if (hrs <= 18)
document.write("GoodAfternoon"  + " " +  name  + " "+ "!!!");
else
document.write("  Good Night  " + " " +  name  + " "+ "  !!! ");

