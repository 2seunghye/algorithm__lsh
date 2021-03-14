function solution(skill, skill_trees) {
  let count = 0;
  let arr = skill_trees;
  let newArr = arr.map((skillTree) => {
    let x = skillTree.split('').filter((str) => skill.includes(str));
    return x;
  });

  for (let i = 0; i < newArr.length; i++) {
    let status = true;
    for (let j = 0; j < newArr[i].length; j++) {
      if (newArr[i][j] !== skill[j]) {
        status = false;
        break;
      }
    }

    if (status == true) {
      count++;
    }
  }

  return count;

  // 찬영이가 고쳐준 코드

  // let answer = 0;
  // for (s of skill_trees) {
  //   let cur = 0;
  //   let check = true;
  //   for (c of s) {
  //     let result = skill.indexOf(c);

  //     if (result == cur) {
  //       cur++;
  //     } else if (result > cur) {
  //       check = false;
  //       break;
  //     } else if (result < cur) {
  //       continue;
  //     }
  //   }

  //   if (check) answer++;
  // }

  // console.log(answer);
}

solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']);
