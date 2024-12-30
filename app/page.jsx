import React from "react";
import Avater from "/home/sankhya/Desktop/Coding/Web/blog-preview-card-main/my-app/asset/image-avatar.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

import "/home/sankhya/Desktop/Coding/Web/blog-preview-card-main/my-app/style/card.css"
export default function Home() {
  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: "hsl(47, 88%, 63%)" }}
    >
      <div
        className="container bg-light p-3 card-container"
        style={{ border: "2px solid black", borderRadius: "25px",maxWidth:"350px" }}
      >
        <div className="  border d-flex flex-column justify-content-center align-items-center rounded " >
          <img
            className="rounded"
            src="https://frontend-extravaganza-ib81.vercel.app/styles/images/illustration-article.svg"
            alt="background"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div>
          <div className="my-3">
            <p
              className=" d-inline px-3 py-1 rounded fw-bold"
              style={{ backgroundColor: "hsl(47, 88%, 63%)" }}
            >
              Learning
            </p>
          </div>
          <p className="" style={{ fontSize: "13px" }}>
            Published 21 Dec 2023
          </p>
          <p className="card-header" style={{fontSize:"25px",fontWeight:900}}>

          HTML & CSS foundations 
          </p>
          <p className="my-1" style={{fontSize:"13px"}}>

          These languages are the backbone of every
          website, defining structure, content, and presentation.
          </p>
        </div>
        <footer className="d-flex align-items-center ">
<Image src={Avater} className="p-3" alt="avatar"/>
<span className="fw-bold" style={{fontSize:"12px"}}>
  
        Greg Hooper
</span>
        </footer>
      </div>
    </div>
  );
}
