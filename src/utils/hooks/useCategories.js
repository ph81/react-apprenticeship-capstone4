import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useCategories() {
  const { ref: apiRef, isCategoriesLoading: isApiMetadataLoading } =
    useLatestAPI();
  const [categories, setCategories] = useState(() => ({
    data: {},
    isCategoriesLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getCategories() {
      try {
        setCategories({ data: {}, isCategoriesLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]'
          )}&lang=en-us&pageSize=30`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setCategories({ data, isCategoriesLoading: false });
      } catch (err) {
        setCategories({ data: {}, isCategoriesLoading: false });
        console.error(err);
      }
    }

    getCategories();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return categories;
}
