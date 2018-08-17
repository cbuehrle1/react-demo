let buttonColors = []
let buttonSpace = {

    buttonInitialize: function (count) {
      for (var i = 0; i < count; i++) {
        buttonColors[i] = 'red';
      }
    },

    passTheColors: function () {
      return buttonColors;
    },

    passColorLength: function () {
      const result = buttonColors.length > 1 ? buttonColors.length : 0;
      return result;
    }

  };

export default buttonSpace;
