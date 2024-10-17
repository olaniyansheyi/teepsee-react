import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

function MenuProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearchQuery, setOpenSearchQuery] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showTrackingModal, setShowTrackingModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  function handleToggleMenu() {
    setOpenMenu((prevState) => !prevState);
  }

  function handleToggleSearch() {
    setOpenSearchQuery((prevState) => !prevState);
  }

  function handleToggleShowInfoModal() {
    setShowInfoModal((prevState) => !prevState);
  }

  function handleToggleShowRatingModal() {
    setShowRatingModal((prevState) => !prevState);
  }

  function handleToggleShowTrackingModal() {
    setShowTrackingModal((prevState) => !prevState);
  }

  function handleToggleShowCheckoutModal() {
    setShowCheckoutModal((prevState) => !prevState);
  }

  return (
    <MenuContext.Provider
      value={{
        openMenu,
        openSearchQuery,
        showInfoModal,
        showRatingModal,
        showTrackingModal,
        showCheckoutModal,
        handleToggleMenu,
        handleToggleSearch,
        handleToggleShowInfoModal,
        handleToggleShowRatingModal,
        handleToggleShowTrackingModal,
        handleToggleShowCheckoutModal,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}

export { MenuProvider, useMenu };
