import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  { href: "/cotton", name: "Cotton", imageUrl: "/cotton.jpg" },
  { href: "/washnware", name: "Wash & Ware", imageUrl: "/washnware.webp" },
  { href: "/silk", name: "Silk", imageUrl: "/silk.jpg" },
  {
    href: "/egyptian-cotton",
    name: "Egyptian Cotton",
    imageUrl: "/egyptian-cotton.webp",
  },
  { href: "/khadar", name: "Khadar", imageUrl: "/khadar.jpg" },
  { href: "/suits", name: "Suits", imageUrl: "/suits.webp" },
  {
    href: "/woolen-cotton",
    name: "Woolen Cotton",
    imageUrl: "/woolen-cotton.webp",
  },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();
  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-stone-500 mb-4">
          Explore Our Categories
        </h1>
        <p className="text-center text-xl text-stone-600 mb-12">
          Discover the latest trends in eco-friendly fashion
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
