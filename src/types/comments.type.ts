import { User } from "./posts.type";

export type CommentsState = {
  comments: Comment[] | null;
  commentDetails: Comment | null;
};

export interface Comment {
  _id: string;
  content: string;
  commentCreator: User;
  post: string;
  createdAt: string;
}
