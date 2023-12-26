import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookie from "universal-cookie";
import { auth, db } from "../../firebaseConfig";
import { getIdToken, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";

export let unSubMeta: () => void;

export const useUserChanged = () => {
  const cookie = new Cookie();
  const router = useRouter();

  const HASURA_TOKEN_KEY = "https://hasura.io/jwt/claims";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken(true);
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY]; // hasuraのclaimsを取得

        if (hasuraClaims) {
          cookie.set("token", token, { path: "/" });
          router.push("/tasks");
        } else {
          // hasuraのclaimsがない場合、functionsの完了をモニタリング
          const docRef = doc(db, "user_meta", user.uid);
          unSubMeta = onSnapshot(docRef, async (snapshot) => {
            const tokenSnap = await user.getIdToken(true);
            const idTokenResultSnap = await user.getIdTokenResult();
            const hasuraClaimsSnap = idTokenResultSnap.claims[HASURA_TOKEN_KEY];
            if (hasuraClaimsSnap) {
              cookie.set("token", tokenSnap, { path: "/" });
              router.push("/tasks");
            }
          });
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return {};
};
