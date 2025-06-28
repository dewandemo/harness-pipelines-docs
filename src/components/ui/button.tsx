import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../..//libs/utils';
import styles from './style.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        style={{ color: 'white' }}
        className={cn(styles.button, styles[variant], styles[`size${capitalize(size)}`], className)}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };

// Helper function
function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
