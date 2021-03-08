// 피보나치 수는 F(0) = 0, F(1) = 1일 때,
// 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 2 이상의 n이 입력되었을 때,
// n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

// https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  let answer = 0;
  let arr = [];

  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }

  answer = arr[n];

  return answer;
}
