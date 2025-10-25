import { useForm } from "react-hook-form";
import { useState } from "react";
import "./example.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    setSuccess(true);
    console.log(data);
  };

  return (
    <div>
      <h2>My Contacts</h2>
      <p>Contact me at by my email kshiu8@my.centennialcollege.ca or by phone 416-417-3135!</p>
      <h2>Please fill out your information below to send me your contact information and we can chat!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="hook">
        <label className="hook__text">Email</label>
        <input
          type="email"
          className="hook__input"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <p className="hook__error">Email is required and must be valid</p>
        )}
        {success && !errors.email && (
          <p style={{ color: "green", fontSize: "1.4rem", margin: 0 }}>
            Email submitted successfully!
          </p>
        )}

        <button className="hook__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}