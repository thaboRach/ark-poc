import { useContext } from "react";
import {
  Tabs,
  TabList,
  TabTrigger,
  TabContent,
  TabIndicator,
} from "@ark-ui/react";
import TabsContext from "../context/tabs-context";

interface TabItem {
  value: string;
  component: JSX.Element;
}

interface TabbedProps {
  options: TabItem[];
}

const Tabbed = ({ options }: TabbedProps) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <Tabs
      className="w-full flex flex-col flex-1 max-w-[800px]"
      value={activeTab}
      onChange={(e) => setActiveTab(e.value ?? "")}
    >
      <TabList className="flex text-2xl font-medium text-center text-white w-full">
        {options.map((item, index) => (
          <TabTrigger
            key={index}
            className={`border-b w-full max-w-[380px] ${
              activeTab === options[index].value
                ? "border-white"
                : "border-[rgba(238,238,238,0.25)] "
            }`}
            value={item.value}
          >
            {item.value.toUpperCase()}
          </TabTrigger>
        ))}
        <TabIndicator />
      </TabList>

      {options.map((item, index) => (
        <TabContent key={index} value={item.value}>
          {item.component}
        </TabContent>
      ))}
    </Tabs>
  );
};

export default Tabbed;
