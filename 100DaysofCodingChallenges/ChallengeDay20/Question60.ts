function createUserProfile(name: string, age: number) {
  // This function creates and returns a user profile
  return {
    name: name,
    age: age,
    // Method to tell the user's name
    getName: function () {
      return `User's name is ${this.name}.`;
    },
    // Method to tell the user's age
    getAge: function () {
      return `User is ${this.age} years old.`;
    },
  };
}

// Automatically create a user profile
let userProfile = createUserProfile("Atiq", 23);

// Now the profile can tell you the user's name and age
console.log(userProfile.getName());
console.log(userProfile.getAge());
