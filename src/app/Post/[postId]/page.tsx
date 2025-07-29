'use client'
import Loading from "@/components/Loading/Loading"
import PostCard from "@/components/PostCard/PostCard"
import { getPostDetails } from "@/Features/posts.slice"
import { useAppDispatch, useAppSelector } from "@/hooks/Store.hooks"
import { use, useEffect, useState } from "react"
export default function post({ params }: { params: Promise<{ postId: string }> }) {
    const { postId } = use(params)
    const dispatch = useAppDispatch()
    let { postDetails } = useAppSelector((store) => store.postReducer)
    useEffect(() => {
        dispatch(getPostDetails(postId))
    }, [])
    return <>
        {postDetails ? <PostCard postInfo={postDetails} ShowAllComments={true} /> : <Loading />}

    </>
}
