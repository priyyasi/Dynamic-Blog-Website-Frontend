import PostAuthor from "../components/PostAuthor";

import { Link } from "react-router-dom";

import postDetailImage from "../assets/1.jpg";

export default function PostDetail() {
  return (
    <section>
      <div className="container PostDetail-container">
        <div className="postdetail-top">
          <PostAuthor />
          <div className="postdetail-buttons">
            <Link to={"/posts/werwer/edit"} className="btn btn-sm btn-primary">
              Edit
            </Link>
            <Link to={"/posts/werwer/delete"} className="btn btn-sm btn-danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="postdetail-image">
          <img src={postDetailImage} alt="" />
        </div>
        <div className="postdetail-para">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
            corrupti modi. Nam sit ut amet laborum, ipsa ducimus provident
            consequuntur doloribus vero fugiat, et voluptatem vel totam quis
            modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
            corrupti modi. Nam sit ut amet laborum, ipsa ducimus provident
            consequuntur doloribus vero fugiat, et voluptatem vel totam quis
            modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
            corrupti modi. Nam sit ut amet laborum, ipsa ducimus provident
            consequuntur doloribus vero fugiat, et voluptatem vel totam quis
            modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
            corrupti modi. Nam sit ut amet laborum, ipsa ducimus provident
            consequuntur doloribus vero fugiat, et voluptatem vel totam quis
            modi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
            corrupti modi. Nam sit ut amet laborum, ipsa ducimus provident
            consequuntur doloribus vero fugiat, et voluptatem vel totam quis
            modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
            corrupti modi. Nam sit ut amet laborum, ipsa ducimus provident
            consequuntur doloribus vero fugiat, et voluptatem vel totam quis
            modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
            corrupti modi. Nam sit ut amet laborum, ipsa ducimus provident
            consequuntur doloribus vero fugiat, et voluptatem vel totam quis
            modi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
            corrupti modi. Nam sit ut amet laborum, ipsa ducimus provident
            consequuntur doloribus vero fugiat, et voluptatem vel totam quis
            modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
            corrupti modi. Nam sit ut amet laborum, ipsa ducimus provident
            consequuntur doloribus vero fugiat, et voluptatem vel totam quis
            modi!
          </p>
        </div>
      </div>
    </section>
  );
}
