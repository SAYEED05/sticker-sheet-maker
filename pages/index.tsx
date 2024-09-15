import ImageUpload from "@/app/components/ImageUpload";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <Link href="/LayoutCreator">to layout creator</Link>
      <ImageUpload />
    </>
  );
};

export default Home;
