'use client'

import { singleRecipieAction } from '@/Action/RecipieAction'
import { RecipieInsert } from '@/db/Schema'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { HeartIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/Components/ui/card'
import { Button } from '@/Components/ui/button'

const Page = () => {
  const { id } = useParams()
  const [singleRecipie, setSingleRecipie] = useState<RecipieInsert[] | null>(null)

  // Toggle states
  const [showMoreIngredients, setShowMoreIngredients] = useState(false)
  const [showMoreNutrition, setShowMoreNutrition] = useState(false)

  useEffect(() => {
    if (id) fetchSingle(id)
  }, [id])

  const fetchSingle = async (id: string) => {
    const recipe = await singleRecipieAction(id)
    setSingleRecipie(recipe)
  }

  const renderListWithToggle = (items: string[], showMore: boolean, setShowMore: any) => {
    const limit = 5
    const shouldTruncate = items.length > limit
    const displayedItems = showMore || !shouldTruncate ? items : items.slice(0, limit)

    return (
      <div>
        <ul className="list-disc list-inside bg-white/30 p-3 rounded-lg text-gray-900">
          {displayedItems.map((item, idx) => (
            <li key={idx}>{item.trim()}</li>
          ))}
        </ul>
        {shouldTruncate && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm text-[#E07A5F] font-semibold mt-1 underline hover:text-yellow-500"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full p-8 bg-gradient-to-br from-[#3D405B] via-[#4b4e66] to-[#E07A5F] flex justify-center items-start">
      {singleRecipie &&
        singleRecipie.map((s) => {
          const ingredientsList = s.ingrediants.split(',')
          const nutritionList = s.nutritions ? s.nutritions.split(',') : []

          return (
            <Card
              key={s.id}
              className="
                w-full max-w-3xl 
                bg-gradient-to-br from-[#FFEDE4] to-[#fbd9c7] 
                border border-[#E07A5F]/40 
                rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.15)]
                hover:shadow-[0_6px_18px_rgba(224,122,95,0.4)]
                transition-all duration-300
                text-[#3D405B] p-6 relative
              "
            >
              <CardHeader>
                <CardTitle className="text-3xl font-extrabold drop-shadow mb-4">{s.name}</CardTitle>
              </CardHeader>

              {/* Recipe Image with Hover Zoom */}
              <div className="overflow-hidden rounded-xl shadow-md mb-6">
                <img
                  src={s.image || ''}
                  alt={s.name}
                  className="w-full h-64 object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>

              <CardContent className="space-y-4">
                <p className="text-sm opacity-80">By {s.email}</p>

                {/* Ingredients */}
                <p className="text-lg font-semibold text-[#E07A5F]">Ingredients:</p>
                {renderListWithToggle(ingredientsList, showMoreIngredients, setShowMoreIngredients)}

                {/* Nutrition */}
                {nutritionList.length > 0 && (
                  <>
                    <p className="text-lg font-semibold text-[#E07A5F]">Nutrition:</p>
                    {renderListWithToggle(nutritionList, showMoreNutrition, setShowMoreNutrition)}
                  </>
                )}

                {/* Recipe Type */}
                <p className="text-lg font-semibold text-[#E07A5F]">Type:</p>
                <div
                  className={`inline-block px-4 py-1 rounded-full font-bold text-white ${
                    s.type === 'Veg' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  {s.type === 'Veg' ? '🥦 Veg' : '🥩 Non-Veg'}
                </div>

                {/* Video */}
                {s.video && (
                  <div className="mt-4">
                    <p className="text-lg font-semibold text-[#E07A5F]">Video:</p>
                    <a
                      href={s.video}
                      target="_blank"
                      className="underline hover:text-yellow-500"
                    >
                      Watch Video
                    </a>
                  </div>
                )}

                {/* Favorite Button */}
                <div className="flex justify-end mt-6">
                  <Button className="bg-[#E07A5F]/80 hover:bg-[#E07A5F] flex items-center gap-2">
                    <HeartIcon className="w-5 h-5 text-white" /> Favorite
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
    </div>
  )
}

export default Page
