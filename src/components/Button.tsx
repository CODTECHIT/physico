import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/10',
      secondary: 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/10',
      outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
      ghost: 'text-primary hover:bg-primary/5',
    };

    const sizes = {
      sm: 'px-5 py-2 text-xs font-bold tracking-widest',
      md: 'px-7 py-3 text-sm font-bold tracking-widest',
      lg: 'px-9 py-4 text-base font-bold tracking-widest',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
