import axios from "axios";
import React, { useForm } from "react";
 


const RegisterUser = (props) => {
    const [state , setState] = useState({
        firstName: "",
        lastName: "",
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        <e className="preventDefault"></e>
    }
  
  return (
    <div>
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputName1">First Name</label>
                <input type="text" 
                       className="form-control" 
                       id="text" 
                    //    aria-describedby="emailHelp" 
                       placeholder="Enter first name"
                       value={state.firstName}
                       onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputName2">Last Name</label>
                <input type="text" 
                       className="form-control" 
                       id="text" 
                    //    aria-describedby="emailHelp" 
                       placeholder="Enter last name"
                       value={state.lastName}
                       onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        onChange={handleChange}

                    />
                </div>
                {/* <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div> */}
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
    </div>
    </div>
  );
};

export default RegisterUser;
