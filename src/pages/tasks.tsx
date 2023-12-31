import { Layout } from "@/components/Layout";
import { useLogout } from "@/hooks/useLogout";
import { useRouter } from "next/router";
import { auth } from "../../firebaseConfig";
import {
  ArrowLeftStartOnRectangleIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { NewsList } from "@/components/NewsList";
import { NewsEdit } from "@/components/NewsEdit";
import { TaskList } from "@/components/TaskList";
import { TaskEdit } from "@/components/TaskEdit";

export default function Tasks() {
  const router = useRouter();
  const { logout } = useLogout();
  const user = auth.currentUser;

  return (
    <Layout title="Tasks">
      <p className="my-3">{user?.email}</p>

      <ArrowLeftStartOnRectangleIcon
        className="h-5 w-5 my-3 text-blue-500 cursor-pointer"
        onClick={() => {
          logout();
          router.push("/");
        }}
      />

      <p className="mt-10 mb-5 text-blue-500 text-xl font-bold">News Edit</p>
      <div className="grid grid-cols-2 gap-40">
        <NewsList />
        <NewsEdit />
      </div>

      <p className="mt-20 mb-5 text-blue-500 text-xl font-bold">Tasks Edit</p>
      <div className="grid grid-cols-2 gap-40">
        <TaskList />
        <TaskEdit />
      </div>

      <Link href="/">
        <div className="mt-20 flex items-center cursor-pointer">
          <ChevronDoubleLeftIcon className="h-5 w-5 mx-1 text-blue-500" />
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
}
