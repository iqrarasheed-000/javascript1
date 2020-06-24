//Chapter # 21-25 "STRINGS METHODS"//
//(Q1.)//
var firstName = prompt("Write your first name");
var lastName = prompt("Write your last name");
alert(firstName +" "+ lastName);
//(Q2.)//
var phone = prompt("What is your favourite mobile model?");
var num = phone.length;
document.write("<h2>"+"My favourite phone is: "+ phone +"</h2>");
document.write("<h2>"+"length of string: "+ num +"</h2>" + "<br>"); 
//(Q3.)//
var str = "Pakistani";
var char = str.indexOf("n");
document.write("<h2>"+ "String: " + str + "</h2>");
document.write("<h2>"+ "Index of 'n': " + char + "</h2>" + "<br>");
//(Q4.)//
var x = "Hello World";
var char = x.lastIndexOf("l");
document.write("<h2>"+ "String: " + x + "</h2>");
document.write("<h2>"+ "Last Index of 'l': " + char + "</h2>"+ "<br>");
//(Q5.)//
var str = "Pakistani";
var char = str.charAt(3);
document.write("<h2>"+ "String: " + str + "</h2>");
document.write("<h2>"+ "Character at Index 3: " + char + "</h2>"+ "<br>");
//(Q6.)//
var firstName = "Iqra ";
var lastName = "Rasheed";
var result = firstName.concat(lastName);
document.write("<h2>"+ result +"</h2>" +"<br>");
//(Q7.)//
var city = "Hyderabad";
var z = city.replace("Hyder","Islam");
document.write("<h2>"+ "City: "+ city+ "</h2>");
document.write("<h2>"+"After Replacement: "+ z + "</h2>"+ "<br>");
//(Q8.)//
var message = "Ali and Sami are best friends.They play cricket and football together."
var a = message.replace(/and/g,"&");
document.write("<h2>"+ a +"</h2>"); 
//(Q9.)//
var num = "472";
var x = parseInt("472");
document.write("<h2>"+"Value: "+ num +"</h2>");
document.write("<h2>"+"Type: "+ "string" +"</h2>");
document.write("<h2>"+"Value: "+ x +"</h2>");
document.write("<h2>"+"Type: "+ "number" +"</h2>" + "<br>");
//(Q10.)//
var input = prompt("Write any statement");
var z = input.toUpperCase();
document.write("<h2>"+"User Input: "+ input + "</h2>");
document.write("<h2>"+"Upper Case: "+ z + "</h2>"+ "<br>");
//(Q11.)//
var input = prompt("Which institute is best for english learning?");
document.write("<h2>"+ "User Input: "+ input+ "</h2>");
var firstChar = input.slice(0,1);
var otherChar = input.slice(1);
firstChar = firstChar.toUpperCase();
otherChar = otherChar.toLowerCase();
var input = firstChar + otherChar;
document.write("<h2>"+ "Title Case: "+ input+ "</h2>" + "<br>");
//(Q12.)//
var num = 35.36;
var n = num.toString();
var n = 35.36e2;
document.write("<h2>"+"Number: "+ num + "</h2>");
document.write("<h2>"+"Result: "+ n + "</h2>"+ "<br>");
//(Q13.)//

//(Q14.)//
var array = ["cake","apple pie","cookie","chips","patties"];
var items = prompt("What do you want to order sir/ma'am?");
items = items.toLowerCase();
var bakitems = array.indexOf(items);
if (array.indexOf(items) != -1){
    alert(items+ " is available at index "+bakitems+ " in our bakery");
}
else {
    alert(items + " is not available in our bakery");
}
//(Q15.)//

//(Q16.)//
var a = "University of Karachi";
var u = a.split("");
for (var i = 0; i < u.length; i++) {
 document.write("<h3>"+u[i]+ "</h3>"+ "<br>");
}
 //(Q17.)//
 var x = "Pakistan";
 var y = x.slice(-1);
 document.write("<h2>"+"User Input: "+ x + "</h2>");
 document.write("<h2>"+"Last Character of input: " + y + "</h2>"+"<br>");
//(Q18.)//
var a = "The quick brown fox jumps over the lazy dog.";
var b = a.match(/the/gi);
document.write("<h2>"+"The 2 occurrences are: " + b + "</h2>"+ "<br>");

