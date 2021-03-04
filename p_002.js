function solution(s) {
  var answer = false;

  if ((s.length == 4 || s.length == 6) && s == parseInt(s)) {
    answer = true;
  }
  return answer;
}
