import React, { useState } from "react";
import { Button, Card, Modal, Image, CloseButton } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { greetingCardsList } from "./greetingCards-data.js";

const GreetingCard = () => {
  const navigate = useNavigate();
  const { category, name, id } = useParams();
  /*  console.log(useParams());  */

  const [imagePath, setImagePath] = useState("");
  const [displayDiv, setDisplayDiv] = useState("none");

  const cartItem = JSON.parse(localStorage.getItem("cart-item"))
    ? JSON.parse(localStorage.getItem("cart-item")).cartItem
    : {};
 
  const showSelectedCardHandler = (item) => {
    setImagePath(item);
    setDisplayDiv("block");
    window.scroll(0,0)
  };

  cartItem.greetingCard = imagePath;
  localStorage.setItem("cart-item", JSON.stringify({ cartItem }));

  const submitHandler = () => {
    let cartList = [];
    if (localStorage.getItem("cart-list")) {
      cartList = JSON.parse(localStorage.getItem("cart-list"));
      if (id) {
        const indexItem = cartList.findIndex((obj) => obj.item_id === id);
        cartList[indexItem].greetingCard = imagePath;
        localStorage.setItem("cart-list", JSON.stringify(cartList));
        return navigate("/shopping-cart");
      }
    }
    cartList.push(cartItem);
    localStorage.setItem("cart-list", JSON.stringify(cartList));
    window.scrollTo(0, 0);
    navigate("/shopping-cart");
  };

  return (
    <div style={{paddingBottom:"80px", display:"flex", alignItems:"center", flexDirection:"column"}}>
      <div>
        <div className="greetings-container">
        <h3>
            Select eGreeting card{" "}
            <strong style={{ color: "grey" }}>(optional)</strong>
          </h3>
        </div>
     
          <div
            className="select-greet greetings-container"
            style={{
              display: `${displayDiv}`,
              paddingBottom:"20px"
            }}
          >
            <Modal.Header><CloseButton  onClick={() => {
              setDisplayDiv("none");
              setImagePath("");
            }} style={{ padding:"10px"}}/></Modal.Header>
            <Modal.Body className="grid-example">
              <Image className="greet-img" src={imagePath}></Image>
            </Modal.Body>
          </div>
          <Button
        variant="danger"
        style={{
          background: "#fedea8fa",
          padding: "10px 10px",
          fontWeight: "bold",
          width: "50%",
          margin: "20px auto",
          color: "black",
          borderRadius: "15px",
          border: "2px solid #ff9b9b",
          boxShadow: "#ff9b9b 4px 2px",
        }}
        onClick={submitHandler}
      >
        {id ? <strong>Proceed to Cart</strong> : <strong>Next Step</strong>}
      </Button>

      </div>

      {greetingCardsList.map((item,index)=>(
        <div
        key={index}
        className="greetings-container"
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "25px",
          width: "95%",
          border: "#fedea8 4px solid",
        }}
      >
        <h4 style={{margin:"20px 0"}}>{item.category} Greeting</h4>
        <div  style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "95%"
        }}>
        {item.imagePath.map((el, idx) => (
          <Card.Img
            key={idx}
            src={el}
            style={{
              maxWidth: "150px",
              height: "150px",
              padding: "5px",
              objectFit: "cover",
              margin: "5px",
              border: "#fedea8 2px solid",
              borderRadius: "15px"
            }}
            onClick={() => showSelectedCardHandler(el)}
          />
        ))}
        </div>
      </div>
      ))}
      
  
    </div>
  );
};

export default GreetingCard;
