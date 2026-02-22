import { useState } from "react";
import authApiClient from "../../services/authApiClient";
import useAuth from "../../hooks/useAuth";

const BookingSection = ({ productId }) => { 
  const [loading, setLoading] = useState(false);
  const { authTokens } = useAuth();

  const handleBooking = async () => {
    if (!authTokens) {
      alert("Login first!");
      return;
    }

    try {
      setLoading(true);

      
      const bookingRes = await authApiClient.post("/bookings/", {
        product: productId,
        
      });

      const bookingId = bookingRes.data.id;

      const paymentRes = await authApiClient.post("/payments/initiate/", {
        booking_id: bookingId,
      });

      
      if (paymentRes.data.payment_url) {
        window.location.href = paymentRes.data.payment_url;
      } else {
        alert("Payment URL not received");
      }

    } catch (error) {
      console.error("Booking/Payment Error:", error.response?.data || error);
      
      const errorMessage = error.response?.data?.detail || error.response?.data?.error || "Booking Failed!";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBooking}
      disabled={loading}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 mt-5 rounded-lg w-full transition-colors"
    >
      {loading ? "Processing..." : "Book Now"}
    </button>
  );
};

export default BookingSection;