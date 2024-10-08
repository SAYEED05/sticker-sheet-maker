import React from "react";
import dynamic from "next/dynamic";

const LayoutCreatorComponent = dynamic(() => import("./LayoutCreator"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Home = () => {
  return (
    <>
      <LayoutCreatorComponent />
    </>
  );
};

export default Home;
