
function Person(name, email, phone, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }
  
  // Define methods for the Person class
  Person.prototype = {
    // Method to display personal details
    displayDetails: function() {
      console.log("Name: " + this.name);
      console.log("Email: " + this.email);
      console.log("Phone: " + this.phone);
      console.log("Address: " + this.address);
    },
  
    // Method to update email
    Email: function(newEmail) {
      this.email = newEmail;
      console.log("email updated successfully");
    },
  
    // Method to update phone number
    Phone: function(newPhone) {
      this.phone = newPhone;
      console.log("Phone number updated successfully.");
    },
  
    // Method to update address
    Address: function(newAddress) {
      this.address = newAddress;
      console.log("Address updated successfully.");
    }
  };
  
  
  const person1 = new Person(
    "hifad",
    "mr.hifad10@gmail.com",
    "123-456-7890",
    "135,main road,chennai"
  );
  
  // Display initial details
  person1.displayDetails();
  
  // Update email
  person1.updateEmail("mr.hifad10@gmail.com");
  
  // Update phone number
  person1.updatePhone("123-456-7890");
  
  // Update address
  person1.updateAddress("135,main road,chennai");
  
  // Display updated details
  person1.displayDetails();
  