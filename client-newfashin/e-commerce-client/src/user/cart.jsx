import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Container } from "@mui/system";
import { Button } from "@mui/material";


export default function ProductCards() {
  const [cartProducts,setCartProducts]=useState([])
  const [TotalAmount,setTotalAMount]=useState(0)

useEffect(()=>{
  axios.get("http://localhost:3002/cart").then((response)=>{
    if(response.status==200)
  var tot=0;
    setCartProducts(response.data)
    response.data.map((t)=>{
      tot=t.offerPrice+tot;
       
    }) 
      setTotalAMount(tot)
    
   
  })
},[])
 
async function displayRazorpay() {
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }

  // // creating a new order
  // const result = await axios.post("http://localhost:5000/payment/orders");

  // if (!result) {
  //     alert("Server error. Are you online?");
  //     return;
  // }

  // Getting the order details back
  // const { amount, id: order_id, currency } = result.data;

  const options = {
      key: "rzp_test_1n6JGyiAn0Cu5c", // Enter the Key ID generated from the Dashboard
      amount: TotalAmount*100,
      currency: "INR",
      name: "Avanthi Corp.",
      description: "Test Transaction",
      image: "",
      handler: async function (response) {
      
      alert(response.razorpay_payment_id,)
            

  
      },
      prefill: {
          name: "Soumya Dey",
          email: "SoumyaDey@example.com",
          contact: "9999999999",
      },
      notes: {
          address: "Soumya Dey Corporate Office",
      },
      theme: {
          color: "#61dafb",
      },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
 

function loadScript(src) {
  return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
          resolve(true);
      };
      script.onerror = () => {
          resolve(false);
      };
      document.body.appendChild(script);
  });
}
  return (
    cartProducts.length==0?
    <Container>
    <h2>Cart Empty</h2>
    </Container>:
    <section className="h-100" style={{ backgroundColor: "white" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>
            </div>
           <Container>  {cartProducts.map((cartPro)=>
      
            <MDBCard className="rounded-3 mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage
                      className="rounded-3"
                      fluid
                      src={cartPro.imageLink}
                       alt="Cotton T-shirt"
                    />
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="3">
                    <p className="lead fw-normal mb-2">{cartPro.name}</p>
                   
                  </MDBCol>
                  <MDBCol
                    md="3"
                    lg="3"
                    xl="2"
                    className="d-flex align-items-center justify-content-around"
                  >
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="minus" />
                    </MDBBtn>

                    <MDBInput
                      min={0}
                      defaultValue={cartPro.count}
                      type="number"
                      size="sm"
                    />

                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="plus" />
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                    <MDBTypography tag="h5" className="mb-0">
                      ${cartPro.offerPrice}
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol md="1" lg="1" xl="1" className="text-end">
                    <a href="#!" className="text-danger">
                      <MDBIcon fas icon="trash text-danger" size="lg" />
                    </a>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
 )}
</Container>
<Container>
  <h3>Toal Price :{TotalAmount}</h3>
</Container>

            <MDBCard>
              <MDBCardBody>
                <Button onClick={()=>displayRazorpay()} className="ms-3" color="warning" block size="lg">
                  Proceed To Pay
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
