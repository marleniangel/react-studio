import Button from "./Button";

// TODO: create a component that displays a single bakery item

export default function SingleBakeryItem(props) {
    return (
      <div  className="BakeryItem">
        <div>
        <img src={props.image}  />
        </div>
        {props.name}, {props.description}, {props.price}
        <Button cartItems={props.cart} price={props.price} updateCart={props.updateCart} name={props.name} updatePrice={props.updatePrice} currPrice={props.currPrice}/>
      </div>
     
       
    );
  }


  