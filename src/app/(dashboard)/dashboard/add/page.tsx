import AddFriendButton from "@/components/AddFriendButton";
import { FunctionComponent } from "react";

const AddDashboard: FunctionComponent = () => {
  return (
    <main className="pt-8">
      <h1 className="font-bold text-5xl mb-8">Add a friend</h1>
      <AddFriendButton />
    </main>
  );
};

export default AddDashboard;
