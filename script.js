//step 1
//var movies = ["Starwars Episode 3", "Fast and Furious 1", "Surf's Up", "Step into liquid", //"Chasing Mavricks"];
//window.console.log(movies[1]);

//step 2
//var movies = [];
//movies[0] = "Starwars Episode 3";
//movies[1] = "Fast and Furious 1";
//movies[2] = "Surf's Up";
//movies[3] = "Step into liquid";
//movies[4] = "Chasing Mavricks";
//window.console.log(movies[0]);

//step 3
//var movies = [];
//movies[0] = "Starwars Episode 3";
//movies[1] = "Fast and Furious 1";
//movies[2] = "Surf's Up";
//movies[3] = "Step into liquid";
//movies[4] = "Chasing Mavricks";
//movies.splice(2, 0, "Dude where's my car.")
//window.console.log(movies.length);

//step 4
//var movies = [];
//movies[0] = "Starwars Episode 3";
//movies[1] = "Fast and Furious 1";
//movies[2] = "Surf's Up";
//movies[3] = "Step into liquid";
//movies[4] = "Chasing Mavricks";
//delete movies[0];
//window.console.log(movies);

//step 5
//var movies = [];
//movies[0] = "Starwars Episode 3";
//movies[1] = "Fast and Furious 1";
//movies[2] = "Surf's Up";
//movies[3] = "Step into liquid";
//movies[4] = "Chasing Mavricks";
//movies[5] = "Dude where's my car";
//movies[6] = "Bill and Ted's excellent adventure";

//for (var i = 0; i < movies.length; i += 1) {
//	console.log(movies[i]);
//}

//step 6
/*var movies = ["Starwars Episode 3", "Fast and Furious", "Surf's Up", "Step into liquid", "Chasing Mavricks", "Dude where's my car", "Bill and Ted's exellent Adventure"]; 
for (var x in movies) {
	window.console.log(movies[x]);
}*/

//step 7
/*var movies = ["Starwars Episode 3", "Fast and Furious", "Surf's Up", "Step into liquid", "Chasing Mavricks", "Dude where's my car", "Bill and Ted's exellent Adventure"]; 
for (var x in movies) {
	movies.sort()
    window.console.log(movies[x]);
}*/

//step 8
/*var movies = ["Starwars Episode 3", "Fast and Furious", "Surf's Up", "Step into liquid", "Chasing Mavricks", "Dude where's my car", "Bill and Ted's exellent Adventure"]; 

var leastFavMovies = ["Pacific Rim", "Hancock", "Any Transformers Exept #1 (That one was legit)"]; 

var movieS = movies.concat(leastFavMovies);
window.console.log(movieS);*/

//step 9
/*var movies = ["Starwars Episode 3", "Fast and Furious", "Surf's Up", "Step into liquid", "Chasing Mavricks", "Dude where's my car", "Bill and Ted's exellent Adventure"]; 

var leastFavMovies = ["Pacific Rim", "Hancock", "Any Transformers Exept #1 (That one was legit)"]; 

var movieS = movies.concat(leastFavMovies);
movieS.reverse();
window.console.log(movieS);*/

//step 10
/*var movies = ["Starwars Episode 3", "Fast and Furious", "Surf's Up", "Step into liquid", "Chasing Mavricks", "Dude where's my car", "Bill and Ted's exellent Adventure"]; 

var leastFavMovies = ["Pacific Rim", "Hancock", "Any Transformers Exept #1 (That one was legit)"]; 

var movieS = movies.concat(leastFavMovies);
movieS.reverse();
window.console.log(movieS.slice(9, 10));*/

//step 11
/*var movies = ["Starwars Episode 3", "Fast and Furious", "Surf's Up", "Step into liquid", "Chasing Mavricks", "Dude where's my car", "Bill and Ted's exellent Adventure"]; 

var leastFavMovies = ["Pacific Rim", "Hancock", "Any Transformers Exept #1 (That one was legit)"]; 

var movieS = movies.concat(leastFavMovies);
movieS.reverse();
window.console.log(movieS.slice(0,1));*/

//step 12
/*?????????
    ???????
    
    ??????*/



//step 13
/*var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 1998;
employee2["name"] = "Emmanuel Martinez";
employee2["title"] = "Aero Space Engineer";
employee2["department"] = "The best one";
employee2["isCurrent"] = true;

var employees = [employee1.concat(employee2)];
window.console.log(employee2);*/

