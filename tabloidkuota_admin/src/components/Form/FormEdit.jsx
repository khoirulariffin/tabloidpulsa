import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  postEditPost,
  postFetchDetailPost,
} from "../../actions/actionCreator";

const FormEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { posts } = useSelector((state) => state);

  const [formData, setFormData] = useState({
    title: "",
    imgUrl: "",
    CategoryId: "",
    content: "",
    authorId: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      slug: formData.title.split(" ").join("-"),
      id,
    };

    dispatch(postEditPost(finalData));

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  useEffect(() => {
    dispatch(postFetchDetailPost(+id));
  }, [+id, dispatch]);

  useEffect(() => {
    if (posts.detailPost) {
      setFormData((data) => ({
        ...data,
        title: posts.detailPost.title,
        imgUrl: posts.detailPost.imgUrl,
        CategoryId: posts.detailPost.CategoryId,
        content: posts.detailPost.content,
      }));
    }
  }, [posts.detailPost]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mt-4 py-4 bg-slate-50  rounded">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between mx-12">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your title post?</span>
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your image URL?</span>
              </label>
              <input
                type="text"
                name="imgUrl"
                value={formData.imgUrl}
                onChange={handleChange}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is category post?</span>
              </label>
              <select
                name="categoryId"
                value={formData.CategoryId}
                onChange={handleChange}
                className="select select-bordered w-full max-w-xs"
              >
                {posts.categories.map((category) => {
                  return (
                    <option
                      value={category.id}
                      key={category.id}
                      defaultValue={category.id === formData.CategoryId}
                    >
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="form-control mx-12">
            <label className="label">
              <span className="label-text">Your content</span>
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="textarea textarea-bordered h-24"
              placeholder="your content"
            ></textarea>
          </div>
          <div className="flex flex-row justify-start px-12 gap-4">
            <button className="btn btn-info btn-wide">Edit post</button>
            <NavLink to={"/"}>
              <button className="btn btn-wide">Cancel</button>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormEdit;
