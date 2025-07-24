import { useCallback, useState, memo, use, useEffect } from 'react';

export default function UseCallbackExample() {
  const ALL_BOOKS = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 5, title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez' },
    { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { id: 8, title: 'Brave New World', author: 'Aldous Huxley' },
  ];

  const [books, setBooks] = useState(ALL_BOOKS);

  const handleSearch = useCallback((searchTerm: string) => {
    console.log(books[0])
    const filteredBooks = ALL_BOOKS.filter(book =>
      book.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    setBooks(filteredBooks);
  }, [books]);

  const handleShuffle = useCallback(() => {
    setBooks(prev => prev.slice().sort(() => Math.random() - 0.5));
 
  }, []);
 useEffect(() => {
    throw new Error('This is a test error for the ErrorBoundary component');
 },[])
    
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-8'>
      {/* Shuffle & Search */}
      <div>
        <div className='flex items-center justify-center gap-4'>
          <button onClick={handleShuffle}>Shuffle Books</button>
          <SearchBox onChange={handleSearch} />
        </div>

        {/* Book List */}
        <ul className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {books.map(book => (
            <li key={book.id} className='rounded-md border p-4 shadow-sm'>
              <h3 className='text-lg font-semibold'>{book.title}</h3>
              <p className='text-gray-600'>{book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ✅ SearchBox component with memo to avoid re-render
interface ISearchBoxProps {
  onChange: (value: string) => void;
  className?: string;
}

const SearchBox = memo(function SearchBox({ onChange, className }: ISearchBoxProps) {
  console.log('SearchBox rendered');

  return (
    <input
      type='text'
      placeholder='Search Books...'
      onChange={e => onChange(e.target.value)}
      className={'rounded-md border border-gray-300 p-2'}
    />
  );
});
