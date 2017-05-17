var presidents = ['George Washington', 'Thomas Jefferson', 'James Madison','James Monroe','Andrew Jackson','Martin Van Buren', 'Zachary Taylor', 'Abraham Lincoln', 'Andrew Johnson','Theodore Roosevelt', 'Woodrow Wilson','John Kennedy','Richard Nixon','Gerald Ford','Jimmy Carter','Ronald Reagan','Bill Clinton','Herbert Hoover','Calvin Coolidge','Grover Cleveland'];


function chooseWord (presidents) {

    return presidents[Math.floor(Math.random() * presidents.length)];
    
} 

console.log("pick names working");


var wordLength = presidents.length;
var underscores = '';
for(i=0; i<wordLength; i++) {
    underscores = underscores + "_ ";

}
document.getElementById("demo").innerHTML = underscores;
console.log(underscores);

