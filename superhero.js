/*
And I want a superhero base that stores gadgets that the 
superhero gives it
Think closely about relationships, and what public methods 
should be available

Then I want you to write a program where a super hero gets a 
gadget from the base, fights crime. Then the reporter station 
dispatches a single reporter to interview the super hero. And the 
reporter reports back to the news station. Then the station PRINTS 
the story
*/

//--------------------------------------------------------------------
/*
this code below has a reporter who gets data from observing a superhero
depending on the reporter's skill level, different information is learned
depending on the pay that the news station provides, the reporter
may or may not release the report that the REPORTER has written
*/

function SuperHero(superName, numPowers, powers, sigAttack, archEnemy, secretIdentity, gadgetsInBase){
    this.superName = superName;
    this.numPowers = numPowers;
    this.powers = powers;
    this.sigAttack = sigAttack;
    this.archEnemy = archEnemy;
    //only reveal secret if skill is high enough
    var secretIdentity = secretIdentity;
    this.secret = function(){
        return secretIdentity;
    }
    //base
    this.base = gadgetsInBase;
    this.putInBase = function(newGadget){
        this.base.push(newGadget);
        console.log(newGadget+" was sucessfully stored in the base");
    }
    //grab gadget to save the day
    var gadgetList = this.base;
    this.getGadget = function(gadget){
        var hasGadget = false;
        for(var i=0; i<gadgetList.length; i++){
            if(gadgetList[i] === gadget){
                hasGadget = true;
            }
        }
        if(hasGadget === false){
            console.log("Oops looks like the gadget requested isn't in the base try choosing another one. \nTo see a list of the gadgets in the base look at the 'base' property");
        }  
        else{
            console.log(this.superName+" has grabbed the "+gadget+". "+this.superName+" used the "+gadget+" to fight \ncrime and save the day!");
        } 
    }
};

function NewsStation(Name, employeeRate, targetHero){
    this.name = Name;
    this.employeeRate = employeeRate;
    //interview
    var reporterSent = false;
    this.dispatchSpecificReporter = "work in progress";
    this.dispatchReporter = function(){
        reporterSent = true;
        console.log("You have sent out a reporter to interview "+targetHero);
    }
    var doneInterview = false;
    this.reporterInterview = function(){
        if(reporterSent === false){
            console.log("The news station hasn't sent out a reporter yet!");
        }
        else{
            doneInterview = true;
            console.log("The interview with "+targetHero+" is done");
            var interview = "Reporter: Good day, "+targetHero+" thank you for agreeing to sit down for an interview\n"+targetHero+": Of course thank you for having me\nReporter: So first question, what inspired you to become a hero?\n"+targetHero+": Well, I have always aspired to be someone people looked up to\nReporter: I see, very nice. Next question: How did you get your powers?\n"+targetHero+": ...A hero never reveals there secrets...\nReporter: Well that seems like all the time we have. Again, thank you for coming!\n"+targetHero+": Thanks so much for having me!";
        }
        if(this.printInterview != undefined){
            return interview;
        }
    }
    this.getInterview = function(){
        if(doneInterview === false){
            console.log("the reporter has not interviewed "+targetHero+" yet!");
        }
        else{
            console.log("The news station has recieved the interview");
            this.printInterview = function(){
                console.log(this.reporterInterview());
            }
        }
    }
    this.printInterview = function(){
        console.log("there is nothing for station to print");
    }
};

function NewsReporter(firstName, lastName, skillLevel, requestedPay, obsHero, workPlace, heroObj, employerObj){
    this.firstName = firstName;
    this.lastName = lastName;
    this.skillLevel = skillLevel;
    this.requestedPay = requestedPay;
    this.heroObserved = obsHero;
    if(skillLevel >= 9){
        this.heroSecret = heroObj.secret();
    }
    else{
        this.heroSecret = "...I don't know any his/her true identity, my skill is too low..."
    }
    var report = "After extensive observation of the events today, I, reporter, "+firstName+" "+lastName+" \nhave learned that "+obsHero+"'s signature move used to defeat arch nemesis, \n"+heroObj.archEnemy+", the "+heroObj.sigAttack+" is created from the utilization \nof his/her powers, "+heroObj.powers+".";
    if(employerObj.employeeRate >= this.requestedPay){
        this.giveReport = function(){
            console.log("**This report is brought to you by the "+workPlace+"**");
            console.log(report);
            console.log("In addition, I know a secret about "+obsHero+". His/her true identity \nis..."+this.heroSecret+"!!!!");
            console.log("**This report is brought to you by the "+workPlace+"**");
        };
    }
    else{
        this.giveReport = function(){
            console.log("The pay is too low! I won't release my report");
        }
    }
}; 

//---------------------------------------------instances go here--------------------------------------------//
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




