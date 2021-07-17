import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Button2 from "./Button2";
import Card from "./card";
import UserCard from "./UserCard.js";

function App() {

  let products = {

    "Title" : "Animal",
    "Description" : "this is also a living thing and they can all breath",
    "price" : 3000,
};
const  handleProduct = ()=>{
  alert(`${products.price}  is the amount for dog as an ${products.Title}`)
} 
 const user ={
            'name': 'Blessing Ogueh',
            'age': 20,
            'height': '67cm'
 }

  return (
    <div className="App">

 
 <Button text = "learn more"/>
 <Button text = "Discover more"/>
 
 <Button2 text ="dgaiopa"/>
 <UserCard name = {user.name} height = {user.height}   age = {user.age}/>
  <Card myProduct = {products}  myClick = {handleProduct}/>
  


    
    </div>
  );
}

export default App;
