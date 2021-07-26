
function getName(): string {
    return "SUbramanian"
}
console.log(getName())

function getValue(): number {
    return 100
}
console.log(getValue())

function doStuff(): void {
    //return "hello"; //error
    return; //void -undefined
}
function getId(): string | number {
   //return 10 ;
   return "100"
   //return true;
}