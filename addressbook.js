
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
    get firstName() {return this._firstName};
    set firstName(firstName){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(firstName)){this._firstName = firstName;}
        else{throw 'Given first name is in wrong format ,the format should like this eg."Vij"@minimum 3 character,@first in upper case';}}
    get lastName() {return this._lastName}
    set lastName(lastName){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName)){this._lastName = lastName;}
        else{throw 'Given Last Name is in wrong format ,the format should like this eg."Kum"@minimum 3 character,@first in upper case';}}
    get address(){return this._address}
    set address(address){let addRegex = RegExp('^[A-Z]{1}[a-z]{3,}$'); 
        if (addRegex.test(address)){this._address = address;}
        else{throw 'Address is in wrong format ,@minimum 4 character,@first in upper case';}}
    get city() {return this._city;}
    set city(city){let cityRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(cityRegex.test(city)){this._city = city;}
        else{throw 'City is in wrong format,eg.-"Patna"@minimum 4 character,@first in upper case';}}
    get state(){return this._state}
    set state(state){let stateRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(stateRegex.test(state)){this._state = state;}
        else{throw 'state is in wrong format,eg.-"Bihar"@minimum 4 character,@first in upper case';}}
    get zip(){return this._zip}
    set zip(zip){let zipRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if(zipRegex.test(zip)){this._zip = zip;}
        else{throw 'zip is in wrong format,eg.-"801304/801 304"@should be 6 digit,@digit only';}}
    get phoneNumber(){return this._phoneNumber}
    set phoneNumber(phoneNumber){let phoneRegex = RegExp('^[6-9]{1}[0-9]{9}$');
        if(phoneRegex.test(phoneNumber)){this._phoneNumber = phoneNumber;}
        else{throw 'Phone Number is in wrong format,eg.-"8847287654"@should be 10 digit,@digit only,@first digit between(6-9)';}}
        get email(){return this._email}
        set email(email){let phoneRegex = RegExp('^[A-Za-z0-9._]+@[A-Za-z0-9]+.[a-z]{2,5}$');
            if(phoneRegex.test(email)){this._email = email;}
            else{throw 'email is in wrong format';}}
    toString()
    {
       return "First Name: "+this.firstName+", Last Name: "+this.lastName+", Address: "+this.address+", city: "+this.city+", State: "+this.state+
        ", Zip Code: "+this.zip+", Phone Number: "+this.phoneNumber+", Email: "+this.email;
    }
}
let contact = new contactFunc("Vij","Kumar","Jankipuram","Lucknow","Bihar","768 990",8847285433,"Vijay@gmail.com")
console.log(contact.toString());