let buttonColors = []
let buttonSpace = {

    buttonInitialize: function (count) {
      for (let i = 0; i < count; i++) {
        buttonColors[i] = 'red';
      }
    },

    passTheColors: function () {
      return buttonColors;
    },

    resetButtonColors: function () {
      buttonColors = [];
    },

    updateColors: function (id) {
      let newButtonColors = buttonColors;
      newButtonColors[id] = newButtonColors[id] === 'red' ? 'green' : 'red';
      buttonColors = newButtonColors;
    }

};

export default buttonSpace;
