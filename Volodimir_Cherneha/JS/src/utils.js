export const split = (arr, i, j) => {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};

export const  getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

export const getRandomArr = (n, from = 0, to = 100) => Array(n)
.fill()
.map( () =>  getRandomInt(from, to))