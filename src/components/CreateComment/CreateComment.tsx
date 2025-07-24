import { useAppSelector } from "@/hooks/Store.hooks";

export default function CreateComment() {


    
  async function createCommentCard() {
    const token = useAppSelector((store) => store.userReducer);
    const options = {
      url: "https://linked-posts.routemisr.com/comments",
      method: "POST",
      headers: {
        token,
      },
    };
  }

  return <></>;
}
