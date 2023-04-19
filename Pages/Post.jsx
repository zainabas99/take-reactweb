
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Components/Loading';

function Post() {
//   const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const fetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=3')
      .then((response) => {
        console.log(response);
        if (response && response.status === 200) {
          setPosts(response.data);
          setLoading(false);
          setError(false);
        } else {
          setError('Error Found');
        }
      })
      .catch((err) => {
        setError('page not found 404');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  const deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    fetchData();
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

 
  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
      })
      .then((response) => {
        fetchData();
      });
  };


  return (
    <main style={{ backgroundColor: 'white' }}>
  
     
     
      {error ? (
        <>{error}</>
      ) : (
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div>
              <div>
              <h1 class="text-3xl font-bold text-gray-800 mb-4">Add Post</h1>

                <form onSubmit={handleSubmit}>
                <input 
  type='text'
  value={title}
  name='title'
  onChange={handleTitle}
  placeholder='Name'
  class="border-2 border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"/>

                  <br/>
                  <input  type='text' value={body} onChange={handleBody} name='body' placeholder='Body'
  class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"/>

                  <br/>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Submit</button>

                </form>
              </div>
              {posts &&
                posts.map((post, i) => (
                  <div key={post.id}>
                    <p>{post.title}</p>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4  rounded" onClick={() => deletePost(post.id)}>Delete
</button>


                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
export default Post;
