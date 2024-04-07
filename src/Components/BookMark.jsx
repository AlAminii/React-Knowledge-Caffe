import React from "react";

const BookMark = ({ bookMark, readingTime }) => {
    const { title } = bookMark;

    return (
        <div className="bg-slate-200 p-4 m-4 rounded-lg">
            <div>
                <h1>Reading Time: {readingTime}</h1>
            </div>
            <h1 className="text-3xl">{title}</h1>
        </div>
    );
};

export default BookMark;
