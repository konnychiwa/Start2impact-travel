// Vehicle
interface IVehicle {
    assignUser: any;
    type: string;
    ID: number;
    status: string;
    user?: IUser;
}

class Vehicle implements IVehicle {
    type: string;
    ID: number;
    status: string;
    user?: IUser;

    constructor(type: string, ID: number, status: string) {
        this.type = type;
        this.ID = ID;
        this.status = status;
        this.user = undefined;
    }

    assignUser(user: IUser): void {
        if (this.status === "available") {
            this.user = user;
            this.status = "busy";
        }
    }
}


// User
interface IUser {
    name: string;
    surname: string;
    email: string;
    favouritePayment: string;
    vehicle?: IVehicle;
}

class User implements IUser {
    name: string;
    surname: string;
    email: string;
    favouritePayment: string;
    vehicle?: IVehicle;

    constructor(name: string, surname: string, email: string, favouritePayment: string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.favouritePayment = favouritePayment;
    }

    bookVehicle(vehicle: IVehicle): void {
        if (this.favouritePayment === "paid" && vehicle.status === "available") {
            vehicle.assignUser(this);
            this.vehicle = vehicle;
        }
    }
}

// City
interface ICity {
    name: string;
    vehicles: IVehicle[];
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

    showAvailableVehicle(): void {
        console.log("The available vehicle are: ");
        for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].status === "available") {
                console.log(this.vehicles[i]);
            }
        }
    }
}

// Tests
var vehicle1 = new Vehicle("bike", 1, "available");
var vehicle2 = new Vehicle("bike", 4, "busy");
var vehicle3 = new Vehicle("bike", 7, "available");

var vehicle4 = new Vehicle("scooter", 2, "busy");
var vehicle5 = new Vehicle("scooter", 5, "available");
var vehicle6 = new Vehicle("scooter", 8, "busy");

var vehicle7 = new Vehicle("moped", 3, "available");
var vehicle8 = new Vehicle("moped", 6, "busy");
var vehicle9 = new Vehicle("moped", 9, "available");


var user1 = new User("John", "Doe", "john.doe@example.com", "card");
var user2 = new User("Jane", "Doe", "jane.doe@example.com", "cash");
var user3 = new User("Bob", "Smith", "bob.smith@example.com", "paypal");


var city = new City("Budapest");
city.addVehicle(vehicle1);
city.addVehicle(vehicle2);
city.addVehicle(vehicle3);
city.addVehicle(vehicle4);
city.addVehicle(vehicle5);
city.addVehicle(vehicle6);
city.addVehicle(vehicle7);
city.addVehicle(vehicle8);
city.addVehicle(vehicle9);

user1.bookVehicle(vehicle1);
user2.bookVehicle(vehicle2);
user3.bookVehicle(vehicle5);
