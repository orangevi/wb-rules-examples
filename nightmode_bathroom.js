defineRule("bathroom_brightness_control", {
    whenChanged: "wb-led_218/Channels 1_2_3_4",
    then: function (newValue, devName, cellName) {
      var date = new Date();
      var currentHour = date.getUTCHours();
      var currentMinutes = date.getUTCMinutes();
  
      // Форматируем текущее время в виде строки "ЧЧ:ММ"
      var currentTime = ("0" + currentHour).slice(-2) + ":" + ("0" + currentMinutes).slice(-2);
  
      // Проверяем, находится ли текущее время в интервале 20:30 - 04:30 UTC (23.30 - 7.30 MSK)
      var isInNightInterval =
        (currentHour > 20 || (currentHour === 20 && currentMinutes >= 30)) || // После 20:30
        (currentHour < 4 || (currentHour === 4 && currentMinutes <= 30));    // До 04:30
  
      if (newValue) { // Только если канал включен
        if (isInNightInterval) {
          dev["wb-led_218/Channels 1_2_3_4 Brightness"] = 30;
          log("Time: " + currentTime + " | Nighttime: Brightness set to 30.");
        } else {
          dev["wb-led_218/Channels 1_2_3_4 Brightness"] = 100;
          log("Time: " + currentTime + " | Daytime: Brightness set to 100.");
        }
      }
    }
  });
  