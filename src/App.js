import "./App.css";
import {
    useCreatePostMutation,
    useGetAllPostsQuery,
} from "./features/apiSlice";

function App() {
    const { data: posts, isLoading } = useGetAllPostsQuery();
    const [createPost, { data: newPost, isLoading: fetchingNewPost }] =
        useCreatePostMutation();

    return (
        <div className="App">
            <div style={{ textAlign: "center" }}>
                <h2>RTK Query Post </h2>

                <button
                    onClick={() =>
                        createPost({
                            id: Date.now(),
                            userId: 1,
                            title: "RTK Query ",
                            body: "Learning RTK Query......",
                        })
                    }
                >
                    Create post
                </button>

                {isLoading && <h3>Loading...</h3>}
                {fetchingNewPost && <h3>Creating new post...</h3>}
            </div>

            <ul>
                {newPost && !fetchingNewPost && (
                    <li className="post-item">
                        <h3>{newPost?.title}</h3>
                        <p>{newPost?.body}</p>
                    </li>
                )}
                {!isLoading &&
                    posts.map((post) => (
                        <li key={post.id} className="post-item">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default App;
