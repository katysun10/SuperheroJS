
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

exports.SuperHero = SuperHero; 
