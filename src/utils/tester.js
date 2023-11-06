







let was = ' "CBM-196726","MX68A02HQ1R150",,,"SJ117594","PCLabel_withBox.btw","24975","1","1","1","1",,,,,"1021147971","MC20230112-0863","1021147971","0010","11/01/25","12/01/23","120123-002",,,,,,,"MX",,"MCB18",,,,,"MC20230112-0863",,,,"CBM-196726                         MX68A02HQ1R15","0                81-276-1787  MEX-TIJUANA       ","  20230112 20250111 Y N SMC231C086300 0.007     ","        1 120123-002                        ROL ","1                 EA  MC20230112-0863 1021147971","   0010",,,,"R-Pb NoCr NoCd No4P","Mexico.",,,                            1'

const parameter = was.split(",").filter(e=>e)

const objet  = Object.assign({},parameter)

for (let clave in objet) {
    objet[clave] = objet[clave].replace(/"/g, '').trim();
}

console.log(objet)

console.log(Object.keys(objet).length;)