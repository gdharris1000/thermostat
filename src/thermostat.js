 "use strict";

function Thermostat(){
    this.DEFAULT_TEMP = 20;
    this.MIN_TEMP = 10;
    this.PS_MAX_TEMP = 25;
    this.MAX_TEMP = 32;
    this.temp = this.DEFAULT_TEMP;
    this.powerSave = true;
}

Thermostat.prototype.getTemp = function(){
    return this.temp;
};

Thermostat.prototype.up = function(){
    if (this.isMaxTemp()){
        return
    }
    this.temp += 1;
};

Thermostat.prototype.down = function(){
  if(this.isMinTemp()){
      return 
  }
  this.temp -= 1;
};

Thermostat.prototype.isMinTemp = function (){
    return this.temp === this.MIN_TEMP
};

Thermostat.prototype.isMaxTemp = function(){
    if (this.isPowerSave() == true){
        return this.temp === this.PS_MAX_TEMP;
    } else {
        return this.temp === this.MAX_TEMP;
    }
}

Thermostat.prototype.isPowerSave = function(){
    return this.powerSave === true;
}

Thermostat.prototype.saveMyPower = function(){
    return this.powerSave = true;
};

Thermostat.prototype.drainMyPower = function(){
    return this.powerSave = false;
};

Thermostat.prototype.reset = function(){
    this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.usage = function(){

    if(this.temp < 18){
        return "Low";
    }else if (this.temp >= 18 && this.temp <=25){
        return "Medium";
    } else{
        return "High";
    }
};