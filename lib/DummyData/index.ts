import { faker } from '@faker-js/faker';

// Book categories
const categories = [
  'Fiction',
  'Non-Fiction',
  'Science Fiction',
  'Mystery & Thriller',
  'Romance',
  'Biography',
  'Self-Help',
  'History',
  'Science',
  'Fantasy',
  'Business',
  'Cooking',
  'Travel',
  'Poetry',
  'Children\'s Books'
] as const;

type Category = typeof categories[number];

// Book product interface
export type Book ={
  id: string;
  title: string;
  author: string;
  category: Category;
  isbn: string;
  price: number;
  currency: string;
  description: string;
  publisher: string;
  publicationYear: number;
  pages: number;
  language: string;
  quantityInStock: number;
  rating: number;
  reviews: number;
  imageUrl: string;
}

type BooksByCategory = Record<Category, Book[]>;

// Generate a single book product
function generateBook(): Book {
  const category = faker.helpers.arrayElement(categories);
  const title = faker.commerce.productName();
  const author = faker.person.fullName();
  const isbn = faker.string.numeric(13);
  const price = parseFloat(faker.commerce.price({ min: 9.99, max: 49.99, dec: 2 }));
  const stock = faker.number.int({ min: 0, max: 150 });
  
  return {
    id: faker.string.uuid(),
    title: title,
    author: author,
    category: category,
    isbn: isbn,
    price: price,
    currency: 'USD',
    description: faker.commerce.productDescription(),
    publisher: faker.company.name(),
    publicationYear: faker.number.int({ min: 1990, max: 2024 }),
    pages: faker.number.int({ min: 100, max: 800 }),
    language: 'English',
    quantityInStock: stock,
    rating: parseFloat(faker.number.float({ min: 3.0, max: 5.0, fractionDigits: 1 }).toFixed(1)),
    reviews: faker.number.int({ min: 0, max: 1000 }),
    imageUrl: faker.image.url({ width: 300, height: 450 })
  };
}

// Generate multiple books
function generateBooks(count: number = 20): Book[] {
  const books: Book[] = [];
  for (let i = 0; i < count; i++) {
    books.push(generateBook());
  }
  return books;
}

// Generate books grouped by category
function generateBooksByCategory(): BooksByCategory {
  const booksByCategory = {} as BooksByCategory;
  
  categories.forEach(category => {
    const count = faker.number.int({ min: 3, max: 8 });
    booksByCategory[category] = [];
    
    for (let i = 0; i < count; i++) {
      const book = generateBook();
      book.category = category; // Ensure correct category
      booksByCategory[category].push(book);
    }
  });
  
  return booksByCategory;
}

// Example usage:
console.log('=== Generate 10 Random Books ===\n');
const books = generateBooks(10);
console.log(JSON.stringify(books, null, 2));

console.log('\n\n=== Generate Books by Category ===\n');
const booksByCategory = generateBooksByCategory();
console.log(JSON.stringify(booksByCategory, null, 2));

// Export for use in other modules
export {
  generateBook,
  generateBooks,
  generateBooksByCategory,
  categories,
  type Category,
  type BooksByCategory
};