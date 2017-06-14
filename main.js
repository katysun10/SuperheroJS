
var NewsReporter = require("./reporter").NewsReporter;
var SuperHero = require("./hero").SuperHero;
var NewsStation = require("./station").NewsStation;

var piggyPowers = ["the sonic squeal", " and the ham(mer) punch"];
var gadgetsInBase = ["laser gun", "cape"];

var SpiderPig = new SuperHero("Spider Pig", piggyPowers.length, 
                              piggyPowers, "Hammie Whammie", 
                              "The Butcher", "Peter Porker",
                              gadgetsInBase);

var DailyBugle = new NewsStation("DailyBugle", 5000, "Spider Pig");

var JJ = new NewsReporter("Jonah", "Jameson", 
                            9, 1000, "Spider Pig", 
                            "Daily Bugle", SpiderPig, 
                            DailyBugle);

//---------------------------------------------now lets test it--------------------------------------------//

//can the code give a report?
JJ.giveReport();
console.log("") //here for aestheticss

//can the code put and store items in the superhero base?
SpiderPig.putInBase("calory");
console.log("") //here for aestheticss

//can the code grab a gadget from the base?
SpiderPig.getGadget("calory");
console.log("") //here for aestheticss

//can the code send a reporter out?
DailyBugle.dispatchReporter();
console.log("") //here for aestheticss

//can the code make the sent reporter do an interview?
DailyBugle.reporterInterview();
console.log("") //here for aestheticss

//can the code get the interview back to the news station?
DailyBugle.getInterview();
console.log("") //here for aestheticss

//can the code print out the interview?
DailyBugle.printInterview();
