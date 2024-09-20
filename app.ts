interface ICity {
    name: string;
    vehicles: IVehicle[];
    addVehicle(vehicle: IVehicle): void;
}

interface IUser {
    name: string;
    surname: string;
    email: string;
    favouriteTypeOfPayment: string;
    bookVehicle(vehicle: IVehicle): void;
}

interface IVehicle {
    type: string;
    id: string;
    status: string;
    assignUser(user: IUser): void;
}



class Bike implements IVehicle {
    type: string;
    id: string;
    status: string;
  
    constructor(id: string) {
      this.type = 'Bike';
      this.id = id;
      this.status = 'available';
    }
  
    assignUser(user: IUser): void {
      this.status = 'busy';
    }
}

class ElectricScooter implements IVehicle {
    type: string;
    id: string;
    status: string;
  
    constructor(id: string) {
      this.type = 'Electric Scooter';
      this.id = id;
      this.status = 'available';
    }
  
    assignUser(user: IUser): void {
      this.status = 'busy';
    }
}

class Moped implements IVehicle {
    type: string;
    id: string;
    status: string;
  
    constructor(id: string) {
      this.type = 'Moped';
      this.id = id;
      this.status = 'available';
    }
  
    assignUser(user: IUser): void {
      this.status = 'busy';
    }
}

class User implements IUser {
    name: string;
    surname: string;
    email: string;
    favouriteTypeOfPayment: string;
  
    constructor(name: string, surname: string, email: string, favouriteTypeOfPayment: string) {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.favouriteTypeOfPayment = favouriteTypeOfPayment;
    }
  
    bookVehicle(vehicle: IVehicle): void {
      if (vehicle.status === 'available') {
        vehicle.assignUser(this);
      } else {
        console.log('Vehicle is not available');
      }
    }
}  

class City implements ICity {
    name: string;
    vehicles: IVehicle[];
  
    constructor(name: string) {
      this.name = name;
      this.vehicles = [];
    }
  
    addVehicle(vehicle: IVehicle): void {
      this.vehicles.push(vehicle);
    }
}

let bike = new Bike('1');
let scooter = new ElectricScooter('2');
let moped = new Moped('3');

let user = new User('John', 'Doe', 'john.doe@example.com', 'Credit Card');

let city = new City('New York');

city.addVehicle(bike);
city.addVehicle(scooter);
city.addVehicle(moped);

user.bookVehicle(bike);