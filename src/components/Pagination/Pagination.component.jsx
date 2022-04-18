import { usePagination } from '../../utils/hooks/usePagination';
import { Paginate, Page } from './Pagination.styles';

const Pagination = ({ items }) => {
  const { nextPage, prevPage, page, setPage, totalPages } = usePagination({
    contentPerPage: 12,
    count: items.length,
  });

  return (
    <Paginate>
      <Page onClick={prevPage}>&larr;</Page>
      {[...Array(totalPages).keys()].map((el) => (
        <Page
          onClick={() => setPage(el + 1)}
          key={el}
          className={`${page === el + 1 ? 'active' : ''}`}
        >
          {el + 1}
        </Page>
      ))}
      <Page
        onClick={nextPage}
        className={`${page === totalPages && 'disabled'}`}
      >
        &rarr;
      </Page>
    </Paginate>
  );
};

export default Pagination;
