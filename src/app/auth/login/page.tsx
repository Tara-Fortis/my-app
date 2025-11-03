'use client';

import { useForm } from 'react-hook-form'
import PageTitle from '@/app/components/PageTitle';
import { useState } from 'react';

interface LoginFormData {
    username: string;
    password: string;
}


export default function Login() {
    const [message, setMessage] = useState<string>('Please enter your credentials');

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<LoginFormData>();


    return (
        <main>
            <PageTitle title="Login" />
            <h1>Login</h1>
            <p>{message}</p>
            <form>
                <fieldset>
                    <label htmlFor="username">Username:*</label>
                    <input type="text" id="username" {...register("username")} />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password:*</label>
                    <input type="password" id="password" {...register("password")} />
                </fieldset>
                <button>Login</button>
            </form>
        </main>
    )
}