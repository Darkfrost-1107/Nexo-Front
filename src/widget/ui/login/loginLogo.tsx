import { Avatar, AvatarImage } from "@/shared/components/ui/avatar";

export default function LoginLogo() {
  return (
    <Avatar className='m-2 size-16 aspect-square'>
        <AvatarImage src="/icons/nexo_logo.png"/>
    </Avatar>
  );
}
