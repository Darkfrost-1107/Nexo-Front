import { Avatar, AvatarImage } from "@/shared/components/ui/avatar";

export default function DashboardWidgetHeader() {
  return (
    <Avatar className='float-left m-2 size-12 aspect-square'>
        <AvatarImage src="/icons/nexo_logo.png"/>
    </Avatar>
  )
}
