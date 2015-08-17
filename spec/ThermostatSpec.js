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

  // it("should be able to play a Song", function() {
  //   player.play(song);
  //   expect(player.currentlyPlayingSong).toEqual(song);

  //   //demonstrates use of custom matcher
  //   expect(player).toBePlaying(song);
  // });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

});
