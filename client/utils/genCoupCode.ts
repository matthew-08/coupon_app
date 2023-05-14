const genCouponCode = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let returnCode = '';
  for (let i = 0; i < 4; i++) {
    if (i <= 2) {
      returnCode += Math.floor(Math.random() * 9 + 1).toString();
    } else {
      returnCode += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
  }
  console.log(returnCode);
  return returnCode;
};

export { genCouponCode };
