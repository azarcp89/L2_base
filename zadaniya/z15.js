function howManyTimes(time1, time2) {
  let d1 = new Date(time1.replace(' ', 'T'));
  let d2 = new Date(time2.replace(' ', 'T'));

  let total = 0;
  let t = new Date(d1);
  t.setMinutes(0, 0, 0); 

  while (t.getTime() < d2.getTime()) {
    let hour = t.getHours();
    let n = strikes(hour); 

    let boomStart = t.getTime();
    let boomEnd = boomStart + n * 1000;

    let from = Math.max(boomStart, d1.getTime());
    let to = Math.min(boomEnd, d2.getTime());
    if (to > from) total += (to - from) / 1000;

    let halfStart = boomStart + 30 * 60 * 1000;
    let halfEnd = halfStart + 1000;
    let fromH = Math.max(halfStart, d1.getTime());
    let toH = Math.min(halfEnd, d2.getTime());
    if (toH > fromH) total += (toH - fromH) / 1000;

    t.setHours(t.getHours() + 1);
  }

  return total;
}

function strikes(hour) {
  let h = hour % 12;
  if (h === 0) h = 12;
  return h;
}