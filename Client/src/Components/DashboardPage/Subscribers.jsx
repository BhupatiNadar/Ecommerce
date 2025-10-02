import React ,{useEffect, useState}from 'react'

const Subscribers = () => {

  const [Subscribe,setSubscribe]=useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/subscribe");
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setSubscribe(data);
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);

    if (loading) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <p className="text-2xl font-semibold">Loading products...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <p className="text-2xl font-semibold text-red-500">Error: {error}</p>
        </div>
      );
    }


  return (
    <div className="w-full max-w-md p-4 space-y-3 bg-white rounded-xl shadow-lg">
      {Subscribe.map((sub, index) => (
        <div
          key={index}
          className="p-3 text-gray-700 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
        >
          {sub.email}
        </div>
      ))}
    </div>
  );
}

export default Subscribers