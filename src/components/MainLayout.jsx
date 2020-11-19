import React from "react";
import { Helmet } from "react-helmet";

import Sidebar from "./Sidebar";

export default function MainLayout(props) {
  const { component: Child } = props;

  /**
  |--------------------------------------------------
  | Contexts
  |--------------------------------------------------
  */
  // const { authenticationStore } = useContext(storesContext)

  /**
  |--------------------------------------------------
  | States
  |--------------------------------------------------
  */
  // const [isCheckingAuth, setIsCheckingAuth] = useState(true)
  // const [isNotSigned, setIsNotSigned] = useState(false)

  /**
  |--------------------------------------------------
  | Handlers
  |--------------------------------------------------
  */
  // function onAuthen() {
  //   setIsCheckingAuth(false)
  //   setIsNotSigned(false)
  // }

  // const checkAuth = useCallback(async () => {
  //   try {
  //     if (Cookies.get(process.env.REACT_APP_ACCESS_TOKEN_NAME)) {
  //       await authenticationStore.me()
  //       if (authenticationStore.currentUser) {
  //         if (props.superAdminOnly && !authenticationStore.isSuperAdmin) {
  //           navigate(`/`)
  //         }

  //         setIsCheckingAuth(false)
  //         return
  //       }
  //     }

  //     setIsNotSigned(true)
  //     setIsCheckingAuth(false)
  //   } catch (error) {
  //     console.error(error)
  //     setIsNotSigned(true)
  //     setIsCheckingAuth(false)
  //   }
  // }, [authenticationStore])

  // useEffect(() => {
  //   checkAuth()
  // }, [checkAuth])

  /**
  |--------------------------------------------------
  | Render
  |--------------------------------------------------
  */

  // if (isCheckingAuth) {
  //   return <div />
  // }

  // if (isNotSigned) {
  //   return <SignIn onAuthen={onAuthen} />
  // }

  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <title>KSF</title>
      </Helmet>

      <div className="flex flex-1 overflow-auto">
        <Sidebar
          currentTab={props.currentTab}
          currentSubTab={props.currentSubTab}
        />
        <div className="flex flex-1">
          <Child {...props} />
        </div>
      </div>
    </div>
  );
}
