import { createClient } from 'contentful';
import { Product } from '../DummyData';


// Initialize Contentful client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,

  host:'cdn.contentful.com'
});

export async function fetchProducts() {
    const res = await client.getEntries({
      content_type: 'product',
    });
  
    return res.items.map((item) => ({
      id: item.sys.id,
      ...item.fields
    }));
  }


  export async function getProductBySlug(slug: string): Promise<Product | null> {
    try {
      const response = await client.getEntries({
        content_type: 'product',
        'fields.slug': slug,
        limit: 1,
      });
  
      if (response.items.length === 0) {
        return null;
      }
  
      const item = response.items[0];
      const fields = item.fields as any;
  
      return {
        id: item.sys.id,
        slug: fields.slug,
        name: fields.name,
        categories: fields.categories,
        price: fields.price,
        description: fields.description,
        image: fields.image?.map((img: any) => ({
          url: `https:${img.fields.file.url}`,
          alt: img.fields.title || fields.name,
          width: img.fields.file.details.image?.width,
          height: img.fields.file.details.image?.height,
        })) || [],
      };
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }

  export interface CartItem {
    id: string;
    product: string;
    quantity: number;
  }
  export interface Order {
    id: string;
    user: string;
    status: 'pending' | 'processing' | 'completed' | 'cancelled' | 'abandoned';
    cartItem: CartItem[];
    createdAt: string;
    updatedAt: string;
    Address:string
  }
  
  export async function getOrdersByUser(userEmail: string): Promise<Order[] | null> {
    try {
      const response = await client.getEntries({
        content_type: 'orders',
        'fields.user': userEmail,
        order: ['-sys.createdAt'], 
      });
  
      if (response.items.length === 0) {
        return [];
      }
  
      return response.items.map((item) => {
        const fields = item.fields as any;
  
        return {
          id: item.sys.id,
          user: fields.user,
          cartItem: fields.cartItem,
          Address: fields.Address,
          status:fields.status,
          createdAt: item.sys.createdAt,
          updatedAt: item.sys.updatedAt,
        };
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
      return null;
    }
  }
  


  