import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../actions/actionCreator";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Content = () => {
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto flex flex-row mt-8 gap-10">
      <div className="flex flex-col w-3/4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">NEWS</h1>
        </div>
        <div>
          <hr className="w-16 border border-yellow-500" />
        </div>
        <div className="flex flex-row mt-4 gap-4">
          <div className="w-1/2 flex flex-col gap-1">
            <NavLink to={`detail/${posts[0]?.id}`}>
              <img src={posts[0]?.imgUrl} alt="gambar" className="h-52" />
              <h1 className="text-justify">{posts[0]?.title}</h1>
              <p className="text-sm font-semibold">
                Khoirul Ariffin -{" "}
                <span className="font-light">May 16, 2023</span>
              </p>
              <p className="text-sm line-clamp-6 text-justify font-light">
                {posts[0]?.content}
              </p>
            </NavLink>
          </div>
          <div className="w-1/2 flex flex-col gap-2 justify-between">
            {posts.map((post) => {
              return (
                <NavLink to={`detail/${post?.id}`}>
                  <div className="flex flex-row w-full" key={post.id}>
                    <img
                      src={post?.imgUrl}
                      alt="gambar1"
                      className="w-1/2 h-24 object-cover"
                    />
                    <div className="w-1/2 ml-1 flex flex-col justify-between">
                      <h1 className="text-xs text-start">{post?.title}</h1>
                      <div className="flex flex-row text-xs gap-1 items-center mt-1">
                        <h1 className="bg-black p-0.5 text-white rounded px-1">
                          NEWS
                        </h1>
                        <h2>May 16, 2023</h2>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">EDITOR'S PICK</h1>
        </div>
        <div>
          <hr className="w-36 border border-purple-500" />
        </div>
        <div className="mt-4 flex flex-col justify-between gap-4">
          {posts.map((post) => {
            return (
              <NavLink to={`detail/${post?.id}`}>
                <div key={post.id}>
                  <h1>{post?.title}</h1>
                  <p className="text-xs mt-1 font-semibold">
                    Khoirul Ariffin -{" "}
                    <span className="font-normal">May 16, 2023</span>
                  </p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
