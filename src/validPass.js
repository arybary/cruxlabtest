export default async function validPass(textPassword) {
  const passFormatOfValid = textPassword.split('\n').map(el => {
    const strPass = el.split(' ');
    const [minSymbolOfPass, maxSymbolOfPass] = strPass[1].slice(0, -1).split('-');
    const amountSymbolOfPass = strPass[2].split(strPass[0]).length - 1;

    return {
      password: strPass[2],
      valid:
        amountSymbolOfPass >= Number(minSymbolOfPass) &&
        amountSymbolOfPass <= Number(maxSymbolOfPass),
    };
  });

  return passFormatOfValid;
}
