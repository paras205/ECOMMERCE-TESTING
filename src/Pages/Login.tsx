import cx from "classnames";
import { Formik } from "formik";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors: Record<string, string> = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
      onSubmit={async (values, { setStatus, setSubmitting }) => {
        setSubmitting(true);
        try {
          await fetch("/api/sign-in", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          window.location.replace("/dashboard");
        } catch (e) {
          console.log("e", e);
          const apiError = {
            apiError: "Invalid username or password",
          };
          setStatus(apiError);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        status,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => {
        const hasError = Object.keys(errors).length > 0;
        return (
          <div className="w-full max-w-xs">
            {status && status["apiError"] && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                <span className="block sm:inline">{status["apiError"]}</span>
              </div>
            )}

            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={cx(
                    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    {
                      "border-red-500": touched["email"] && errors["email"],
                    }
                  )}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched["email"] && errors["email"] && (
                  <p className="pt-2 text-red-500 text-xs italic">
                    {errors["email"]}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className={cx(
                    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                    {
                      "border-red-500": touched["email"] && errors["email"],
                    }
                  )}
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="******************"
                />
                {touched["password"] && errors["password"] && (
                  <p className="text-red-500 text-xs italic">
                    {errors["password"]}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  disabled={isSubmitting || hasError}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              ©2020 Acme Corp. All rights reserved.
            </p>
          </div>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
