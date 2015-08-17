describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase the temperature by 1", function() {
    thermostat.raise();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should decrease the temperature by 1", function() {
    thermostat.lower();
    expect(thermostat.temperature).toEqual(19);
  });

  it ("should not decrease below 10 degrees", function() {
    for(i=0; i<11; i++) {
      thermostat.lower();
    };
    expect(thermostat.temperature).toEqual(10);
  });

  it("should not increase more than 25 when power saving mode is on", function() {
    for(i=0; i<6; i++) {
      thermostat.raise();
    };
    expect(thermostat.temperature).toEqual(25);
  });

  it("should have the power saving mode on by default", function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it("should be able to turn off power saving mode", function() {
    thermostat.powerSaveOff();
    expect(thermostat.powerSavingMode).toEqual(false);
  });

  it("should not increase more than 32 when power saving mode is off", function() {
    thermostat.powerSaveOff();
    for(i=0; i<13; i++) {
      thermostat.raise();
    };
    expect(thermostat.temperature).toEqual(32);
  });

  it("should go back to 20 with reset function", function() {
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  
  // it("should display green if temp is less than 18"), function() {
  //   for(i=0; i<3; i++) {
  //     thermostat.lower();
  //   };
  //   thermostat.energyStatus();
  //   expect(thermostat.displayColor).toEqual('green');
  // });
});
