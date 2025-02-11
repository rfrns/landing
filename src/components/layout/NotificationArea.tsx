'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotificationArea = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-primary px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-primary-foreground">
          <strong className="font-semibold">Announcement</strong>
          <span className="ml-2">Check out our latest features and updates!</span>
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="hover:bg-primary-foreground/10"
        >
          Learn more <span aria-hidden="true">&rarr;</span>
        </Button>
      </div>
      <div className="flex flex-1 justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="text-primary-foreground hover:bg-primary-foreground/10"
          onClick={() => setShow(false)}
          aria-label="Close notification"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default NotificationArea;