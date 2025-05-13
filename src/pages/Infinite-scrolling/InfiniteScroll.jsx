import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import "./infinite-scroll.css";
import { GetPhotos } from "../../api/JsonPlaceholderApi";

export const InfiniteQuery = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["apidata"],
    queryFn: GetPhotos,
    getNextPageParam: (lastpage, allpage) => {
      if (lastpage.length < 3) return undefined;
      return allpage.length + 1;
    },
  });

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >
      window.document.documentElement.scrollHeight - 1;
    if (bottom && hasNextPage) {
      fetchNextPage();
    }
  };

  console.log(data);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () =>  window.removeEventListener("scroll", handleScroll);
    
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className="infiniteScroll__container">
      {data?.pages.map((item) => {
        return item.map((data) => {
          const { id, title } = data;
          return (
            <div className="post__container" key={id}>
              <div>{title}</div>
            </div>
          );
        });
      })}
    </div>
  );
};
