import React from "react";
import dynamic from "next/dynamic";
import { ReactQueryProvider } from "@/app/configs/react-query/ReactQuerProvider";
import RootLayout from "@/app/layout";

const LayoutCreatorComponent = dynamic(() => import("./LayoutCreator"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Home = () => {
  return (
    <ReactQueryProvider>
      <LayoutCreatorComponent />
    </ReactQueryProvider>
  );
};

export default Home;
