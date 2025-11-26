"use client"

import { RecipieInsert } from "@/db/Schema"
import { useForm } from "react-hook-form"
import { useCurrentUser } from "@/hook/hook"
import { NewRecipieAction } from "@/Action/RecipieAction"
import { useRouter } from "next/navigation"

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/Components/ui/card"
import { Label } from "@/Components/ui/label"
import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group"
import { Button } from "@/Components/ui/button"

export default function Page() {
    const { email } = useCurrentUser()
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<RecipieInsert>()

    const selectedType = watch("type")

    const onSubmit = async (data: RecipieInsert) => {
        data.email = email || ""
        await NewRecipieAction(data)
        router.push("/")
    }

    return (
        <div
            className="
                min-h-screen w-full flex items-center justify-center
                bg-gradient-to-br from-[#3D405B] via-[#E07A5F] to-[#3D405B]
                p-6
            "
        >
            <Card
                className="
                    w-full max-w-xl bg-white/20 backdrop-blur-xl
                    border border-white/20 shadow-2xl
                    rounded-2xl text-white
                "
            >
                <CardHeader>
                    <CardTitle className="text-center text-3xl font-extrabold drop-shadow">
                        Create New Recipe 🍽️
                    </CardTitle>
                </CardHeader>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardContent className="space-y-6">

                        {/* Recipe Name */}
                        <div className="space-y-2">
                            <Label className="text-white">Recipe Name</Label>
                            <Input
                                placeholder="Enter recipe name"
                                {...register("name", { required: true })}
                                className="
                                    bg-[#FFE8D6]/60 text-gray-900 placeholder-gray-700
                                    border-[#E07A5F]/40 focus-visible:ring-[#E07A5F]
                                "
                            />
                            {errors.name && <p className="text-red-200 text-sm">Required</p>}
                        </div>

                        {/* Ingredients */}
                        <div className="space-y-2">
                            <Label className="text-white">Ingredients</Label>
                            <Textarea
                                placeholder="List ingredients..."
                                {...register("ingrediants", { required: true })}
                                className="
                                    bg-[#FFE8D6]/60 text-gray-900 placeholder-gray-700
                                    border-[#E07A5F]/40 focus-visible:ring-[#E07A5F]
                                "
                            />
                            {errors.ingrediants && <p className="text-red-200 text-sm">Required</p>}
                        </div>

                        {/* Nutrition */}
                        <div className="space-y-2">
                            <Label className="text-white">Nutrition (optional)</Label>
                            <Input
                                placeholder="Nutrition details..."
                                {...register("nutritions")}
                                className="
                                    bg-[#FFE8D6]/50 text-gray-900 placeholder-gray-700
                                    border-[#E07A5F]/30 focus-visible:ring-[#E07A5F]
                                "
                            />
                        </div>

                        {/* Image */}
                        <div className="space-y-2">
                            <Label className="text-white">Image URL</Label>
                            <Input
                                placeholder="Paste image URL"
                                {...register("image", { required: true })}
                                className="
                                    bg-[#FFE8D6]/60 text-gray-900 placeholder-gray-700
                                    border-[#E07A5F]/40 focus-visible:ring-[#E07A5F]
                                "
                            />
                            {errors.image && <p className="text-red-200 text-sm">Required</p>}
                        </div>

                        {/* Video */}
                        <div className="space-y-2">
                            <Label className="text-white">Video URL</Label>
                            <Input
                                placeholder="Paste video URL"
                                {...register("video", { required: true })}
                                className="
                                    bg-[#FFE8D6]/60 text-gray-900 placeholder-gray-700
                                    border-[#E07A5F]/40 focus-visible:ring-[#E07A5F]
                                "
                            />
                            {errors.video && <p className="text-red-200 text-sm">Required</p>}
                        </div>

                        {/* Type Radio with icon buttons */}
                        <div className="space-y-3">
                            <Label className="text-white font-semibold">Recipe Type</Label>

                            <div className="flex items-center gap-6">
                                {/* Veg */}
                                <div
                                    onClick={() => setValue("type", "Veg")}
                                    className={`
                                        w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
                                        ${selectedType === "Veg" ? "bg-green-500" : "bg-white/30"}
                                        transition-all
                                    `}
                                >
                                    <span className="text-white text-xl">🥦</span>
                                </div>

                                {/* Non-Veg */}
                                <div
                                    onClick={() => setValue("type", "Non-Veg")}
                                    className={`
                                        w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
                                        ${selectedType === "Non-Veg" ? "bg-red-500" : "bg-white/30"}
                                        transition-all
                                    `}
                                >
                                    <span className="text-white text-xl">🥩</span>
                                </div>
                            </div>
                            {errors.type && <p className="text-red-200 text-sm mt-1">Required</p>}
                        </div>

                    </CardContent>

                    <CardFooter className="mt-5">
                        <Button
                            type="submit"
                            className="
                                w-full bg-[#E07A5F]/90 text-white font-bold
                                hover:bg-[#E07A5F] transition-all 
                                hover:scale-[1.02] shadow-lg py-6 text-lg
                            "
                        >
                            Submit Recipe
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
