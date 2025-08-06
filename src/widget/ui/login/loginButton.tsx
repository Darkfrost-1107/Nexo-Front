import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router";

export function LinkAsButton() {
  return (
    <Button asChild variant="outline" className="w-full">
      <Link to="/login">Login</Link>
    </Button>
  )
}

