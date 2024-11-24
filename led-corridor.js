defineRule({
    whenChanged: ["wb-led_105/Input 1", "wb-led_105/Input 2"],
    then: function (newValue, devName, cellName) {
      dev["wb-led_105/CCT1"] = newValue;
      dev["wb-led_105/Channel 3"] = newValue;
  
    }
  });