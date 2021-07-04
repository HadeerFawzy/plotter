import React, { useContext, createContext, useState } from "react";
import Layout from "components/shared/layout";
import Snackbar from "components/shared/snackbar";
const LayoutSnackbarContext = createContext();

const LayoutProvider = ({ children }) => {

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error",
    duration: 4000,
  });

  const handleClose = (event, reason) => {
    // On snackbar close
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  return (
    <>
      <LayoutSnackbarContext.Provider value={{snackbar, setSnackbar}}>
        <Snackbar
          open={snackbar.open}
          severity={snackbar.severity}
          message={snackbar.message}
          autoHideDuration={snackbar.duration}
          onClose={handleClose}
        />
        <Layout />
        {children}
      </LayoutSnackbarContext.Provider>
    </>
  );
};

export default LayoutProvider;
export const useLayoutSnackbar = () => useContext(LayoutSnackbarContext);
