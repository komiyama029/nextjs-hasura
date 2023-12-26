import { useCallback, useState } from "react";
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface FormData {
  email: string;
  password: string;
}

export const useFirebaseAuth = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );

  const resetInput = useCallback(() => {
    setFormData({ email: "", password: "" });
  }, []);

  const toggleMode = useCallback(() => {
    setIsLogin(!isLogin);
  }, [isLogin]);

  const authUser = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isLogin) {
        try {
          // ログイン
          await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
        } catch (error) {
          console.error(error);
        }
        resetInput();
      } else {
        try {
          // 新規登録処理
          await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
        } catch (error) {
          console.error(error);
        }
        resetInput();
      }
    },
    [formData, isLogin, resetInput]
  );

  return {
    formData,
    isLogin,
    handleChange,
    toggleMode,
    authUser,
  };
};
