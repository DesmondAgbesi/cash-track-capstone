import React from "react";
import RegisterForms from "../components/RegisterForms";
import { RegisterImg } from "../components/RegisterImg";

function Register() {
  return (
      <div className="flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 h-screen ">
        <div className="mx-auto grid md:grid-cols-2 gap-2 form-bg p-10 rounded-2xl">
          {/* //Input Forms on the left side of the screen */}
          <RegisterForms />

          {/* image on the right side of the screen*/}
          <div>
            {/* <RegisterImg /> */}
          </div>
        </div>
      </div>

  );
}

export default Register;
