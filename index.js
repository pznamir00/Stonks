const showStonksGuy = function () {
  const skinColor = "\x1b[38;2;255;239;184m";
  const bgColor = "\x1b[30m";
  const arrowColor = "\x1b[38;2;255;165;0m";
  const suitColor = "\x1b[90m";
  const shirtColor = "\x1b[34m";
  const textColor = "\x1b[37m";
  const textLayoutColor = "\x1b[35m";

  console.log(`
                                                 ${arrowColor}_*
                ${skinColor}________${bgColor}                      ${arrowColor}_*   |
              ${skinColor}/    /    \\${bgColor}                 ${arrowColor}_*       |
             ${skinColor}/    / _   _\\${bgColor}             ${arrowColor}_*          |
            ${skinColor}/    |  * | *|${bgColor}           ${arrowColor}*I            |
           ${skinColor}|     |    \\  |${bgColor}             ${arrowColor}*_          |
           ${skinColor}|     |    _| |${bgColor}               ${arrowColor}/      _  |
           ${skinColor}|      \\ \\___//${bgColor}              ${arrowColor}/     /  *_|
           ${skinColor}|   \\_  \\    /${bgColor}              ${arrowColor}/     /
            ${skinColor}\\    \\__\\__/${bgColor}              ${arrowColor}/     /
             ${skinColor}\\      /${bgColor}                ${arrowColor}/     /
              ${skinColor}|    |${bgColor}                ${arrowColor}/     /
        ${suitColor}_____/\\   ${shirtColor}/${suitColor}\\__${bgColor}             ${arrowColor}/     /
      ${suitColor}/        \\ ${shirtColor}/${suitColor}  /  \\_____${bgColor}     ${arrowColor}/     /
      ${suitColor}|         \\  /          \\${bgColor}  ${arrowColor}*_    /
      ${suitColor}|          \\             \\${bgColor}   ${arrowColor}*_ /
      ${suitColor}|       |   \\       |     \\${bgColor}
      ${suitColor}\\       |   \\      |       |${bgColor}        ${textLayoutColor}**************
       ${suitColor}|       \\___|_____ |      |${bgColor}        ${textLayoutColor}*** ${textColor}STONKS ${textLayoutColor}***
        ${suitColor}\\                |""..    \\${bgColor}       ${textLayoutColor}**************
        ${suitColor}|\\               |   _/    |${bgColor}
        ${suitColor}| \\______________|""       |${bgColor}
        ${suitColor}|           ""|_____      /
        ${suitColor}                    """"""
        `);
};

module.exports = {
  showStonksGuy,
};

showStonksGuy();
