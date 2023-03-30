import React from "react";
import Button from "./Button";
import styled from "./Register.module.css";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { BsLockFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const Register = () => {
  return (
    <>
      <div className={styled.container}>
        <div className={styled.first}>
          <img
            src="https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img_not_found"
          />
        </div>

        <div className={styled.second}>
          <form>
            <div className={styled.input_field}>
              <label className={styled.label}>
                {" "}
                <AiOutlineMail />{" "}
              </label>
              <input type="email" placeholder="Email" />
            </div>

            <div className={styled.input_field}>
              <label className={styled.label}>
                {" "}
                <FaUserAlt />{" "}
              </label>
              <input type="text" placeholder="Username" />
            </div>

            <div className={styled.input_field}>
              <label className={styled.label}>
                <BsLockFill />{" "}
              </label>
              <input type="password" placeholder="Password" />
            </div>
            <Button name="SIGNUP" />
          </form>
        </div>

        <div className={styled.last}>
          <p>
            Back to{" "}
            <span>
              {" "}
              <Link className={styled.link} to="/login">
                {" "}
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;
