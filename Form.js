
// import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import {Button} from 'react-bootstrap/Button';
import * as yup from "yup";
import 'yup-phone';
import  'react-calendar';


export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required(),
    // age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(10).required(),
    phone: yup.string().phone(null, true, "Invalid phone number").required("Invalid phone number"),
    status:yup.string().required("please select your gender"),
    country:yup.string().required(),
    datepicker:yup.string().required("Date is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
      addres:yup.string().required("please enter current addres"),
  });
  

  const {
    register,
    
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     // simulate async api call with set timeout
//     setTimeout(() => setUser({ fullName : '', email: '' ,password:"", confirmPassword:"",datepicker:"", }), 1000);
// }, []);
// // useEffect(() => {
// //   // reset form with user data
// //   reset(user);}, [user]);
  const onSubmit = (data) => {
    console.log(data);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
  };
  
  

  return (
    <div className="form1">
      <h1>Registration Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
{/* FirstName code start */}
      <input type="text"  className="one mb-3" placeholder="Full Name..." {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
{/* Email code start */}
      <input type="text" className="one" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
    
      {/* <input type="number" className="one" placeholder="age..." {...register("age")} />
      <p>{errors.age?.message}</p> */}
{/* Password code start */}
      <input className="one" type="password" placeholder="Password..." {...register("password")}/>
      <p>{errors.password?.message}</p>
      <input className="one" type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
      <p>{errors.confirmPassword?.message}</p>

{/* Calendra code start */}
      <input type="date" placeholder="datepicker" className="datepicker"  {...register("datepicker",{required:"Date is required"})}/>
         <p>{errors.datepicker?.message}</p>
{/* Phone number code start */}

      <input className="one" type="mobile number" placeholder="Phone No" {...register("phone")}/>
      <p>{errors.phone?.message}</p>

{/* Select Country Code start*/}
      <div className="country">
            <select name='country'{...register("country")} >
                     <option value="">select country</option>
                     <option value="INDIA">India</option>
                     <option value="UAE">UAE</option>
                     <option value="USA">USA</option>
                     <option value="UK">UK</option>
                     <option value="PAKISTAN">PAKISTAN</option>
            </select>
      </div>
                  <p>{errors.country?.message}</p>
{/*Address Update code */}

          <input className="one" type="text" placeholder="Address...." {...register("addres")}/>
                 <p>{errors.addres?.message}</p>

{/* Gender Code start */}
       <div className="gender">
             <span>Gender</span>
               <input type="radio" placeholder="status" value="Male"{...register("status")}/>
            <label>Male</label>
               <input type="radio" name="status" value="Female"{...register("status")}/>
              <label>Female</label>    
        </div>
                  <p>{errors.status?.message}</p>
{/* Button Code Start */}

      <button className='button'>Submit</button>

      
    </form>
    </div>
  );
};

export default Form;