"use client";
import { useEffect, useState } from "react";

const CommentSection = ({ id }: { id: string }) => {
  const [comments, setComments] = useState<string[]>([]);

  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${id}`);
    if (storedComments) {
      try {
        setComments(JSON.parse(storedComments));
      } catch (error) {
        console.error("Error parsing stored comments:", error);
        setComments([]);
      }
    }
  }, [id]);

  // Handle adding new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment("");
      localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
    }
  };

  // Handle deleting a comment
  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index); // Remove the comment at the specified index
    setComments(updatedComments); // Update state
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments)); // Update localStorage
  };

  return (
    <div className="">

      {/* Comments List */}
      <div className="">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-[1px] border-gray-300"
            >
              <p className="text-bold text-lg py-3">{comment}</p>
              <button
                onClick={() => handleDeleteComment(index)}
                className=" bg-black px-3 py-1 rounded-sm text-white hover:underline"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center">No comments yet😑</p>
        )}
      </div>

      {/* Input for new comment */}
      <div className="flex flex-col mt-5 gap-3">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="outline-none px-4 pt-3"
          required
        />
        <button className="bg-[#111860] transition 1s duration-200 hover:bg-[#0d134a] text-white text-sm py-5 tracking-widest" onClick={handleAddComment}>ADD COMMENT</button>
      </div>
    </div>
  );
};

export default CommentSection;