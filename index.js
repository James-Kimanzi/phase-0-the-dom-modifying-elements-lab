let main = document.getElementById ('main');

// console.log(main);

main.remove();

let newHeader = document.createElement('h1')
newHeader.id = 'victory'

newHeader.textContent = 'JAMES is the champion';

document.body.append(newHeader);



