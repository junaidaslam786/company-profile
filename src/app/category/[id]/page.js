"use client";

import CategoriesList from "@/components/categoryList/CategoriesList";
import Event3 from "@/components/events/EventWorkText";
import { useParams } from "next/navigation";

const CategoryList = () => {
  const { id } = useParams();  // This captures the category ID from the URL

  return (
    <div className="flex font-sans min-h-screen w-full px-[4vw] flex-col items-center justify-between bg-white">
      <CategoriesList categoryId={id} />
      <Event3 />
    </div>
  );
};

export default CategoryList;

