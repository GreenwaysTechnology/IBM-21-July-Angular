//private : variables and methods

class Auth {
    private password:string ="abcd000"

    private generatePassword() {
        return 'abcdbc'
    }
}
let auth = new Auth()
//console.log(auth.password)
console.log(auth.generatePassword())