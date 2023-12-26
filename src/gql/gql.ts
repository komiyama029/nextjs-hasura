/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query getNews($orderBy: [news_order_by!]! = [{created_at: desc}]) {\n  news(order_by: $orderBy) {\n    id\n    content\n    created_at\n  }\n}\n\nmutation CreateNews($content: String!) {\n  insert_news_one(object: {content: $content}) {\n    id\n    content\n    created_at\n  }\n}\n\nmutation UpdateNews($id: Int!, $content: String!) {\n  update_news_by_pk(pk_columns: {id: $id}, _set: {content: $content}) {\n    id\n    content\n    created_at\n  }\n}\n\nmutation DeleteNews($id: Int!) {\n  delete_news_by_pk(id: $id) {\n    id\n    content\n  }\n}\n\nquery GetTasks($orderBy: [tasks_order_by!]! = [{created_at: desc}]) {\n  tasks(order_by: $orderBy) {\n    id\n    title\n    created_at\n    user_id\n  }\n}\n\nmutation CreateTask($title: String!) {\n  insert_tasks_one(object: {title: $title}) {\n    id\n    title\n    created_at\n    user_id\n  }\n}\n\nmutation UpdateTask($id: Int!, $title: String!) {\n  update_tasks_by_pk(pk_columns: {id: $id}, _set: {title: $title}) {\n    id\n    title\n    created_at\n    user_id\n  }\n}\n\nmutation DeleteTask($id: Int!) {\n  delete_tasks_by_pk(id: $id) {\n    id\n    title\n  }\n}": types.GetNewsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getNews($orderBy: [news_order_by!]! = [{created_at: desc}]) {\n  news(order_by: $orderBy) {\n    id\n    content\n    created_at\n  }\n}\n\nmutation CreateNews($content: String!) {\n  insert_news_one(object: {content: $content}) {\n    id\n    content\n    created_at\n  }\n}\n\nmutation UpdateNews($id: Int!, $content: String!) {\n  update_news_by_pk(pk_columns: {id: $id}, _set: {content: $content}) {\n    id\n    content\n    created_at\n  }\n}\n\nmutation DeleteNews($id: Int!) {\n  delete_news_by_pk(id: $id) {\n    id\n    content\n  }\n}\n\nquery GetTasks($orderBy: [tasks_order_by!]! = [{created_at: desc}]) {\n  tasks(order_by: $orderBy) {\n    id\n    title\n    created_at\n    user_id\n  }\n}\n\nmutation CreateTask($title: String!) {\n  insert_tasks_one(object: {title: $title}) {\n    id\n    title\n    created_at\n    user_id\n  }\n}\n\nmutation UpdateTask($id: Int!, $title: String!) {\n  update_tasks_by_pk(pk_columns: {id: $id}, _set: {title: $title}) {\n    id\n    title\n    created_at\n    user_id\n  }\n}\n\nmutation DeleteTask($id: Int!) {\n  delete_tasks_by_pk(id: $id) {\n    id\n    title\n  }\n}"): (typeof documents)["query getNews($orderBy: [news_order_by!]! = [{created_at: desc}]) {\n  news(order_by: $orderBy) {\n    id\n    content\n    created_at\n  }\n}\n\nmutation CreateNews($content: String!) {\n  insert_news_one(object: {content: $content}) {\n    id\n    content\n    created_at\n  }\n}\n\nmutation UpdateNews($id: Int!, $content: String!) {\n  update_news_by_pk(pk_columns: {id: $id}, _set: {content: $content}) {\n    id\n    content\n    created_at\n  }\n}\n\nmutation DeleteNews($id: Int!) {\n  delete_news_by_pk(id: $id) {\n    id\n    content\n  }\n}\n\nquery GetTasks($orderBy: [tasks_order_by!]! = [{created_at: desc}]) {\n  tasks(order_by: $orderBy) {\n    id\n    title\n    created_at\n    user_id\n  }\n}\n\nmutation CreateTask($title: String!) {\n  insert_tasks_one(object: {title: $title}) {\n    id\n    title\n    created_at\n    user_id\n  }\n}\n\nmutation UpdateTask($id: Int!, $title: String!) {\n  update_tasks_by_pk(pk_columns: {id: $id}, _set: {title: $title}) {\n    id\n    title\n    created_at\n    user_id\n  }\n}\n\nmutation DeleteTask($id: Int!) {\n  delete_tasks_by_pk(id: $id) {\n    id\n    title\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;