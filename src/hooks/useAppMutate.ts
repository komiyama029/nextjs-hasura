import {
  CreateNewsDocument,
  CreateNewsMutation,
  CreateTaskDocument,
  CreateTaskMutation,
  DeleteNewsDocument,
  DeleteTaskDocument,
  DeleteTaskMutation,
  Tasks,
  UpdateNewsDocument,
  UpdateTaskDocument,
} from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT;

export const useAppMutate = () => {
  const [createNewsMutation] = useMutation<CreateNewsMutation>(
    CreateNewsDocument,
    {
      update(cache, { data }) {
        if (data?.insert_news_one) {
          const cacheId = cache.identify(data.insert_news_one);
          if (cacheId) {
            cache.modify({
              fields: {
                news(existingNews, { toReference }) {
                  return [toReference(cacheId), ...existingNews];
                },
              },
            });
          }
        }
      },
    }
  );
  const [updateNewsMutation] = useMutation(UpdateNewsDocument);
  const [deleteNewsMutation] = useMutation(DeleteNewsDocument, {
    update(cache, { data }) {
      const deletedNewsId = data?.delete_news_by_pk?.id;
      if (deletedNewsId) {
        cache.modify({
          fields: {
            news(existingNews, { readField }) {
              return existingNews.filter(
                (news: Tasks) => news && deletedNewsId !== readField("id", news)
              );
            },
          },
        });
      }
    },
  });

  const [createTaskMutation] = useMutation<CreateTaskMutation>(
    CreateTaskDocument,
    {
      update(cache, { data }) {
        if (data?.insert_tasks_one) {
          const cacheId = cache.identify(data.insert_tasks_one);
          if (cacheId) {
            cache.modify({
              fields: {
                tasks(existingTasks, { toReference }) {
                  return [toReference(cacheId), ...existingTasks];
                },
              },
            });
          }
        }
      },
    }
  );
  const [updateTaskMutation] = useMutation(UpdateTaskDocument);
  const [deleteTaskMutation] = useMutation<DeleteTaskMutation>(
    DeleteTaskDocument,
    {
      update(cache, { data }) {
        const deletedTaskId = data?.delete_tasks_by_pk?.id;
        if (deletedTaskId) {
          cache.modify({
            fields: {
              tasks(existingTasks, { readField }) {
                return existingTasks.filter(
                  (task: Tasks) =>
                    task && deletedTaskId !== readField("id", task)
                );
              },
            },
          });
        }
      },
    }
  );

  const createNews = async (content: string) => {
    try {
      await createNewsMutation({
        context: {
          headers: {
            Authorization: `Bearer ${cookie.get("token")}`,
          },
        },
        variables: {
          content,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateNews = async (id: number, content: string) => {
    try {
      await updateNewsMutation({
        context: {
          headers: {
            Authorization: `Bearer ${cookie.get("token")}`,
          },
        },
        variables: {
          id,
          content,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNews = async (id: number) => {
    try {
      await deleteNewsMutation({
        context: {
          headers: {
            Authorization: `Bearer ${cookie.get("token")}`,
          },
        },
        variables: {
          id,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (title: string) => {
    try {
      await createTaskMutation({
        context: {
          headers: {
            Authorization: `Bearer ${cookie.get("token")}`,
          },
        },
        variables: {
          title,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id: number, title: string) => {
    try {
      await updateTaskMutation({
        context: {
          headers: {
            Authorization: `Bearer ${cookie.get("token")}`,
          },
        },
        variables: {
          id,
          title,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await deleteTaskMutation({
        context: {
          headers: {
            Authorization: `Bearer ${cookie.get("token")}`,
          },
        },
        variables: {
          id,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    createNews,
    updateNews,
    deleteNews,
    createTask,
    updateTask,
    deleteTask,
  };
};
