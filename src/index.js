import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
   
   /*new Promise((resolve, reject) => {
	  return reject(new Error('No bears'));
	  
	  setTimeout(()=> {
	  console.log('Bears');
	  resolve("Bears,Beets, Battlestar Galactica"); 
   		},5000);
    
   })
   .then(quote=> {
	   setTimeout( ()=>{
		   console.log("quote:",quote);
	//console.log('Beets');
    //console.log('Battlestar galacctica');
	   },3000)
    	   
   })
   .catch(error => console.log('error', error));*/
        

       
//ReactDOM.render(<App/>, document.getElementById('root'));

/*class Animal {
	constructor(name,age) {
		this.name =name;
		this.age = age;
		
	}
	speak() {
		console.log('I am ', this.name, 'am I am ',this.age,' years old');
	}
}

const animal1 =  new Animal('Simba',3);
animal1.speak();

console.log(animal1);


class Lion extends Animal {
	constructor(name,age,color,speed) {
		super(name, age);
		this.color = color;
		this.speed = speed;
	}
	roar() {
		console.log('roar! I have ',this.color, ' and i can run ', this.speed, ' miles per hour');
	}
}

const lion1 =  new Lion('Mufasa' , 20, 'golden', 25);
lion1.speak();
lion1.roar();
console.log(lion1);
*/