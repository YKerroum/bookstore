import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/bookSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const { loading, books, refresh } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [refresh, dispatch]);

  return (
    <div className="inner">
      <Book
        isLoading={loading}
        books={books}
      />
    </div>
  );
};

export default BookList;
