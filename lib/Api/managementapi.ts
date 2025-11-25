import { createClient } from 'contentful-management';
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PERSONAL_TOKEN!,
  host:'api.contentful.com'
});


export async function createOrder(orderData: {
    user: string;
    cartItem: any;
    Address: string;
    status: string;
  }) {
    try {
      const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!);
      const env = await space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!);
  
      const entry = await env.createEntry('orders', {
        fields: {
          user: { 'en-US': orderData.user },
          cartItem: { 'en-US': orderData.cartItem },
          address: { 'en-US': orderData.Address },
          status: { 'en-US': orderData.status },
        },
      });

      const published = await entry.publish();
  
      return {
        success: true,
        id: published.sys.id,
        message: 'Order created successfully!',
      };
    } catch (error: any) {
      console.error('Error creating order:', error);
      return {
        success: false,
        message: error.message,
      };
    }
  }