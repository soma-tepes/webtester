const data = {
    0: { 
      0: '"CBM-204956"',
      1: '"MX70B02ZHAT"',
    },
    1:{
        0: '"CBM-203075"',
        1: '"MDatameabve"',
    }
}

const dataArray = Object.entries(data).map(([key, value]) => value);

const array = dataArray.map(e=>e)

console.log(array)
