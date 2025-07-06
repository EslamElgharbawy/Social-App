import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@/Features/user.slice'
import { postReducer } from '@/Features/posts.slice'
export const Store = configureStore({
    reducer: {
        userReducer,
        postReducer
    }
})


type AppStore = typeof Store
export type RootStore = ReturnType<AppStore['getState']>
export type AppDispatsh = AppStore['dispatch']
