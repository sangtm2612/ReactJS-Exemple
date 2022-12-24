import React from "react";
import CategoryPage from "./category/CategoryPage";
import '../style/content.css'

export default function Content() {
  return (
    <>
      <div className="content">
        <CategoryPage></CategoryPage>
      </div>
    </>
  );
}
