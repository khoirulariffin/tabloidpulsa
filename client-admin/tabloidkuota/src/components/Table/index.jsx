import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postDeletePost } from "../../actions/actionCreator";
import { useEffect, useState } from "react";

const Table = () => {
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const deletePost = (id) => {
    dispatch(postDeletePost(id));
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen bg-red-400">
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto max-w-screen-xl mx-auto mt-14">
        <div className="flex items-end w-full flex-row justify-end mb-4">
          <NavLink to={"/create-post"}>
            <button className="btn btn-primary">Create Post</button>
          </NavLink>
        </div>
        <table className="w-full overflow-x-auto">
          {/* head */}
          <thead className="bg-slate-100">
            <tr className="p-4">
              <th className="w-14"></th>
              <th className="w-60">Title</th>
              <th className="w-14">Image</th>
              <th className="w-64">Slug</th>
              <th className="w-96">Content</th>
              <th className="w-14">Category</th>
              <th className="w-14">Author</th>
              <th className="w-14 p-1 rounded">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {posts.map((post, index) => {
              return (
                <tr key={post.id}>
                  <th>{index + 1}</th>
                  <td>{post.title}</td>
                  <td>
                    <img
                      className="w-14 h-14 object-cover"
                      src={post.imgUrl}
                      alt="gambar1 "
                    />
                  </td>
                  <td>{post.slug}</td>
                  <td className="line-clamp-3">{post.content}</td>
                  <td>{post.CategoryId}</td>
                  <td>{post.AuthorId}</td>
                  <td>
                    <NavLink to={`/edit-post/${post.id}`}>
                      <button className="btn w-full">Edit</button>
                    </NavLink>
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                      className="btn btn-error w-full"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
