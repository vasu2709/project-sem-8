import { medusaClient } from "@/lib/config"
import { LOGIN_VIEW, useAccount } from "@/lib/context/account-context"
import { Spinner } from "@medusajs/icons"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import Input from "@/components/common/formElements/Input"
import {
  emailRegex,
  nameRegex,
  passwordRegex,
  phoneRegex,
} from "@/lib/util/regex"
import Button from "@/components/ImageWithButton/button"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (_e: Error) => {
    setAuthError(_e.response.data.message)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then((res) => {
        console.log(res)

        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-lg flex flex-col items-center">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <p className="text-center text-heading3 uppercase mb-0">
        Become a Lustria Member
      </p>
      <hr className="bg-greenDark-50 h-[1px] w-full" />

      <p className="text-center text-base-regular text-gray-700 mb-8 mt-2">
        Create your Member profile, and get access to an enhanced shopping
        experience.
      </p>
      <form className="w-full flex flex-col gap-2" onSubmit={onSubmit}>
        {authError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="text-rose-500 w-full text-small-regular capitalize">
              {authError}
            </span>
          </div>
        )}
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="First name"
            type="text"
            {...register("first_name", {
              required: {
                message: "first_name is required...",
                value: true,
              },
              maxLength: {
                value: 50,
                message: "name is too long",
              },
              minLength: {
                value: 2,
                message: "name is too short",
              },
              pattern: {
                value: nameRegex,
                message: "name should only contain alphabets ",
              },
            })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Last name"
            type="text"
            {...register("last_name", {
              required: {
                message: "last_name is required...",
                value: true,
              },
              maxLength: {
                value: 50,
                message: "name is too long",
              },
              minLength: {
                value: 2,
                message: "name is too short",
              },
              pattern: {
                value: nameRegex,
                message: "name should only contain alphabets ",
              },
            })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Email"
            type="email"
            {...register("email", {
              required: {
                message: "Email is required...",
                value: true,
              },
              pattern: {
                value: emailRegex,
                message: "Enter valid email",
              },
            })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Phone"
            type="tel"
            {...register("phone", {
              required: {
                message: "phone number is required...",
                value: true,
              },

              pattern: {
                value: phoneRegex,
                message: "please enter vaild phone number ",
              },
            })}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Password"
            type="password"
            {...register("password", {
              required: {
                message: "Password is required...",
                value: true,
              },
              minLength: {
                value: 8,
                message: "Password is too short (Minimum eight characters)",
              },
              pattern: {
                value: passwordRegex,
                message:
                  "Minimum eight characters, at least one letter, one number and one special character is required",
              },
            })}
            autoComplete="new-password"
            errors={errors}
          />
        </div>

        <span className="text-center text-gray-700 text-small-regular mt-6">
          By creating an account, you agree to Medusa Store&apos;s{" "}
          <Link href="/content/privacy-policy" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/content/terms-of-use" className="underline">
            Terms of Use
          </Link>
          .
        </span>
        <Button variant="login">Join</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Sign in
        </button>
        .
      </span>
    </div>
  )
}

export default Register
