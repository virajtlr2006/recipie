"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, Star } from "lucide-react"

interface Recipe {
  id: string
  title: string
  image: string
  by: string
  email: string
  isVeg: boolean
  rating: number
}

interface RecipeCardProps {
  recipe: Recipe
  isFavorite: boolean
  onFavoriteToggle: () => void
}

export default function RecipeCard({ recipe, isFavorite, onFavoriteToggle }: RecipeCardProps) {
  const rating = Math.max(0, Math.min(5, Math.floor(recipe.rating))) // clamp rating 0–5

  return (
    <div className="group cursor-pointer h-full">
      <Link href={`/recipe/single/${recipe.id}`} className="block h-full">
        <div className="bg-white border border-border rounded-lg overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300">
          {/* Image Container */}
          <div className="relative overflow-hidden h-40">
            <Image
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

            {/* Badge + Favorite */}
            <div className="absolute top-3 right-3 flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-md text-xs font-semibold text-white ${recipe.isVeg ? "bg-green-600" : "bg-orange-600"
                  }`}
              >
                {recipe.isVeg ? "Vegetarian" : "Non-Veg"}
              </span>

              <button
                type="button"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                onClick={(e) => {
                  e.preventDefault() // prevent navigation
                  e.stopPropagation()
                  onFavoriteToggle()
                }}
                className="transition-all duration-300"
              >
                <Heart
                  className={`w-6 h-6 transition-all duration-300 ${isFavorite
                    ? "fill-red-500 text-red-500"
                    : "text-white hover:text-red-400 hover:fill-red-400"
                    }`}
                />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-base text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {recipe.title}
            </h3>

            {/* Chef Info */}
            <p className="text-sm text-muted-foreground mb-3">{recipe.by}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-200"
                      }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">
                {typeof recipe.rating === "number" ? recipe.rating.toFixed(1) : "N/A"}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}