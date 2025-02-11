'use client';

import { cn } from '@/lib/utils';

interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader = ({ className }: SkeletonLoaderProps) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-muted',
        className
      )}
    />
  );
};

export default SkeletonLoader;