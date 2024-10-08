import ImageUpload from "@/app/components/ImageUpload";
import React from "react";
import dynamic from "next/dynamic";

const LayoutCreatorComponent = dynamic(() => import("./LayoutCreator"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Home = () => {
  return (
    <>
      <ImageUpload />
      <LayoutCreatorComponent />
    </>
  );
};

export default Home;
