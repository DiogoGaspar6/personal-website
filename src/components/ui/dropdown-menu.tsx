import * as React from 'react';

export const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen(!open);
  const close = () => setOpen(false);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-menu-container')) {
        close();
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative inline-block text-left dropdown-menu-container">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        if (child.type === DropdownMenuTrigger) {
          return React.cloneElement(child as React.ReactElement<{ open?: boolean; toggleOpen?: () => void }>, { open, toggleOpen });
        }
        if (child.type === DropdownMenuContent) {
          return open ? React.cloneElement(child as React.ReactElement<{ close?: () => void }>, { close }) : null;
        }
        return child;
      })}
    </div>
  );
};

export const DropdownMenuTrigger = ({ asChild, children, open, toggleOpen }: { asChild?: boolean; children: React.ReactNode; open?: boolean; toggleOpen?: () => void }) => {
  const handleClick = () => {
    if (toggleOpen) toggleOpen();
  };

  if (asChild) {
    return React.cloneElement(children as React.ReactElement<{ onClick?: () => void }>, { onClick: handleClick });
  }

  return (
    <button onClick={handleClick} aria-expanded={open} aria-haspopup="menu">
      {children}
    </button>
  );
};

export const DropdownMenuContent = ({ align = 'start', children, close }: { align?: 'start' | 'end'; children: React.ReactNode | ((close: () => void) => React.ReactNode); close?: () => void }) => {
  const alignment = align === 'end' ? 'right-0' : 'left-0';
  return (
    <div className={`absolute mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${alignment}`}>
      <div className="py-1">{typeof children === 'function' ? children(close || (() => {})) : children}</div>
    </div>
  );
};

export const DropdownMenuItem = ({ children, onClick, close }: { children: React.ReactNode; onClick?: () => void; close?: () => void }) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (close) close();
  };

  return (
    <button
      onClick={handleClick}
      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      type="button"
    >
      {children}
    </button>
  );
};