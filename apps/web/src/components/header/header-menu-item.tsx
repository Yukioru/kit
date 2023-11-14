'use client';

import Link, { LinkProps } from 'next/link';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface HeaderMenuItemProps extends LinkProps {
  title: string;
  className?: string;
}

function HeaderMenuItem(
  { className, title, children, ...props }: PropsWithChildren<HeaderMenuItemProps>,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            `block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors
            hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`,
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default forwardRef(HeaderMenuItem);
