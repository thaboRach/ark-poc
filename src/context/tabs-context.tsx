import React, { createContext, useState } from "react";

const initialState: {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
} = {
  activeTab: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setActiveTab: () => {},
};

export const TabsContext = createContext(initialState);

interface TabsContextProps {
  children: React.ReactNode;
}

export const TabsContextProvider: React.FC<TabsContextProps> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState<string>("login");

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export default TabsContext;
