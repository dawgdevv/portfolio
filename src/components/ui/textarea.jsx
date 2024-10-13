import React from 'react';

export const Textarea = ({ ...props }) => {
  return (
    <textarea {...props} className="px-4 py-2 border rounded w-full" />
  );
};