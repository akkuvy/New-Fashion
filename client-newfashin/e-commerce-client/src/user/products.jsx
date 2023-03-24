import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./product.css";
import { Container, margin } from "@mui/system";
import { Button } from "@mui/material";
import axios from "axios";

function ShowProducts() {
  const [products, setProducts] = useState([1,2,3]);

  useEffect(() => {
    Axios.get("http://localhost:3002/").then((response)=>{
     setProducts(response.data)
    });
  }, []);

  const handleCartAdd=(item)=>{
axios.post("http://localhost:3002/add-cart",
{
  item
}).then((response)=>{
if(response.status==200){
alert(response.data.message)
}
})
 }
  return (
    
    
    <Container>      
      <MDBContainer fluid>
        <MDBRow className="justify-content-center mb-0">
          <MDBCol md="12" xl="10">
            <MDBCard className="shadow-0 border rounded-3">
              <MDBCardBody>
                { products.map((product)=>
                <MDBRow className="mb-8">
                  <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <MDBCardImage
                        src={product.imageLink}
                        fluid
                        className="w-100"
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                  </MDBCol>
                  <MDBCol md="6">
                    <h5>{product.name}</h5>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                      </div>
                     
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                       {product.smalldescription}
                    </div>
                   
                    <p className="text-truncate mb-4 mb-md-0">
                    {products.description}
                    </p>
                  </MDBCol>
                  <MDBCol
                    md="6"
                    lg="3"
                    className="border-sm-start-none border-start"
                  >
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">${product.offerPrice}</h4>
                      <span className="text-danger">
                        <s>${product.price}</s>
                      </span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4">
                      
                      <Button  variant="outlined" onClick={()=>{handleCartAdd(product)}} color="secondary"   size="sm" className="mt-2">
                        Add to wish list
                      </Button>
                    </div>
                  </MDBCol>
                  
                </MDBRow >
                
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Container>
  );
}

export default ShowProducts;
