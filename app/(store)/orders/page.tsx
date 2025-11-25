import { getOrdersByUser } from '@/lib/Api/api'
import { currentUser } from '@clerk/nextjs/server'

type Props = {}

const page = async (props: Props) => {
  const user = await currentUser()
  
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-600">Please sign in to view your orders.</p>
      </div>
    )
  }

  const emailAddress = user.emailAddresses[0].emailAddress
  const orders = await getOrdersByUser(emailAddress)

  if (!orders || orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">My Orders</h1>
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg">No orders found</p>
          <p className="text-gray-500 mt-2">You haven't placed any orders yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-lg font-semibold">Order ID: {order.id}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                order.status === 'completed' ? 'bg-green-100 text-green-800' :
                order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                order.status === 'abandoned' ? 'bg-gray-100 text-gray-800' :
                'bg-red-100 text-red-800'
              }`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
            <p>{order.Address}</p>

            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">Items:</h3>
              <ul className="space-y-2">
                {order.cartItem && order.cartItem.map((item: any, index: number) => (
                  <li key={item.id || index} className="flex justify-between text-sm">
                    <span>
                      {item.product}
                      <span className="text-gray-500"> x{item.quantity}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t mt-4 pt-4 text-sm text-gray-600">
              <p>User: {order.user}</p>
              <p className="text-xs text-gray-500 mt-1">
                Last updated: {new Date(order.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page