interface LoginData {
    email: string;
    password: string;
  }
  
  interface dataResponse {
    refreshToken: string;
  }
  
  const API_URL = "https://jwt-auth-eight-neon.vercel.app";
  
  export const AuthService = () => {
    const login = async (formData: LoginData): Promise<boolean> => {
      try {
        const response = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const data: dataResponse = await response.json();
  
        if (response.ok && data.refreshToken) {
          localStorage.setItem("token", JSON.stringify(data.refreshToken));
          return true;
        } else {
          console.error("Login failed:", data);
          return false;
        }
      } catch (error) {
        console.error("Error:", error);
        return false;
      }
    };
  
    const logout = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found, unable to logout.");
          return;
        }
        console.log(token)
      
      try {
        const response = await fetch(`${API_URL}/logout`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });

        if (response.ok) {
          localStorage.removeItem("token");
          return true;
        } else {
          console.error("Logout failed", response);
          return false;
        }
      } catch (error) {
        console.error("Error:", error);
        return false;
      }
    };
  
    return { login, logout };
  };
  