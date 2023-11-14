import { RulerSquareIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Button } from '../ui/button';
import HeaderMenu from './header-menu';

function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95
      backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <RulerSquareIcon />
          <span className="font-bold">Kit</span>
        </Link>
        <div className="mr-4 hidden md:flex">
          <HeaderMenu />
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <nav className="space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
