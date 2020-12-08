//Count IP Addresses

function ipsBetween(start, end) {
  const regex = /^(([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)\.){3}([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)$/;

  if (!regex.test(start) || !regex.test(end)) {
    return "To get IPs range, provide a couple of valid IPv4 adresses";
  }

  const octetListStart = start.split(".").reverse();
  const octetListEnd = end.split(".").reverse();

  return Math.abs(octetListStart.reduce((count, el, i) => {
    count += (octetListEnd[i] - el) * Math.pow(256, i);
    return count;
  }, 0));
}
