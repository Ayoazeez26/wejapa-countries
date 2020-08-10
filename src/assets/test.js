var SIM_API_DATA = require("./data.json");

class Main {
  constructor() {
    console.clear();

    this.api_data = SIM_API_DATA;
  }

  iterateNames() {
    let countries = [];
    // const arrLength = this.api_data.length;
    this.api_data.forEach((el, key) => {
      countries.push({key: key, name: el.name});
    })
    return countries;
  }

  getValuesByKey(object, key,find ) {
    var values = [];

    function r(obj) {
      Object.keys(obj).forEach(function (k) {
        console.log(k.name)
        // if (Array.isArray(obj[k])) {
        //   obj[k].forEach(r);
        //   return;
        // }
        // if (typeof obj[k] === "object") {
        //   r(obj[k]);
        //   return;
        // }

        // if(obj[k] === find){
        //   console.log(true);
        // }else{
        //   console.log(false);
        // }
        // return false;

        
        // if (k === key) {
        //   values.push(obj[k]);
        //   // console.log([...obj.states]);
        // }else{
        //   return '';
        // }

        // k === key && !~values.push(obj[k]);
      });
    }

    // r(object);
    // console.dir(values);
  }
}

var test = new Main();
// const pageCount = SIM_API_DATA.document.children[0].children;
const pageCount = SIM_API_DATA;
console.log(test.iterateNames());

// test.getValuesByKey(pageCount, "name","Afghanistan");