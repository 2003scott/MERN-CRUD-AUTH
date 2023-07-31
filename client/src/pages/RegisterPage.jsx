import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

function RegisterPage() {
  const { register, handleSubmit, formState : {errors}} = useForm();
  const {signup, isAthentication, errors : RegisterErrors} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAthentication) navigate('/task')
  },[isAthentication])

  const onSubmit = handleSubmit(async (values) => {
    // console.log(values);
    signup(values)

  })

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {
        RegisterErrors.map((error,i) => {
          <div className="bg-red-500 p-2 text-white" key={id}>
            {error}
          </div>
        })
      }
      <form
        onSubmit={onSubmit}
      >
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Username"
        />
        {
          errors.username && <p className="text-red-600">Username is required</p>
        }
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="email@email.com"
        />
        {
          errors.email && <p className="text-red-600">Email is required</p>
        }
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password"
        />
        {
          errors.password && <p className="text-red-600">Password is required</p>
        }
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
