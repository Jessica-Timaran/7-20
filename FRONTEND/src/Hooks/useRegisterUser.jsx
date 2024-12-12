import { useState } from "react";

const useRegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const registerUser = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al registrar el usuario.");
      }
      

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      console.error("Error en el registro:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error };
};

export default useRegisterUser;
