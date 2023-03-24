import React from "react";
import "../../src/user/home.css"
import { Button } from "@mui/material";
import { Container } from "@mui/system";
const HomePage=()=>{


    return (
        <Container>
        <div class="container-fluid px-1 py-5 mx-auto row justify-content-center">
        <div class="col-xl-9 col-lg-10 ">
            <div class="card1 pl-4 pl-md-5 pr-3">
                <div class="row">
                    <div class="left-side col-md-6">
                        <p class="pt-5 mb-0">Has just arrived!</p>
                        <h3 class="mb-0"><strong>Summer Collection 2023</strong></h3>
                        <small class="">Footwear, Bags, Sunglasses, Caps & much more.</small><br/><br/>
                        <Button  color="error" variant="contained"  onClick={()=>{window.location.href="http://localhost:3000/products"}}>Shop Now &nbsp;&nbsp;<div class="fa fa-angle-right"></div></Button>
                    </div>
                    <div class="right-side col-md-6 row justify-content-center">
                        <div class="d-flex">
                            <img class="girl-img fit-image" src="https://i.imgur.com/cHZCR1r.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card2 pl-4 pl-md-5 pr-3">
                <div class="row px-3">
                    <div class="col-md-12">
                        <div class="blocks row d-flex">
                            <div class="d-flex flex-column">
                                <img class="fit-image img-block" src="https://i.imgur.com/fAGPS4s.jpg"/>
                                <small class="text-center">Men</small>
                            </div>
                            <div class="d-flex flex-column">
                                <img class="fit-image img-block" src="https://i.imgur.com/HPYQLNh.jpg"/>
                                <small class="text-center">Women</small>
                            </div>
                            <div class="d-flex flex-column">
                                <img class="fit-image img-block" src="https://i.imgur.com/iUIt6UP.jpg"/>
                                <small class="text-center">Kids</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Container>
    )
}

export default HomePage;