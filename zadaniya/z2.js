function ipv4Parser(ip, subnet) {
  let ipParts = ip.split('.');
  let maskParts = subnet.split('.');

  let networkParts = [];
  let hostParts = [];

  for (let i = 0; i < 4; i++) {
    let ipOctet = Number(ipParts[i]);
    let maskOctet = Number(maskParts[i]);

    let networkOctet = ipOctet & maskOctet;
    let hostOctet = ipOctet & (255 - maskOctet);

    networkParts.push(networkOctet);
    hostParts.push(hostOctet);
  }

  return [networkParts.join('.'), hostParts.join('.')];
}