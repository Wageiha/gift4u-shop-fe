import React from "react";
import "./card.css";

const AboutUs = () => {
  const style = {
    padding: "30px",
    TextAlign: "justified",
    fontSize: "24px"
  };

  const style2 = {
    width: "400px",
    height: "300px",
margin:"0 0 30px"
    // flexDirection: "column",
    // marginTop: "5px",
  };

  const style3 = {
    padding: "30px",
    TextAlign: "justified",
    fontSize: "18px",
    fontStyle: "italic"
  };

  return (
    <div style={{ width: "80%", margin: "30px auto 80px" }}>
      <h1>About us</h1>

      <div
        style={{
          border: "3px solid royalblue",
          padding: "20px",
          fontSize: "18px",
          fontStyle: "italic",
        }}
      >
        {" "}
        <strong /* className="col-md-4" */ /* style={style3} */>
          Please note that Gift4U is a tool specifically designed for the
          purpose of the final project at DCI and not for commercial use.
        </strong>
      </div>
      <p className="card-container" style={style}>
        Finding the perfect pair of gifts for that special someone can be
        difficult. Why not give them gift cards? We decided to create a tool
        that is pleasant to navigate and easy to use, capable of answering the
        question that everyone has asked themselves at least once in their life
        "what to give as a gift". Gift4u.com is the leading gift card mobile
        application, and it is our mission to provide smiles by offering gift
        cards and custom greetings. We bring a digital assistant to issue
        prepaid cards & gift cards directly to you. Wherever you are, whenever
        you need them, looking for subscriptions, games, shopping vouchers,
        choose from a wide variety of vendors and buy your eGift cards online
        with fast email delivery. PERFECT FOR ANY SITUATION, this the easiest
        way to send rewards, payouts, and incentives. The recipient can redeem
        these cards in any of our listed shops.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div style={{ alignSelf: "center" }}>
          <img
            style={style2}
            src="/wwwgift4ucom.png"
            alt="Gift4U voucher"
            /* className="col-md-3" */
          />
        </div>

        <p  style={{fontSize:"18px"}}>
          The thoughtfulness of a gift card with the convenience and flexibility
          of money, treat friends and family to a 100% satisfaction guaranteed.
          You can find cards in any amount up to five hundred euro (€200). So go
          Ahead, make their day. Send thoughtful gifts, rewards, or incentives
          to one person, a few people, or thousands with ease. Gift4u.com is the
          perfect tool to use when you need to send a one-time gift, an
          impromptu thank you, a deal incentive, a quarterly bonus, a recurring
          referral payment, a well-timed surprise gift, an always-on referral
          bonus, and any other situation you can imagine. Don't spend time
          thinking how to gift, when you can use Gift4u to deliver the perfect
          gift, every time.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
