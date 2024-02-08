const arrayOfObjects = [
    { name: "Object 1", value: 10 },
    { name: "Object 2", value: 20 },
    { name: "Object 3", value: 30 },
    { name: "Object 4", value: 40 },
    { name: "Object 5", value: 50 }
  ];


  let test = arrayOfObjects.map((item)=>{ if (item.value >1) {item.selected = true}
  return item})


  console.log(test)