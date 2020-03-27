import React from 'react';
export const nl2br = (s: string, idx: number) => {
  const regex = /(\n)/g;
  s.replace(/\r?\n/, '<br>');

  return s.split(regex).map(function(line) {
    if (line.match(regex)) {
      return React.createElement('br', { key: idx });
    }

    return line;
  });
};
