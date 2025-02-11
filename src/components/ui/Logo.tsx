'use client';

import { Code2 } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Code2 className="h-6 w-6" />
      <span className="font-bold">Modern App</span>
    </div>
  );
};

export default Logo;