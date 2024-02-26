'use strict';
function getRangeReport(start, end) {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  let average = sum / range.length;
  let odd = [];
  let even = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  const report = {
    total: sum,
    odds: odd,
    even: even,
    range: range,
    average: average,
  };
  return report;
}
