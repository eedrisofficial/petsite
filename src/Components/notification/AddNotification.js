import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddNotify = () =>
  toast.success("Pet added successfully", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    theme: "light",
  });
