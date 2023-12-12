/* const data = [
    "\"CBM-209298\",\"MX56G002ZF5\",,,\"SJ124117\",\"SAPLabelForm1.btw\",\"054845A\",\"30\",\"30\",\"30\",\"1\",\"30\",,,,\"1022855884\",\"MC20231202-0921\",\"1022855884\",\"0010\",\"01/12/25\",\"02/12/23\",\"021223-060\",,,,,,,\"MX\",,\"MCB55935\",,,,,\"MC20231202-0921\",,,,\"CBM-209298                         MX56G002ZF5  \",\"                 81-276-1787  MEX-TIJUANA       \",\"  20231202 20251201 Y N SMC23C2092100 30        \",\"        1 021223-060                        EA  \",\"30                EA  MC20231202-0921 1022855884\",\"   0010\",,,,\"R-Pb NoCr NoCd No4P\",\"Mexico.\",,,                            1\r",
    // ... (las demás cadenas de texto)
    "\"CBM-209298\",\"MX56G002ZF5\",,,\"SJ124117\",\"SAPLabelForm1.btw\",\"054845A\",\"30\",\"30\",\"30\",\"1\",\"30\",,,,\"1022855884\",\"MC20231202-0924\",\"1022855884\",\"0010\",\"01/12/25\",\"02/12/23\",\"021223-063\",,,,,,,\"MX\",,\"MCB55935\",,,,,\"MC20231202-0924\",,,,\"CBM-209298                         MX56G002ZF5  \",\"                 81-276-1787  MEX-TIJUANA       \",\"  20231202 20251201 Y N SMC23C2092400 30        \",\"        1 021223-063                        EA  \",\"30                EA  MC20231202-0924 1022855884\",\"   0010\",,,,\"R-Pb NoCr NoCd No4P\",\"Mexico.\",,,                            1\r",
    ""
  ];
  
  // Separar cada cadena por comas y eliminar las comillas
  const separatedData = data.map(item => item.split(',').map(s => s.replace(/"/g, '').trim()),);
  var arrayDeObjetos = separatedData.map((subarray)=> {
    return subarray.reduce((obj, elemento, indice)=> {
      obj[indice] = elemento;
      return obj;
    }, {});
  });
  
  // Mostrar el nuevo array de objetos
  console.log(arrayDeObjetos);
 */

  const data = [
    '1', 
      '"CBM-209298","MX56G002ZF5",,,"SJ124117","SAPLabelForm1.btw","054845A","30","30","30","1","30",,,,"1022855884","MC20231202-0922","1022855884","0010","01/12/25","02/12/23","021223-061",,,,,,,"MX",,"MCB55935",,,,,"MC20231202-0922",,,,"CBM-209298                         MX56G002ZF5  ","                 81-276-1787  MEX-TIJUANA       ","  20231202 20251201 Y N SMC23C2092200 30        ","        1 021223-061                        EA  ","30                EA  MC20231202-0922 1022855884","   0010",,,,"R-Pb NoCr NoCd No4P","Mexico.",,,                            1\r'
  ]