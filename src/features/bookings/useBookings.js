import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { getCabins } from "../../services/apiCabins";

export function useBookings() {
  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  const { data } = getBookings();
  console.log(data);
  console.log(bookings);

  return { isLoading, error, bookings };
}
