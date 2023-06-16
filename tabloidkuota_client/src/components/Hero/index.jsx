import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../actions/actionCreator";
import { useEffect } from "react";

const Hero = () => {
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="max-w-screen-lg h-[450px] mx-auto shadow flex flex-col">
      <div className="flex flex-row h-[100px] items-end mx-4">
        <div className="mb-4 w-1/5">
          <h1 className="bg-red-400 px-2 text-white font-semibold">
            TRENDING NOW
          </h1>
        </div>
        <div className="flex flex-row mb-4 ml-4 justify-between w-4/5">
          <div>News 1 dan deskripsi</div>
          <div className="flex flex-row gap-2">
            <button className="px-2 outline outline-1 outline-gray-100 rounded">
              &lt;
            </button>
            <button className="px-2 outline outline-1 outline-gray-100 rounded">
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="h-[350px] flex mx-4 flex-row gap-1">
        <NavLink to={`detail/${posts[0]?.id}`}>
          <div className="text-center basis-1/2 h-full overflow-hidden">
            <div className="h-full w-full bg-black">
              <img
                src={posts[0]?.imgUrl}
                alt="gambar1"
                className="hover:scale-105 hover:opacity-80 opacity-90 transition-all h-full w-full duration-500 cursor-pointer bg-cover"
              />
            </div>
            <h1 className="font-semibold text-xl w-4/5 ml-6 -mt-20 text-white scale-105 text-start">
              {posts[0]?.title}
            </h1>
          </div>
        </NavLink>
        <div className="basis-1/2 flex flex-row w-full gap-1 h-full">
          <div className="flex flex-col w-full gap-1 basis-1/2 justify-between">
            <div className="h-full basis-1/2 overflow-hidden">
              <NavLink to={`detail/${posts[1]?.id}`}>
                <div className="h-full w-full bg-black">
                  <img
                    src={posts[1]?.imgUrl}
                    alt="gambar1"
                    className="hover:scale-105 hover:opacity-80 opacity-90 transition-all h-full w-full duration-500 cursor-pointer bg-cover"
                  />
                </div>
                <h1 className="font-semibold text-sm w-4/5 ml-3 -mt-16 text-white scale-105 text-start">
                  {posts[1]?.title}
                </h1>
              </NavLink>
            </div>
            <div className="h-full basis-1/2 overflow-hidden">
              <NavLink to={`detail/${posts[2]?.id}`}>
                <div className="h-full w-full bg-black">
                  <img
                    src={posts[2]?.imgUrl}
                    alt="gambar1"
                    className="hover:scale-105 hover:opacity-80 opacity-90 transition-all h-full w-full duration-500 cursor-pointer bg-cover"
                  />
                </div>
                <h1 className="font-semibold text-sm w-4/5 ml-3 -mt-16 text-white scale-105 text-start">
                  {posts[2]?.title}
                </h1>
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1 basis-1/2 justify-between">
            <div className="h-full basis-1/2 overflow-hidden">
              <NavLink to={`detail/${posts[3]?.id}`}>
                <div className="h-full w-full bg-black">
                  <img
                    src={posts[3]?.imgUrl}
                    alt="gambar1"
                    className="hover:scale-105 hover:opacity-80 opacity-90 transition-all h-full w-full duration-500 cursor-pointer bg-cover"
                  />
                </div>
                <h1 className="font-semibold text-sm w-4/5 ml-3 -mt-16 text-white scale-105 text-start">
                  {posts[3]?.title}
                </h1>
              </NavLink>
            </div>
            <div className="h-full basis-1/2 overflow-hidden">
              <NavLink to={`detail/${posts[4]?.id}`}>
                <div className="h-full w-full bg-black">
                  <img
                    src={posts[4]?.imgUrl}
                    alt="gambar1"
                    className="hover:scale-105 hover:opacity-80 opacity-90 transition-all h-full w-full duration-500 cursor-pointer bg-cover"
                  />
                </div>
                <h1 className="font-semibold text-sm w-4/5 ml-3 -mt-16 text-white scale-105 text-start">
                  {posts[4]?.title}
                </h1>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
