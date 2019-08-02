import React from "react";
import { useEffect, useState } from "react";

export function usePagination(data) {
  const [page, setPage] = useState(1);
  const [slice, setSlice] = useState([]);
  const [list, setListSize] = useState({ data: [] });

  useEffect(() => {
    const max = 10 * page;
    setSlice(list.data.slice(max - 10, max));
  }, [page, list]);

  useEffect(() => {
    const list = Array.isArray(data) ? data : Object.values(data);
    setListSize({
      max: Math.ceil(list.length / 10),
      data: list
    });
  }, [data]);

  return [
    slice,
    <ul className="pagination">
      <li>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          prev
        </button>
      </li>
      <li>
        {page}-{list.max}
      </li>
      <li>
        <button disabled={page === list.max} onClick={() => setPage(page + 1)}>
          next
        </button>
      </li>
    </ul>
  ];
}
