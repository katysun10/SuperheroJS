function NewsStation(name, employeeRate, targetHero){
    this.name = name;
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

exports.NewsStation = NewsStation; 