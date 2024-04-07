
import PropTypes from 'prop-types';
import BookMark from "./BookMark";

const BookMarks = ({ bookMarks, readTime }) => {
    return (
        <div className="md:w-1/3">
            <h1>Reading Time: {readTime}</h1>
            <h1>Bookmarks: {bookMarks.length}</h1>
            {
                bookMarks.map(bookMark => (
                    <BookMark key={bookMark.id} bookMark={bookMark} readingTime={readTime} />
                ))
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks: PropTypes.array.isRequired,
  readTime: PropTypes.number
};

export default BookMarks;
