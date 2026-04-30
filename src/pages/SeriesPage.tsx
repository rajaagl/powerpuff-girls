import { useEffect, useState } from 'react';


interface Serie {
  id: number;
  name: string;
  image: { medium: string } | null;
  summary: string;
}

function SeriesPage() {
  const [serie, setSerie] = useState<Serie | null>(null);
  const [loading, setLoading] = useState(true);

//useEffect pour extraire les données de la série et des épisodes depuis l'API TVMaze

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows/1955')
      .then(res => res.json())
      .then(data => {
        setSerie(data);
        setLoading(false);
      })
      //affichage de l'erreur dans la console (serie)
      .catch(err => {
        console.error(err);
        setLoading(false);
      });

  }, []);
  // en cas de chargement, on affiche un message de chargement
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Chargement de la série...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 mt-10 py-10">
      {serie && (
        <>
          <div className="flex flex-col mt-10  md:flex-row gap-8 mb-12">
            <img 
              src={serie.image?.medium} 
              alt={serie.name}
              className="w-64 rounded-lg shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold  text-pink-500 mb-4">{serie.name}</h1>
              <div 
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: serie.summary }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SeriesPage;