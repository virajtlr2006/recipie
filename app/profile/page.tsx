'use client'

import { useCurrentUser } from '@/hook/hook'
import React from 'react'

const page = () => {
    const { email, username, fullName, imageUrl } = useCurrentUser()
    return (
        <div>
            <p>{email}</p>
            <p>{username}</p>
            <p>{fullName}</p>
            <img src={imageUrl ||"https://cdn-icons-png.flaticon.com/128/3135/3135715.png"} />
        </div>
    )
}

export default page
