import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = ({}) => {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 ">
        Categories
      </h3>
      {categories.map(category=>(
          <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="cursor-pointer block pb-3 mb-3" >
                  {category.name}
              </span>
          </Link>
      ))}
    </div>
  );
};

export default Categories;
