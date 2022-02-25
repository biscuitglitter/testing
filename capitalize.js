function capitalize(str) {
    let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return result;
  }
module.exports = capitalize;