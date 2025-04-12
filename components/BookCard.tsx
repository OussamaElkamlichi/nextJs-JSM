import Link from 'next/link'
import React from 'react'
import BookCover from './BookCover'

const BookCard = ({ id, coverColor, coverUrl}: Book) => (
  <li>
    <Link href={`/book/${id}`}>
      <BookCover coverColor={coverColor} coverUrl={coverUrl} />
    </Link>
  </li>
)


export default BookCard