//Chapter # 26-30 "MATH METHOD"//
//(Q1.)//
var num = prompt("Write a positive Integer");
var a = Math.round(num);
var b = Math.floor(num);
var c = Math.ceil(num);
document.write("<h2>"+ "Number: " +num+ "</h2>");
document.write("<h2>"+ "Round off value: " +a+ "</h2>");
document.write("<h2>"+ "Floor Value: " +b+ "</h2>");
document.write("<h2>"+ "Ceil value: " +c+ "</h2>");
//(Q2.)//
var num = prompt("Write a negative Integer");
var a = Math.round(num);
var b = Math.floor(num);
var c = Math.ceil(num);
document.write("<h2>"+ "Number: " +num+ "</h2>");
document.write("<h2>"+ "Round off value: " +a+ "</h2>");
document.write("<h2>"+ "Floor Value: " +b+ "</h2>");
document.write("<h2>"+ "Ceil value: " +c+ "</h2>"+ "<br>");
//(Q3.)//
var num = -4;
var a = Math.abs(num);
document.write("<h2>"+"The absolute value of "+num+ " is "+a+ "</h2>"+"<br>");
//(Q4.)//
var num = Math.floor((Math.random() * 10) + 1);
var num1 = Math.floor((Math.random() * 10) + 1);
document.write("<h2>"+"Random Dice Value: "+num+"</h2>");
document.write("<h2>"+"Random Dice Value: "+num1+"</h2>"+"<br>");
//(Q5.)//
var head = Math.floor(Math.random() * 3);
var tails = Math.floor(Math.random() * 3);
document.write("<h2>"+head+"<br>"+"Random coin value: Head"+"</h2>");
document.write("<h2>"+tails+"<br>"+"Random coin value: Tails"+"</h2>"+"<br>");
//(Q6.)//
var program = Math.floor((Math.random() * 100) + 1);
document.write("<h2>"+"Random number between 1 and 100: "+program+"</h2>"+"<br>");
//(Q7.)//
var weight = prompt("What is your weight?");
var a = parseFloat(weight);
document.write("<h2>"+ "The weight of user is "+a+ " kilograms"+"</h2>"+"<br>");
//(Q8.)//
var num = Math.floor((Math.random() * 10) + 1);
var user = prompt("Write a number between 1 to 10");
if (user == num) {
    alert("Congragulations!!")
}
else {
    alert("Try Again")
}

//Chapter # 31-34 "DATE METHODS"//
//(Q1.)//
var a = new Date();
document.write("<h2>"+a+ "</h2>"+"<br>");
//(Q2.)//
var d = new Date();
var month = new Array();
month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var n = month[d.getMonth()];
document.write("<h2>"+"Current Month: "+n+ "</h2>"+"<br>");

//(Q3.)//
var d = new Date();
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var n = weekday[d.getDay()];
var z = n.substring(0,3);
document.write("<h2>"+"Today is: " +z+ "</h2>"+"<br>");
//(Q4.)//
var d = new Date();
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var n = weekday[d.getDay()];
if (n === ("saturday"||"Sunday")) {
    document.write("<h2>Its Fun Day</h2>")
}
else {
    document.write("<h2>No Fun Day</h2><br>")
}
//(Q5.)//
var d = new Date();
var date = d.getDate();
if (date < 16) {
    document.write("<h2>First Fifteen days of the month.</h2>")
}
else {
    document.write("<h2>Last Days of the month.</h2>")
}
//(Q6.)//
var a = new Date();
document.write("<h2>"+"Current Date "+a+ "</h2>");
var obj = new Date();
var milli = obj.getTime();
document.write("<h2>"+"Elapsed milliseconds since January 1, 1970: "+milli+ "</h2>");
var min = obj.getMinutes();
document.write("<h2>"+"Elapsed minutes since January 1, 1970: "+min+ "</h2>"+"<br>");
//(Q7.)//
var time = new Date();
if (time > 12){
    alert("It's PM")
}
else {
    alert("It's AM")
}
//(Q8.)//
var date = new Date("Dec 31, 2020");
document.write("<h2>"+ "Later Date: "+date+ "</h2>"+"<br>");
//(Q9.)//
var a = new Date("January 1, 2015");
var b = new Date("June 21, 2015");
var diff = b.getTime() - a.getTime();
var diffdays = diff/(1000*60*60*24);
document.write("<h2>"+diffdays+ " days have passed since 1st Ramadan, 2015"+"</h2>"+"<br>");
//(Q10.)//
var x = new Date("January 1, 2015");
var y = new Date("December 05, 2015");
var diff = y.getTime() - x.getTime();
var diffdays = diff/(1000*60);
document.write("<h2>"+"On reference date "+y+ "</h2>");
document.write("<h2>"+diffdays+" seconds had passed since beginning of 2015"+"</h2>"+"<br>");
//(Q11.)//
var time = new Date();
document.write("<h2>"+"Current Date "+time+"</h2>");
var hourAhead = time.setHours(14);
document.write("<h2>"+"1 hour ago, it was "+time+"</h2>"+"<br>");
//(Q12.)//
var today = new Date();
document.write("<h2>"+"Current Date "+today+"</h2>");
var yearsAgo = today.setFullYear(1920);
document.write("<h2>"+"100 years back, it was "+today+"</h2>"+"<br>");
//(Q13.)//
var dob = new Date(prompt("Enter your date of birth"));
var year = prompt("Enter your Birth Year");
var dobMilli = dob.getTime();
var today = new Date();
var todayMilli = today.getTime();
var diff = todayMilli - dobMilli;
var accAge = Math.floor(diff /(1000*60*60*24*30*12));
document.write("<h2>"+"Your age is "+accAge+"</h2>");
document.write("<h2>"+"Your birth year is "+year+"</h2>");
//(Q14.)//
var cusName = "ABC Customer";
var month = "February";
var units = 410;
var charges = 16;
var amount = units * charges;
var latePayment = 350;
var gross = amount + latePayment;
document.write("<h1>K-Electric Bill</h1>");
document.write("<h2>"+"Customer Name: "+cusName+"</h2>");
document.write("<h2>" + "Month: " +month+"</h2>");
document.write("<h2>" + "Number of Units: " +units+"</h2>");
document.write("<h2>" + "Charges per Unit: " +charges+"</h2>");
document.write("<h2>" + "Net Amount Payable (within Due Date): " +amount+"</h2>");
document.write("<h2>" + "Late Payment Surcharge: " +latePayment+"</h2>");
document.write("<h2>" + "Gross Amount Payable (After Due Date): " +gross+"</h2>");

