'use client'
import { RecipieInsert } from '@/db/Schema'
import { useForm, SubmitHandler } from "react-hook-form"
import React from 'react'
import { useCurrentUser } from '@/hook/hook'
import { NewRecipieAction } from '@/Action/RecipieAction'
import { useRouter } from 'next/navigation'

const page = () => {

    const { email } = useCurrentUser() //Get email using hook

    const router = useRouter() //Nvaigation

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RecipieInsert>()

    // Insert new recipie into database
    const onSubmit = async (data: RecipieInsert) => {
        // console.log(data);
        data.email = email || ""
        //Data sent to backend
        await NewRecipieAction(data)
        // Navigate to homepage
        router.push("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Recipie name */}
                <input placeholder="name"  {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}

                {/* Ingrediants */}
                <input placeholder="ingrediants" {...register("ingrediants", { required: true })} />
                {errors.ingrediants && <span>This field is required</span>}

                {/* Nutrition (optional) */}
                <input placeholder="nutritions" {...register("nutritions")} />
                {errors.nutritions && <span>This field is required</span>}

                {/* Recipie Image */}
                <input placeholder="image" {...register("image", { required: true })} />
                {errors.image && <span>This field is required</span>}

                {/* Recipie Video */}
                <input placeholder="video" {...register("video", { required: true })} />
                {errors.video && <span>This field is required</span>}

                {/* Radio button for the veg and nonveg */}
                <div>
                    <label>
                        <input type='radio' value="Veg" {...register("type", { required: true })} />
                        Veg
                    </label>
                    <label>
                        <input type='radio' value="Non-Veg" {...register("type", { required: true })} />
                        Non-Veg
                    </label>
                </div>
                {errors.type && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    )
}

export default page
