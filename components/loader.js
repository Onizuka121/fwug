import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <img
        src="/images/image30.jpg" // Sostituisci con il percorso della tua immagine
        alt="Loading..."
        className="h-20 rounded-2xl border-2 border-black animate-pulse"
      />
    </div>
  );
};

export default Loader;