import { faker } from '@faker-js/faker';

export type Image = {
  fields: {
    file: {
      url: string;
    };
  }
}
export type Product ={
  id:string;
  slug: string;
  name: string;
  categories: string;
  price: number;
  description: string;
  image: Image[];

}

function generateBook(): Product {
  const category = faker.commerce.productName()
  const title = faker.commerce.productName();
  const author = faker.person.fullName();
  const isbn = faker.string.numeric(13);
  const price = parseFloat(faker.commerce.price({ min: 9.99, max: 49.99, dec: 2 }));
  const stock = faker.number.int({ min: 0, max: 150 });
  
  return {
    id: faker.string.uuid(),
    name: title,
    categories: category,
    price: price,
    description: faker.commerce.productDescription(),
    image: faker.image.url({ width: 300, height: 450 }),
    slug:title

  };
}

// Generate multiple books
function generateBooks(count: number = 20): Product[] {
  const books: Product[] = [];
  for (let i = 0; i < count; i++) {
    books.push(generateBook());
  }
  return books;
}


export {
  generateBook,
  generateBooks,
};