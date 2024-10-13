import React from 'react';

export const Input = ({ ...props }) => {
  return (
    <input {...props} className="px-4 py-2 border rounded w-full" />
  );
};