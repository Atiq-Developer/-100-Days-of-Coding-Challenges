// 🚀Challenge Day 27: start coding!🚀
function takingObject(carproperties: { [key: string]: any }) {
  for (let propertyandvalues in carproperties) {
    console.log(`${propertyandvalues}: ${carproperties[propertyandvalues]}`);
  }
}

takingObject({ name: "Honda Civic", model: "orial civic", year: "2023" });
