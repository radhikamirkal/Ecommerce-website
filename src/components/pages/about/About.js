import React, { Fragment } from "react";
import './About.css'

function About() {
  return (
    <Fragment>
    
      <div className="parent border rounded-3 border-4 d-flex justify-content-center align-items-center shadow " style={{marginTop:'8%'}}>
        <img className=" img shadow rounded-circle aboutImg w-25 p-1 " src="https://source.unsplash.com/4AWwK4izVhM" alt="profile" />

        <p className="w-50 para fw-">
          <span className="heading h3" >About Us</span >
          Welcome to <strong>More-Shop !!!</strong> We are an online store that
          offers a wide range of products to meet all of your shopping needs.
          Our goal is to provide our customers with a convenient and enjoyable
          shopping experience from start to finish. We pride ourselves on our
          extensive selection of products, competitive pricing, and exceptional
          customer service.

          <br />
          <br />Whether you're shopping for the latest fashion
          trends, the newest electronics, or something else entirely, we've got
          you covered. With fast and reliable shipping, you can rest assured
          that your purchase will arrive on time and in excellent condition. At
          <strong> More-Shop </strong>, we are dedicated to making your
          shopping experience as seamless as possible. Our user-friendly website
          is designed to help you find exactly what you're looking for quickly
          and easily.

          <br />
          <br />If you have any questions or concerns, our friendly and
          knowledgeable customer service team is always here to help. We believe
          in offering our customers the best value for their money, which is why
          we are constantly updating our inventory and sourcing new products. We
          also offer special deals and promotions on a regular basis, so be sure
          to sign up for our newsletter to stay up-to-date on the latest offers.
          Thank you for choosing <strong> More-Shop </strong> as your go-to
          shopping destination. We look forward to serving you!
        </p>
      </div>

    </Fragment>

  );
}

export default About;
