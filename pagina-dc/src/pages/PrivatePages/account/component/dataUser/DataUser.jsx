import { React, useState } from "react";
import AccountPart from "./AccountPart";
import ComicPart from "../dataUser/ComicPart";
import AccountBox from "../AccountBox";
import { useAuth } from "../../../../../context/authContext";
export default function DataUser() {
  const { user } = useAuth();
  /* ACCOUNT */
  const [email, setBox] = useState(false);
  const clickEmail = () => {
    setBox(!email);
  };
  const [password, setPassword] = useState(false);
  const clickPassword = () => {
    setPassword(!password);
  };
  const [subscription, setSubscription] = useState(false);
  const clickSubscription = () => {
    setSubscription(!subscription);
  };
  const [payment, setPayment] = useState(false);
  const clickPayment = () => {
    setPayment(!payment);
  };

  /* COMICS */
  const [content, setContent] = useState(false);
  const clickContent = () => {
    setContent(!content);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mb-20 w-full desktop-two:h-[500px]">
        <div className="flex desktop-two:flex-row mobile:flex-col ">
          <AccountPart
            clickEmail={clickEmail}
            clickPassword={clickPassword}
            clickSubscription={clickSubscription}
            clickPayment={clickPayment}
          />
          <ComicPart clickContent={clickContent} />
        </div>
      </div>
      <div>
        {email ? (
          <AccountBox
            setBox={setBox}
            title="EDIT EMAIL"
            subTitle="Current Email"
            currentEmail={user.email}
            text="To change your account email, please contact Customer Support."
            button="CONTACT SUPPORT"
            styles="mt-16"
          />
        ) : (
          ""
        )}
        {password ? (
          <AccountBox
            setBox={setPassword}
            title="VERIFY YOUR EMAIL ADDRESS"
            text="Before you can proceed, we'll need to verify your email address."
            button="GET VERIFIED"
            styles="mt-16"
          />
        ) : (
          ""
        )}
        {subscription ? (
          <AccountBox
            setBox={setSubscription}
            title="CHANGE SUBSCRIPTION"
            text="Become a Premium Member and get full access to DC Universe Infinite."
            styles="mt-16"
            button="BECOME A MEMBER"
          />
        ) : (
          ""
        )}
        {payment ? (
          <AccountBox
            setBox={setPayment}
            title="CHANGE SUBSCRIPTION"
            text="Become a Premium Member and get full access to DC Universe Infinite."
            styles="mt-16"
            button="BECOME A MEMBER"
          />
        ) : (
          ""
        )}
        {content ? (
          <AccountBox
            setBox={setContent}
            content={content}
            title="CONTENT VIEWERSHIP ALERTS"
            styles="relative bottom-16"
            button='UPDATE'
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