//step 14
/*var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 1998;
employee2["name"] = "Emmanuel Martinez";
employee2["title"] = "Aero Space Engineer";
employee2["department"] = "The best one";
employee2["isCurrent"] = true;

var employees = [employee1, employee2];
var i;
for (i = 0; i < employees.length; i++) {
    window.console.log(employees[i]["name"]);
}*/

//step 15
/*var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 1998;
employee2["name"] = "Emmanuel Martinez";
employee2["title"] = "Aero Space Engineer";
employee2["department"] = "The best one";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 1993;
employee3["name"] = "Carlos Martinez";
employee3["title"] = "Hvac";
employee3["department"] = "Mechanics";
employee3["isCurrent"] = false;

var employees = [employee1, employee2, employee3];
var i;
for (i = 0; i < employees.length; i++) {
    
    if (employees[i]["isCurrent"] === true) {
    window.console.log(employees[i]["name"]);
    } else if (employees[i]["isCurrent"] === false) {
        window.console.log("");
    }
}*/

//step 16

// -------------------------Not finished!!!

/*var employees = [["Jessica",10],["Zak",9],["Fred",15],["Mike",5]]
for (i = 0 ; i <= employees.length; i++) {
    var yearsWithCompany = employees.filter(function() { 
	return typeof item == "string";
}); window.console.log(yearsWithCompany);
} */

    
    




//Practice with Functions 

//step 1

/*function displayMessage(x) {
    window.console.log(x);
}

displayMessage("what's up");*/








//step 2
/*function calculate(x,y) {
    window.console.log(x % y);
}

calculate(10,2);*/







//step 3
/*var employees = ["Emmanuel", "Isabel", "Carlos", "Zak"];
var i;
function showEmployee(employees) {
    window.console.log("Employees:")
    window.console.log("")
    for (i = 0 ; i < employees.length; i++) {
        window.console.log(employees[i]);
    }
}

showEmployee(employees);*/



//------part 2-----

//The Rock, Paper, Scissors Game 

//step 1 - 6
/*var userChoice = window.prompt("Do you choose rock,paper or scissors?").toLowerCase();

var computerChoice = Math.random();
window.console.log(computerChoice);

if (computerChoice > 0 && computerChoice < 0.33) {
    computerChoice = "rock";
    } else if (computerChoice > 0.34 && computerChoice < 0.66) {
            computerChoice = "paper";
        } else if (computerChoice > 0.66) {
                computerChoice = "scissors";
            }

if (userChoice === "rock" && computerChoice === "paper") {
    window.alert("Cpu selected Paper. You lose!");
} else if (userChoice === "rock" && computerChoice === "scissors") {
    window.alert("Cpu selected Scissors. You win!");
} else if (userChoice === computerChoice) {
    window.alert("Great minds think alike. Cpu also selcted " + computerChoice + " try again.");
} else if (userChoice === "paper" && computerChoice === "rock") {
    window.alert("Cpu selected Rock. You win!");
} else if (userChoice === "paper" && computerChoice === "scissors") {
    window.alert("Cpu selected Scissors. You lose!");
} else if (userChoice === "scissors" === computerChoice === "rock") {
    window.alert("Cpu selected Rock. You lose!");
} else if (userChoice === "scissors" === computerChoice === "paper") {
    window.alert("Cpu selected Paper. You win!")
} else {
    window.alert("You did not select rock,paper or scissors.")
}*/

//The Basic Calculator

/*function calculate(num1, num2, opt) {
    num1 = window.prompt("Input any number.");
    num2 = window.prompt("Input another number.");
    opt = window.prompt("Would you like to (add, subtract, multiply, or divide)").toLowerCase();
    switch (opt) {
    case "add":
        window.alert(parseInt(num1) + parseInt(num2));
        break;
        
    case "subtract":
        window.alert(parseInt(num1) - parseInt(num2));
        break;
            
    case "multiply":
        window.alert(parseInt(num1) * parseInt(num2));
        break;
            
    case "divide":
        window.alert(parseInt(num1) / parseInt(num2));
        break;
        
        default:
            window.alert("You did not enter add, subtract, multiply or divide.")
            calculate();
    }
}


calculate();*/




//Death by JavaScript

//part 1
/*function abcOrder(x) {
    var y = x.split("").sort().join("");
    window.alert(y);
    
}
abcOrder("webmaster");*/







//part 3

/*function vowel_count(str)  
{  
  var vowel_list = 'aeiouAEIOU';  
  var vcount = 0;  
    
  for(var x = 0; x < str.length ; x++)  
  {  
    if (vowel_list.indexOf(str[x]) !== -1)  
    {  
      vcount += 1;  
    }  
    
  }  
  return vcount;  
}  
alert(vowel_count("The quick brown fox"));*/