//Chapter # 35-38 "FUNCTION"//
//(Q1.)//
function date(){
    time = new Date()
}
document.write("<h2>"+time+"</h2>");
//(Q2.)//
var a = prompt("What is your first name");
var b = prompt("What is your last name?");
function greeting(){
   document.write("<h2>"+"Hello, "+a+" "+b+"</h2>")
}
greeting();
//(Q3.)//
var y = +prompt("Write a number");
var z = +prompt("Write another number");
var x = y + z;
function add(){
    document.write("<h2>"+x+"</h2>");
}
add();   
//(Q4.)//
function calc(num1,opr,num2){
    if (opr === "+"){
        return num1 + num2
    }
    else if (opr === "-"){
        return num1 - num2
    }
    else if (opr === "*"){
        return  num1 * num2
    }
    else {
        return "Incorrect Answer!"
    }
}
var result = calc(6,"+",8);
var result1 = calc(6, "-",4);
var result2 = calc(7,"*",8);
var result3 = calc(5,"&",8);
document.write("<h3>"+result+"</h3>");
document.write("<h3>"+result1+"</h3>");
document.write("<h3>"+result2+"</h3>");
document.write("<h3>"+result3+"</h3>");
//(Q5.)//
var sumOfSquares = function (num) {
     var i,
     sum = 0;
  
     for (i = 1; i <= num; i++) {
     sum = i * i;
    }
    return sum;
  }
  
var num = parseInt(prompt("Enter a number:"), 10);
document.write("<h2>"+"The square of " + num + " is " +sumOfSquares(num)+"</h2>") ;
//(Q6.)//
function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var n = 4;
answer = factorial(n)
document.write("<h2>"+"The factorial of " + n + " is " + answer+"</h2>");
//(Q7.)//

//(Q8.)//
function pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }
  
document.write("<h2>"+"Hypotenuse: "+pythagorean(4, 3)+"</h2>");
//(Q9.)//
var height = prompt("Enter a height for your area");
var width = prompt("Enter a width for your area");
function area(height,width){
    return height*width
}
document.write("<h2>"+"The Area of Rectangle is "+area(height,width)+"</h2>");
//(Q10.)//
function check_Palindrome(str){
       var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
        if(cstr==="") {
            console.log("Nothing found!");
            return false;
        }
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
            if (cstr.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
                ccount = (cstr.length - 1) / 2;
            }
        }
        for (var i = 0; i < ccount; i++) {
            if (cstr[x] != cstr.slice(-1-i)[0]) {
                console.log("Entry is not a palindrome.");
                return false;
            }
        }
        console.log("The entry is a palindrome.");
        return true;
    }
    check_Palindrome('radar');
//(Q11.)//
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' ');
}
document.write("<h2>STRING: the quick brown fox </h2>");
document.write("<h2>"+"OUTPUT: "+titleCase("the quick brown fox"+"</h2>"));
//(Q12.)//
function longestWord(str)
{
  var array = str.match(/\w[a-z]{0,}/gi);
  var result = array[0];

  for(var i = 1 ; i < array.length ; i++)
  {
    if(result.length < array[i].length)
    {
    result = array[i];
    } 
  }
  return result;
}
document.write("<h2> String: Web Development Tutorial </h2>");
document.write("<h2>"+"Output: "+ longestWord("Web Development Tutorial"));
//(Q13)//
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write("<h2>"+char_count('JSresourceS.com', 'o')+"</h2>");
//(Q14)//
function calcCircumference(radius) {
    var circumference = (Math.PI * 2) * radius;
    var area = (Math.pow(radius, 2)) * Math.PI;
   
    document.write("<h2>"+"The circumference of a circle with a radius of " + radius + " is " + circumference + ".The area for this circle is " + area + "."+"</h2>");
  }
   calcCircumference(37);


























