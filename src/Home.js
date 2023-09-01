import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    // const [name, setName] = useState('Ezekiel');
    // const [age, setAge] = useState(19)

    // const handleClick = () => {
    //     setName('Yvan');
    //     setAge(20);
    // }

    // const [blogs, setBlogs] = useState([
    //     {title: 'My new web site', body: 'lorrem ipsum...', author: 'Ezekiel', id: 1},
    //     {title: 'Welcome party!', body: 'lorrem ipsum...', author: 'Yvan', id: 2},
    //     {title: 'Web dev top tips', body: 'lorrem ipsum...', author: 'Ezekiel', id: 3}
    // ]);

    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);
    
    // const [name, setName] = useState('Ezekiel');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    
    // useEffect(() => {
    //     // console.log(name);  
    //     // console.log('use effect ran');  

    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogs')
    //     .then(res => {
    //         console.log(res);
    //         if(!res.ok){
    //             throw Error('could not fetch data for that ressource');
    //         }
    //         return res.json()
    //     })
    //     .then(data => {
    //             // console.log(data);
    //             setBlogs(data);
    //             setIsPending(false);
    //             setError(null); 
    //     })
    //     .catch(err => {
    //         setIsPending(false);
    //         setError(err.message);
    //     })
    //     }, 1000);

    // }, []);

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {/* <h2>Hompage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>} */}

            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Ezekiel')} title="Ezekiel's Blogs!" /> */}
            {/* <button onClick={() => setName('Zeke')}>Change Name</button> */}
            {/* <p>{ name }</p> */}

        </div>
     );
}
 
export default Home;
