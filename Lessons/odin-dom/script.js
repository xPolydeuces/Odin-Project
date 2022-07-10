const container = document.querySelector('#container');

const firstParagraph = document.createElement('p');
firstParagraph.classList.add('firstParagraph');
firstParagraph.style.cssText = 'color:red';
firstParagraph.textContent = 'Hey I\'m red!';

const headingThree = document.createElement('p');
headingThree.classList.add('headingThree');
headingThree.style.cssText = 'color:blue';
headingThree.textContent = 'I\'m a blue h3!';

container.appendChild(firstParagraph);
container.appendChild(headingThree);

const parentDiv = document.createElement('div');
parentDiv.classList.add('parentDiv');
parentDiv.style.cssText = 'border: black solid; background-color: pink;';

const childHeading = document.createElement('h1');
childHeading.classList.add('childHeading');
childHeading.textContent = 'I\'m in a div';

const childParagraph = document.createElement('p');
childHeading.classList.add('childParagraph');
childHeading.textContent = 'ME TOO!';

parentDiv.appendChild(childHeading);
parentDiv.appendChild(childParagraph);
container.appendChild(parentDiv);