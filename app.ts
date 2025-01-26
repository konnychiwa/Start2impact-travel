type VehicleStatus = 'available' | 'busy';

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
    bookVehicle(vehicle: IVehicle): boolean;
}

interface IVehicle {
    type: string;
    id: string;
    status: VehicleStatus;
    currentUser?: IUser;
    assignUser(user: IUser): void;
    releaseUser(): void;
}

class Bike implements IVehicle {
    type: string;
    id: string;
    status: VehicleStatus;
    currentUser?: IUser;

    constructor(id: string) {
        this.type = 'Bike';
        this.id = id;
        this.status = 'available';
    }

    assignUser(user: IUser): void {
        if (this.status === 'available') {
            this.status = 'busy';
            this.currentUser = user;
        } else {
            console.log(`Vehicle ${this.id} is already busy.`);
        }
    }

    releaseUser(): void {
        if (this.status === 'busy') {
            this.status = 'available';
            console.log(`Vehicle ${this.id} is now available.`);
            this.currentUser = undefined;
        }
    }
}

class ElectricScooter implements IVehicle {
    type: string;
    id: string;
    status: VehicleStatus;
    currentUser?: IUser;

    constructor(id: string) {
        this.type = 'Electric Scooter';
        this.id = id;
        this.status = 'available';
    }

    assignUser(user: IUser): void {
        if (this.status === 'available') {
            this.status = 'busy';
            this.currentUser = user;
        } else {
            console.log(`Vehicle ${this.id} is already busy.`);
        }
    }

    releaseUser(): void {
        if (this.status === 'busy') {
            this.status = 'available';
            console.log(`Vehicle ${this.id} is now available.`);
            this.currentUser = undefined;
        }
    }
}

class Moped implements IVehicle {
    type: string;
    id: string;
    status: VehicleStatus;
    currentUser?: IUser;

    constructor(id: string) {
        this.type = 'Moped';
        this.id = id;
        this.status = 'available';
    }

    assignUser(user: IUser): void {
        if (this.status === 'available') {
            this.status = 'busy';
            this.currentUser = user;
        } else {
            console.log(`Vehicle ${this.id} is already busy.`);
        }
    }

    releaseUser(): void {
        if (this.status === 'busy') {
            this.status = 'available';
            console.log(`Vehicle ${this.id} is now available.`);
            this.currentUser = undefined;
        }
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

    bookVehicle(vehicle: IVehicle): boolean {
        if (vehicle.status === 'available') {
            vehicle.assignUser(this);
            console.log(`Vehicle ${vehicle.id} has been booked by ${this.name}.`);
            return true;
        } else {
            console.log(`Vehicle ${vehicle.id} is not available.`);
            return false;
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
        console.log(`Vehicle ${vehicle.id} (${vehicle.type}) added to ${this.name}.`);
    }
}

// Instances of object Vehicles
const bike1 = new Bike('B1');
const bike2 = new Bike('B2');
const scooter1 = new ElectricScooter('S1');
const scooter2 = new ElectricScooter('S2');
const moped1 = new Moped('M1');

// Instances of object Users
const user1 = new User('Batman', 'Wayne', 'batman.wayne@example.com', 'Credit Card');
const user2 = new User('Robin', 'Grayson', 'robin.grayson@example.com', 'PayPal');

// Creation of a new city and adding vehicles
const Milan = new City('Milan');
Milan.addVehicle(bike1);
Milan.addVehicle(bike2);
Milan.addVehicle(scooter1);
Milan.addVehicle(scooter2);
Milan.addVehicle(moped1);

// Test della logica di prenotazione
console.log('--- Testing bookings ---');
user1.bookVehicle(bike1); // Booking succesful
user2.bookVehicle(bike1); // Failed because already busy
bike1.releaseUser(); // The vehicle is now awailable
user2.bookVehicle(bike1); // Booking succesful

// Added a new vehicle
const bike3 = new Bike('B3');
Milan.addVehicle(bike3);

console.log('--- Available vehicles in Milan ---');
Milan.vehicles.forEach(vehicle => {
    console.log(`${vehicle.type} (${vehicle.id}): ${vehicle.status}`);
});
