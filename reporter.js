
function NewsReporter(firstName, lastName, skillLevel, requestedPay, heroObj, employerObj){
    this.firstName = firstName;
    this.lastName = lastName;
    this.skillLevel = skillLevel;
    this.requestedPay = requestedPay;
    this.heroObserved = heroObj.superName;
    if(skillLevel >= 9){
        this.heroSecret = heroObj.secret();
    }
    else{
        this.heroSecret = "...I don't know any his/her true identity, my skill is too low..."
    }
    var report = "After extensive observation of the events today, I, reporter, "+firstName+" "+lastName+" \nhave learned that "+heroObj.superName+"'s signature move used to defeat arch nemesis, \n"+heroObj.archEnemy+", the "+heroObj.sigAttack+" is created from the utilization \nof his/her powers, "+heroObj.powers+".";
    if(employerObj.employeeRate >= this.requestedPay){
        this.giveReport = function(){
            console.log("**This report is brought to you by the "+employerObj.name+"**");
            console.log(report);
            console.log("In addition, I know a secret about "+heroObj.superName+". His/her true identity \nis..."+this.heroSecret+"!!!!");
            console.log("**This report is brought to you by the "+employerObj.name+"**");
        };
    }
    else{
        this.giveReport = function(){
            console.log("The pay is too low! I won't release my report");
        }
    }
}; 

exports.NewsReporter = NewsReporter;