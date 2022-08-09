let contactArray = Array();
class contactFunc {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    get firstName() { return this._firstName };
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(firstName)) { this._firstName = firstName; }
        else { throw 'Given first name is in wrong format ,the format should like this eg."Vij"@minimum 3 character,@first in upper case'; }
    }
    get lastName() { return this._lastName }
    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(lastName)) { this._lastName = lastName; }
        else { throw 'Given Last Name is in wrong format ,the format should like this eg."Kum"@minimum 3 character,@first in upper case'; }
    }
    get address() { return this._address }
    set address(address) {
        let addRegex = RegExp('^[A-Z]{1}[a-z0-9]{3,}$');
        if (addRegex.test(address)) { this._address = address; }
        else { throw 'Address is in wrong format ,@minimum 4 character,@first in upper case'; }
    }
    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (cityRegex.test(city)) { this._city = city; }
        else { throw 'City is in wrong format,eg.-"Patna"@minimum 4 character,@first in upper case'; }
    }
    get state() { return this._state }
    set state(state) {
        let stateRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (stateRegex.test(state)) { this._state = state; }
        else { throw 'state is in wrong format,eg.-"Bihar"@minimum 4 character,@first in upper case'; }
    }
    get zip() { return this._zip }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if (zipRegex.test(zip)) { this._zip = zip; }
        else { throw 'zip is in wrong format,eg.-"801304/801 304"@should be 6 digit,@digit only'; }
    }
    get phoneNumber() { return this._phoneNumber }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp('^[6-9]{1}[0-9]{9}$');
        if (phoneRegex.test(phoneNumber)) { this._phoneNumber = phoneNumber; }
        else { throw 'Phone Number is in wrong format,eg.-"8847287654"@should be 10 digit,@digit only,@first digit between(6-9)'; }
    }
    get email() { return this._email }
    set email(email) {
        let phoneRegex = RegExp('^[A-Za-z0-9._]+@[A-Za-z0-9]+.[a-z]{2,5}$');
        if (phoneRegex.test(email)) { this._email = email; }
        else { throw 'email is in wrong format'; }
    }
    toString() {
        return "First Name: " + this.firstName + ", Last Name: " + this.lastName + ", Address: " + this.address + ", city: " + this.city + ", State: " + this.state +
            ", Zip Code: " + this.zip + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
    }
}
AddContact("Vijay", "Kumar", "Jankipuram", "Lucknow", "Bihar", "768 990", 8847285433, "Vijay@gmail.com")
AddContact("Rahul", "Kumar", "Hilsa", "Nalanda", "Bihar", 801302, 9988776655, "rahul@gmail.com")
AddContact("Shiwani", "Gupta", "Sector48", "Gurugram", "Haryana", "768 990", 9947285433, "shiwani@gmail.com")
function AddContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    let contact = new contactFunc(firstName, lastName, address, city, state, zip, phoneNumber, email);
    if (contactArray.length >= 1) {
        let checkContact = contactArray.filter((contact) => contact.firstName == firstName && contact.lastName == lastName);
        if (checkContact.length > 0) {
            console.log("exist")
            return;
        }
    }
    contactArray.push(contact);
    console.log("added Succesfully...");

}

function DisplayContact() {
    if (contactArray.length != 0) {
        let count = 0;
        contactArray.forEach(contact => {
            count++;
            console.log(`Contact ${count} :-\n` + contact.toString());
        }
        );
    }
    else {
        console.log(" Addressbook is empty!!");
    }
}
DisplayContact();
function FindAndEditContact() {
    try {
        let name = "Vijay";
        contactArray.forEach((contat) => {
            if (contat._firstName == name) {
                console.log(contat.toString());
                console.log("\n1: First Name \n2: Last Name \n3: Address \n4: City \n5: State \n6: Zipcode \n7: Phone Number \n8: Email Address")
                let choice = 1;
                switch (choice) {
                    case 1:
                        let newFirstName = "Yadav"
                        contat._firstName = newFirstName;
                        console.log("Edit sucessfull")
                        break;
                    case 2:
                        let newLastName = "Ravi"
                        contat._lastName = newLastName;
                        console.log("Edit sucessfull")
                        break;
                    case 3:
                        let newAddress = "Banur"
                        contat._address = newAddress;
                        console.log("Edit sucessfull")
                        break;
                    case 4:
                        let newCity = "Chandigarh"
                        contat._city = newCity;
                        console.log("Edit sucessfull")
                        break;
                    case 5:
                        let newState = "Punjab"
                        contat._state = newState;
                        console.log("Edit sucessfull")
                        break;
                    case 6:
                        let newZip = 140601
                        contat._zip = newZip;
                        console.log("Edit sucessfull")
                        break;
                    case 7:
                        let newPhoneNum = 9966775544;
                        contat._phoneNumber = newPhoneNum;
                        console.log("Edit sucessfull")
                        break;
                    case 8:
                        let newEmailId = "yadav@gmail.com";
                        contat._email = newEmailId;
                        console.log("Edit sucessfull")
                        break;
                    default:
                        console.log("\n> Invalid Option!!");
                        break;
                }

            }
        });
    } catch (ex) {
        console.error(ex);
    }
}
FindAndEditContact();
DisplayContact();
function removeContact() {
    try {
        let name = "Yadav"
        const index = contactArray.findIndex((contact) => contact.firstName == name);
        if (index != -1)
            contactArray.splice(index, 1);
    } catch (ex) {
        console.error(ex);
    }
}
//removeContact();
DisplayContact();
function findNumberOfContact() {
    let num = contactArray.reduce((contact) => contact + 1, 0);
    console.log("Number of contact in address Book: " + num)
}
findNumberOfContact();
function findContactByCityOrStateName() {
    let pcityOrState = "Bihar";
    let find = contactArray.filter((contact) => contact.city == pcityOrState || contact.state == pcityOrState).map(contact => contact.toString());
    console.log(find)
}
findContactByCityOrStateName()
function countOfContactsByCityOrState() {
    let pcityOrState = "Bihar";
    let count = contactArray.filter((contact) => contact.city == pcityOrState || contact.state == pcityOrState).reduce((contact) => contact + 1, 0)
    console.log(count)
}
countOfContactsByCityOrState();
function sortAlphabatically() {
    let sorti = contactArray.sort((x, y) => x.firstName > y.firstName ? 1 : -1).map((contact) => contact.toString());
    console.log(sorti)
}
sortAlphabatically()
function sortByStateOrCityorZip() {
    try {
        console.log("\n1: City \n2: State \n3: zip")
        let choice = 3;
        switch (choice) 
        {
            case 1:
                let sorti = contactArray.sort((x, y) => x.city > y.city ? 1 : -1).map((contact) => contact.toString());
                console.log(sorti)
                break;
            case 2:
                let sortbyState = contactArray.sort((x, y) => x.state > y.state ? 1 : -1).map((contact) => contact.toString());
                console.log(sortbyState)
                break;
            case 3:
                let sortbyzip = contactArray.sort((x, y) => x.zip > y.zip ? 1 : -1).map((contact) => contact.toString());
                console.log(sortbyzip)        
                break;
            default:
            console.log("Invalid input")
            break;    
        }
    }
    catch(ex) {
        console.error(ex);
    }
}
sortByStateOrCityorZip()