import { Avatar, AvatarImage } from '@/shared/components/ui/avatar';
import { Typography } from '@/shared/components/ui/typography';
import type React from 'react';

interface PresentationWidgetProps {
    src? : string;
    alt? : string;
    title? : string | React.ReactNode;
}

export default function PresentationWidget({src, alt, title} : PresentationWidgetProps) {
  return (
    <div className="@container flex flex-col items-center justify-evenly h-full gap-4 w-full">
        { src ? 
          <Avatar className="@lg:size-96 @md:size-64 @sm:size-48 size-32">
              <AvatarImage src={src} alt={alt} />
          </Avatar>
          : "" 
        }
        <Typography level="h1" className="text-center">
            {title}
        </Typography>
    </div>
  )
}
