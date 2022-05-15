import React, { useContext, useState} from 'react'

const ResponcesContext = React.createContext();
const ResponcesUpdateContext = React.createContext();

export function useResponcesContext() {
  return useContext(ResponcesContext);
}

export function useResponcesUpdateContext() {
  return useContext(ResponcesUpdateContext);
}

export function ResponcesProvider( {children}) {
  const [responces, setResponces] = useState([]);

  function addResponce(responce) {
    setResponces([...responces, responce]);
  }

  function addAllResponces(responces) {
    setResponces(responces);
  }

  return (
    <ResponcesContext.Provider value={responces}>
      <ResponcesUpdateContext.Provider value={[addResponce, addAllResponces]}>
        {children}
      </ResponcesUpdateContext.Provider>
    </ResponcesContext.Provider>
  )
}
