import CategoryItem from "../category-item/CategoryItem";
import "./CategoryMenu.styles.scss";
function CategoryMenu({ categories }) {
  return (
    <div>
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
