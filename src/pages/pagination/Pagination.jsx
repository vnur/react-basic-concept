import { keepPreviousData, useQuery } from "@tanstack/react-query";
import "./pagination.css";
import { getQuotes } from "../../api/QuotesApi";
import { useState } from "react";

export const Pagination = () => {
  const [pageNo, setPageNo] = useState(0);

  const { data } = useQuery({
    queryKey: ["data",pageNo],
    queryFn: ()=>getQuotes(pageNo),
    placeholderData: keepPreviousData,
  });


  return (
    <>
      <div className="pagination-container">
        {data?.quotes.map((item) => {
          const { id, quote } = item;
          return (
            <div className="card" key={id}>
              {quote}
            </div>
          );
        })}
      </div>

     {data && ( <div className="buttons-group">
        <button onClick={()=>setPageNo((prev)=>prev-1)} disabled={pageNo < 1 ? true : false}>
          Prevx
        </button>
        <span>{pageNo + 1}</span>
        <button onClick={()=>setPageNo((prev)=>prev+1)}>Next</button>
      </div>)}
    </>
  );
};
