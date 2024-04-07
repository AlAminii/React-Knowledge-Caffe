import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types'; // ES6

const Blog = ({blog, handaleAddtoBookmark, hanaleMarkAsRead}) => {
    const {id, title, cover, authorImage, readingTime, authorName, postedDate, hashtag} = blog;

    return (
        <div className='p-4'>
            <img className='w-full' src={cover} alt="" />

           <div className='flex justify-between'>
            <div className='flex'>
               <img className='w-14 mb-4' src={authorImage} alt="" />
               <div className='ml-6 mb-4'>
                <h2>{authorName}</h2>
                <p className='mt-4'>{[postedDate]}</p>
               </div>
              

            </div>

            <div>
                {readingTime}
                <button onClick={()=>handaleAddtoBookmark(blog)} className="ml-2"><CiBookmark></CiBookmark></button>

            </div>

           
           </div>
           <h2> {title}</h2>
           <p>
                {
                    hashtag.map(has => <span key={has}><a href="">{has}</a></span>)
                }
            </p>
            <button onClick={()=> hanaleMarkAsRead( readingTime)} className="btn text-purple-800 mt-5 underline">Mark As read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
   
};


export default Blog;