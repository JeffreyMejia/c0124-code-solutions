interface RangeReport {
  total: number;
  odds: number[];
  even: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): RangeReport {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  const average = sum / range.length;

  const odd = [];
  const even = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }

  const report: RangeReport = {
    total: sum,
    odds: odd,
    even,
    range,
    average,
  };
  return report;
}

console.log('RangeReport:', getRangeReport);
