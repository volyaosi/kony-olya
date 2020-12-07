//Count IP Addresses

function ipsBetween(ipStr0, ipStr1) {
  const ipArr0 = ipStr0.split(".").reverse();
  const ipArr1 = ipStr1.split(".").reverse();

  return ipArr0.reduce((count, el, i) => {
    count += (ipArr1[i] - el) * Math.pow(256, i);
    return count;
  }, 0);
}
