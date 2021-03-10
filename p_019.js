// 형편없는 내 코드
// 수정해야 함

let bn = [];
let count = 0;
let comp = 0;
let temp = 0;

const binaryNumber = (n) => {
  while (n != 0) {
    bn.push(n % 2);
    n = Math.floor(n / 2);
  }
  console.log(bn);
};

binaryNumber(78);

const solution = (n) => {
  for (let i = 0; i < bn.length; i++) {
    if (bn[i] == 1) {
      count++;
    }
  }

  temp = count;
  count = 0;

  while (n++) {
    let m = n;

    while (m != 0) {
      if (m % 2 == 1) {
        comp++;
      }
      m = Math.floor(m / 2);
    }

    if (comp == temp) {
      return n;
    }
  }
};

solution(78);
