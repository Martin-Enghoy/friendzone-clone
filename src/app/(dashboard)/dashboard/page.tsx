import Button from "@/components/ui/Button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { FunctionComponent } from "react";

const DashboardPage = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <Button size="default" variant="default">
      Hello
    </Button>
  );
};

export default DashboardPage;
