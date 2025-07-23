"use client"
import { joiResolver } from "@hookform/resolvers/joi"
import { Card, CardContent, Grid } from "@mui/material"
import Joi from "joi"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button } from "~/components/Button"
import { TextField } from "~/components/TextField"
import { loginAction } from "~/lib/authActions"

const formSchema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email address",
    }),
  password: Joi.string().required().min(8).max(32).messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 8 characters",
    "string.max": "Password must be less than 32 characters",
  }),
})

type FormData = {
  email: string
  password: string
}

export default function SignForm() {
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: joiResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    setServerError(null)
    const result = await loginAction(data)
    if (result.success) {
      router.push("/protected-page")
    } else {
      setServerError(String(result.error))
    }
  }

  return (
    <Card>
      {serverError && <p style={{ color: "red" }}>{serverError}</p>}
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
            <div>
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    fullWidth
                    type="email"
                    value={value}
                    label="Email"
                    onChange={onChange}
                    error={Boolean(errors.email)}
                    placeholder="carterleonard@gmail.com"
                    aria-describedby="validation-schema-email"
                    {...(errors.email && { helperText: errors.email.message })}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    fullWidth
                    value={value}
                    label="Password"
                    onChange={onChange}
                    id="validation-schema-password"
                    error={Boolean(errors.password)}
                    type="password"
                    {...(errors.password && {
                      helperText: errors.password.message,
                    })}
                  />
                )}
              />
            </div>
          </Grid>
          <Button type="submit" variant="contained">
            {isSubmitting ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
