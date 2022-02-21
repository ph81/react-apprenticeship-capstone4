import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useSingleProduct(id) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [singleProduct, setSingleProduct] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getSingleProduct() {
      try {
        setSingleProduct({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.id, "${id}")]]`
          )}&lang=en-us`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setSingleProduct({ data, isLoading: false });
      } catch (err) {
        setSingleProduct({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getSingleProduct();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return singleProduct;
}
