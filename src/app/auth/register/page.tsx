'use client';

import { useForm } from 'react-hook-form';

interface PostFormData {
    username: string;
    password: string;
    confirm: string;
}

export default function Register() {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<PostFormData>();

    const onSubmit = (data: PostFormData) => {
        console.log(`Account created: ${data}`);
    }
    return (
        <main>
            <h1>Create a new account</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username: *</label>
                    <input id='username' type='text' {...register("username", { required: "Username is required" })} />
                    {errors.username && <span className="error">{errors.username.message}</span>}
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password: *</label>
                    <input type="password" id="password" {...register("password", { required: "Password is required" })} />
                    {errors.password && <span className="error">{errors.password.message}</span>}
                </fieldset>
                <fieldset>
                    <label htmlFor="confirm">Confirm: *</label>
                    <input type="password" id="confirm" {...register("confirm", { required: "Confirm your password is required" })} />
                    {errors.confirm && <span className="error">{errors.confirm.message}</span>}
                </fieldset>
                <button>Create account</button>
            </form>
        </main>)
}