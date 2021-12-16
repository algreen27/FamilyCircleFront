import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterUser = () => {
  const { register, handleSubmit } = useform(regForm);

  async function regForm() {
    await axios
      .post(`http://localhost:5020/api/user/`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
      })
      .then((res) => {
        getRegistered();
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", { required: true })}
          placeholder="First name"
        />

        <input
          {...register("lastName", { minLength: 2 })}
          placeholder="Last name"
        />

        <select {...register("category")}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>

        <input {...register("checkbox")} type="checkbox" value="A" />
        <input {...register("checkbox")} type="checkbox" value="B" />
        <input {...register("checkbox")} type="checkbox" value="C" />

        <input {...register("radio")} type="radio" value="A" />
        <input {...register("radio")} type="radio" value="B" />
        <input {...register("radio")} type="radio" value="C" />

        <input type="submit" />
      </form>
      ); 
    </div>
  );
};

export default RegisterUser;
