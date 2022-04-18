import { useCategories } from '../../utils/hooks/useCategories';
import Loading from '../Loading';
import Error from '../Error';
import {
  ClearFilter,
  FilterCategory,
  FilterItem,
  Filters,
} from './Sidebar.styles';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const { data: categoriesData, isCategoriesLoading } = useCategories();
  const { results: categories } = categoriesData;

  const isSelected = (slug) => selectedCategory.includes(slug);

  const selectOption = (slug) => {
    setSelectedCategory(
      isSelected(slug)
        ? selectedCategory.filter((option) => option !== slug)
        : [...selectedCategory, slug]
    );
  };

  if (isCategoriesLoading) {
    return <Loading />;
  } else if (!categories) {
    return <Error type="categories" />;
  }

  return (
    <>
      <Filters>
        {categories.map((category) => (
          <FilterCategory
            key={category.id}
            onClick={() => selectOption(category.slugs[0])}
          >
            {category.data.name}
          </FilterCategory>
        ))}
        <ClearFilter onClick={() => setSelectedCategory([])}>
          Clear all filters
        </ClearFilter>
      </Filters>
      <FilterItem />
    </>
  );
};

export default Sidebar;
