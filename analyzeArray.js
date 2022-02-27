const analyzeArray = (array) => {
  const orderArray = (array) => {
    return array.sort((a, b) => a > b ? 1 : -1);
  }
  let min = orderArray(array)[0]
  let max = orderArray(array).at(-1)
  let length = orderArray(array).length
  let average = Math.trunc((min + max) / 2)
  return {
    average: parseInt(`${average}`),
                min: parseInt(`${min}`),
                max: parseInt(`${max}`),
                length: parseInt(`${length}`)
          };
  };

module.exports = analyzeArray;