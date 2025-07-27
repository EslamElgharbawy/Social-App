import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@/Features/user.slice'
import { postReducer } from '@/Features/posts.slice'
import { UserInfoReducer } from '@/Features/UserInfo.slice'
import { CommentReducer } from '@/Features/Comments.slice'
export const Store = configureStore({
    reducer: {
        userReducer,
        postReducer,
        UserInfoReducer,
        CommentReducer
    }
})


type AppStore = typeof Store
export type RootStore = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
