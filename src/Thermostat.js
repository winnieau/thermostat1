function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.raise = function() {
  if(this.powerSavingMode === true) {
    if(this.temperature < 25) {
      this.temperature++;
    }
  } else {
    if(this.temperature < 32) {
      this.temperature++;
    }
  }
};

Thermostat.prototype.lower = function() {
  if(this.temperature > 10) {
    this.temperature--;
  }
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSavingMode = false;
};


Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyStatus = function() {
  if(this.temperature < 18) {
    this.displayColor = 'green';
  }
  else if(this.temperature < 25) {
    this.displayColor = 'yellow';
  }
  else {
    this.displayColor = 'red';
  }
};
