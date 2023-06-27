import React from 'react'


export default function Progress({progress}) {
  return (
    <progress value={progress} max="100" />
  )
};
