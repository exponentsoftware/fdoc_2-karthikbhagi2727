/*this to print array of arrays*/
let array = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ];
  array.map((data,index)=>{
        console.log([data.toLowerCase(), data.substring(0,3), data.length])
  })