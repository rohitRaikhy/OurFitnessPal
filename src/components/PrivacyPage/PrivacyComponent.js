import React from "react";
import {Link} from "react-router-dom";

const linkToHome = () =>
    <Link to={"/ourfitnesspal"}></Link>


const PrivacyComponent = () =>

    <div className="container">
        <div>
        <h1>Privacy  Page</h1>
        <p>Privacy is a fundamental human right that many governments from all over the world recognize. There are numerous legislations made to support and protect an individual’s right to have their personal data kept a secret if they choose not to divulge their information.

            As much as possible, such legislations ensure that one’s data are safe from the unfair collection, distribution, and other types of uses that are done without the knowledge of the individual.

            The idea of displaying a privacy policy was required by law to respect and protect privacy even in spaces as risky as online web pages. As a private company, you have the right to protect your legal documents from the eyes of others.

            Yet, there’s one legal document that you’re absolutely required to divulge the contents of - the privacy policy. The law strictly regulates the practice of displaying the privacy policy on websites or apps. We’ll talk more about this in a while when we discuss the requirements when displaying your privacy policy.

            The definition of a privacy policy is easy to understand. It is a type of agreement required by law for those who use or collect any personal data on websites or mobile applications. It lets website visitors know that their data might be stored and used.

            Additionally, it reminds them that remaining on the website means that they are comfortable with the uses of their data. Simply put, it is a document that describes in detail what personal information your website collects from its visitors, along with how you store it and use it.</p>
    </div>
        <span className="align-content-center">
            <Link to={"/ourfitnesspal/home"}>
        <button
            className="btn btn-primary">
            Accept
        </button>
                 </Link>
            <Link to={"/ourfitnesspal/home"}>
        <button className="btn btn-danger">
            Reject
        </button>
                </Link>
             </span>
    </div>






export default PrivacyComponent;

