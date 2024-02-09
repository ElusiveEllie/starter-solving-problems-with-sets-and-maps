function intersection(a, b) {
  const c = new Map();
  const d = new Set();
  for (let i = 0; i < a.length; i++) {
    c.set(a[i], true);
  }
  for (let i = 0; i < b.length; i++) {
    if (c.get(b[i])) {
      d.add(b[i]);
    }
  }
  return [...d];
}

module.exports = intersection;
