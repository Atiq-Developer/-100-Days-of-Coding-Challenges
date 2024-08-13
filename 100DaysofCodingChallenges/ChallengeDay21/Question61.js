// // Enums for vehicles
var vechicleType;
(function (vechicleType) {
    vechicleType[vechicleType["car"] = 0] = "car";
    vechicleType[vechicleType["Truck"] = 1] = "Truck";
    vechicleType[vechicleType["motorcycles"] = 2] = "motorcycles";
})(vechicleType || (vechicleType = {}));
console.log(vechicleType.Truck);
export {};
