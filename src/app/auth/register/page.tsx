'use client';

import { useForm } from 'react-hook-form';
import PageTitle from '@/app/components/PageTitle';

interface RegisterFormData {
    username: string;
    password: string;
    confirm: string;
}

export default function Register() {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<RegisterFormData>();

    const onSubmit = async (data: RegisterFormData) => {
        if (data.password != data.confirm) {
            console.log("Passwords do not match");
        }
        else {
            try {
                // use fetch to POST new user to back-end API
                const apiDomain: string = process.env.NEXT_PUBLIC_API_DOMAIN!;
                const response: Response = await fetch(`${apiDomain}/users/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: data.username,
                        password: data.password
                    })
                });

                // check response from POST attempt
                const apiResponse: Response = await response.json();

                if (apiResponse.ok) {
                    console.log(`Success: ${apiResponse}`);
                }
                else {
                    console.log(`Registration Failed: ${apiResponse.text}`);
                }
            }
            catch (error) {
                console.log(`Registration Error: ${error}`);
            }
        }
    };
    return (
        <main>
            <PageTitle title="Register" />
            <h1>Create a new account</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username: *</label>
                    <input id='username' type='text' {...register("username", { required: "Username is required" })} />
                    {errors.username && <span className="error">{errors.username.message}</span>}
                </fieldset>
                {/* Verify password === confirm */}
                <fieldset>
                    <label htmlFor="password">Password: *</label>
                    <input type="password" id="password" {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Min 8 characters"
                        }
                    }
                    )} />
                    {errors.password && <span className="error">{errors.password.message}</span>}
                </fieldset>
                <fieldset>
                    <label htmlFor="confirm">Confirm: *</label>
                    <input type="password" id="confirm" {...register("confirm", {
                        required: "Confirm your password is required"
                    },

                    )} />
                    {errors.confirm && <span className="error">{errors.confirm.message}</span>}
                </fieldset>
                <button>Create account</button>
            </form>
        </main>)
}