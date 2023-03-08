const get = (obj, path) => {
  // replace the square brackets with the period operator
  path = path.replaceAll('[', '.');
  path = path.replaceAll(']', '');
    console.log( path.split('.'))
  // split the keys and get it filtered on the truthy values
  const keys = path.split('.').filter(Boolean);
console.log(keys)
  // create a reference of the input object
  let current = obj;
   
  // traverse the key
  for(let key of keys){
    current = current[key];
    
    // if an invalid key
    // return undefined
    if(current === undefined){
      return undefined;
    }
  }
  
  // return the value
  return current;
};

// get({ developer: "Software Engineer" }, "developer"); // => 'Software Engineer'
// get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName"); //=>'Cruz
// get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"); //=>0
// get([{ developer: "Tom" }, [0, null]], "[1][1]"); //=>null
get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]");