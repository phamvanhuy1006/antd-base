import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import SlashScreen from "src/components/SlashScreen";

enum ACTION_TYPE {
  INITIALIZE = "INITIALIZE",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

interface InitialAuthStateProps {
  isAuthenticated: boolean;
  isInitialized: boolean;
}

export const initialAuthState: InitialAuthStateProps = {
  isAuthenticated: false,
  isInitialized: false,
};

const reducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case ACTION_TYPE.INITIALIZE: {
      const { isAuthenticated, user } = action.payload;
      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user,
      };
    }
    case ACTION_TYPE.LOGIN: {
      const { user } = action.payload;
      return {
        ...state,
        isAuthenticated: !!user,
        user,
      };
    }
    case ACTION_TYPE.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};

const AuthContext = React.createContext({
  ...initialAuthState,
  login: () => Promise,
  logout: () => Promise,
});

interface IAuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialAuthState)
    // const [getCurrentUser] = useLazyGetCurrentUserQuery()
    // const { setToastInformation } = useSetToastInformationState()
    // const [logoutFnc] = useLogoutMutation()
    // const navigate = useNavigate()
  
    // const login = async (data: any) => {
    //   localStorage.setItem(LOCAL_KEYs.ACCESS_TOKEN, data.access_token)
    //   let userInfo = null
  
    //   try {
    //     if (data.access_token) {
    //       userInfo = await getCurrentUser('').unwrap()
    //       navigate(SCREEN_PATHS.BOOK_MANAGEMENT)
    //     }
    //   } catch (error) {
    //     localStorage.clear()
    //     setToastInformation({
    //       status: STATUS_TOAST.ERROR,
    //       message: STATUS_TOAST.ERROR_USER
    //     })
    //   } finally {
    //     dispatch({
    //       type: ACTION_TYPE.LOGIN,
    //       payload: {
    //         user: userInfo
    //       }
    //     })
    //   }
    //   return true
    // }
  
    // const logout = () => {
    //   logoutFnc({})
    //     .unwrap()
    //     .then(() => {
    //       setToastInformation({
    //         status: STATUS_TOAST.SUCCESS,
    //         message: STATUS_TOAST.LOGOUT_SUCCESS
    //       })
    //     })
    //   navigate(SCREEN_PATHS.HOME)
    //   localStorage.clear()
    //   dispatch({ type: ACTION_TYPE.LOGOUT })
    // }
  
    // const initData = async () => {
    //   const token = localStorage.getItem(LOCAL_KEYs.ACCESS_TOKEN)
    //   let userInfo: any = null
    //   try {
    //     if (token) {
    //       userInfo = await getCurrentUser('').unwrap()
    //     }
    //   } catch (error) {
    //     //
    //   } finally {
    //     setTimeout(() => {
    //       dispatch({
    //         type: ACTION_TYPE.INITIALIZE,
    //         payload: {
    //           isAuthenticated: Boolean(token && userInfo),
    //           user: userInfo
    //         }
    //       })
    //     }, 200)
    //   }
    // }
  
    // useEffect(() => {
    //   initData()
    // }, [])
  
    if (!state.isInitialized) {
      return <SlashScreen />
    }
  
    return (
      <>
        <AuthContext.Provider
          value={{
            ...state,
            // logout,
            // login
          }}
        >
          {children}
        </AuthContext.Provider>
      </>
    )
  }

export default AuthContext
