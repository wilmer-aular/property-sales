import React, { createContext, useContext, useState} from "react";
const LayoutContext = createContext();

export function useLayoutContent() {
    return useContext(LayoutContext);
  }
  
  export const NotifyConsumer = LayoutContext.Consumer;
  export const LayoutProvider = (props) => {
    const [showMenu, setShowMenu] = useState(true);
    
    const values = { showMenu, setShowMenu };
    return (
      <LayoutContext.Provider value={values}>
        {props.children}
      </LayoutContext.Provider>
    );
  };
  