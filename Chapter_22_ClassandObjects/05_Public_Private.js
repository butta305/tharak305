
// private fields - #Hidden data
// public fields

class Credentials
{
   #apikey;
   user;

   constructor(apikey, user)
   {
     this.#apikey = apikey;
     this.user = user;
   }

   methodgetAutHeader()
   {
    return "Bearer " + this.#apikey;
   }
}

let cred = new Credentials("secret_key_122342", "admin");
console.log(cred.user);

const token = cred.methodgetAutHeader();
console.log(token);

// console.log(cred.apikey);   - undefined
// console.log(cred.#apikey);  - error , since it is private attribute

/* if private attributes(#apikey) are used outside of the Class, then 
 javascript gives error  */