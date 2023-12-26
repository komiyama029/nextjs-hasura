import Cookies from "universal-cookie";
import { unSubMeta } from "./useUserChanged";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const cookie = new Cookies();

export const useLogout = () => {
  const logout = async () => {
    if (unSubMeta) {
      unSubMeta();
    }

    await signOut(auth);
    cookie.remove("token");
  };

  return { logout };
};
