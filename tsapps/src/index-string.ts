//strings:
let firstName = "Subramanian";
let lastName = 'Murugan'
console.log("Name " + firstName  + " " + lastName);
console.log("Name " , firstName  , " " , lastName);
//Template literals and string interpolation
console.log(`Name ${firstName} ${lastName}`);
let title = 'IBM'
let htmlPage =`
    <html>
      <head>
       <title>
          ${title}
       </title>
     </head>
     <body>
      <h1>Welcome</h1>
     </body>
     </html>
`;
console.log(htmlPage);
