import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
}

function EpisodesListPage() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows/1955/episodes')
      .then(res => res.json())
      .then(data => {
        setEpisodes(data);
        setLoading(false);
      });
  }, []);

  if (loading)
     return( <div className="flex justify-center items-center h-64">
                 <p className="text-gray-500">Chargement des episodes...</p>
            </div>);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl text-center font-bold  text-pink-500 mb-6">Tous les épisodes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-bold ">
        {episodes.map(ep => (
          <div className=' border-b-blue-500 p-3  bg-blue-400 rounded-lg shadow-md text-center'>
          <Link key={ep.id} to={`/episode/${ep.id}`}>
            S{ep.season} - E{ep.number} - {ep.name}
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EpisodesListPage;