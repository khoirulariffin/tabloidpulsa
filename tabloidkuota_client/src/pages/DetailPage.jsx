import { useParams } from "react-router-dom";
import { postFetchDetailPost } from "../actions/actionCreator";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(postFetchDetailPost(+id));
  }, []);

  return (
    <div>
      <div className="max-w-screen-lg mx-auto">
        <div className="mb-2 mt-6">
          <p className="px-2 py-0.5 text-white bg-purple-400 max-w-fit rounded">
            NEWS
          </p>
        </div>
        <h1 className="text-2xl">{posts.detailPost?.title}</h1>
        <h5 className="text-sm font-light tracking-wider mb-2">
          By <span className="font-semibold">Redaksi PULSA</span> - May 15, 2023
        </h5>
        <hr />
        <div className="mt-2 leading-8">
          <img
            className="w-full"
            src={posts.detailPost?.imgUrl}
            alt="gambar1"
          />
          <p className="text-justify mt-2">{posts.detailPost?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
