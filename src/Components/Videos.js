import React from "react";
import { useGetVideosQuery } from "../service/youtube";
import Loader from "../Components/Loader";
import Error from "../Components/Error";

const Videos = () => {
  const { data, isFetching, error } = useGetVideosQuery({});

  if (isFetching) return <Loader />;
  if (error) return <Error />;
  return (
    <div className="mt-20">
      <div className="text-center mb-20">
        <h1 className="text-xl">Check Our Music Videos</h1>
      </div>
      <div className="flex gap-10 flex-wrap px-10  items-center justify-center">
        {data?.contents.slice(6, 12).map((item) => (
          <div key={item.channelId}>
            <a
              target="_blank"
              href={`https://www.youtube.com/watch?v=${item.video?.videoId}`}
              rel="noreferrer"
            >
              <img
                src={item.video?.thumbnails[0].url}
                alt={item.video?.title}
                className="w-[400px]"
              />
              <h1 className="truncate text-sm max-w-[190px]">
                {item.video?.title}
              </h1>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
