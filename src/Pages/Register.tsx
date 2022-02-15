import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          {...register("email", { required: true, maxLength: 10 })}
          placeholder="email"
        />
        {errors?.email && <p>Enter a valid email</p>}
        <button type="submit">Register User</button>
      </form>
    </div>
  );
};

export default Register;
