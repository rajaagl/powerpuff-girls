import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  image: { medium: string } | null;
  summary: string;
}

function EpisodePage() {
  const { id } = useParams();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/episodes/${id}`)
      .then(res => res.json())
      .then(data => {
        setEpisode(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Chargement...</p>
      </div>
    );
  }

  if (!episode) {
    return <p className="text-center text-red-500">Épisode non trouvé</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link to="/" className="text-pink-500 hover:underline mb-6 inline-block">
        ← Retour à la série
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {episode.image && (
          <img 
            src={episode.image.medium} 
            alt={episode.name}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            S{episode.season} E{episode.number} - {episode.name}
          </h1>
          <div 
            className="text-gray-700 mt-4"
            dangerouslySetInnerHTML={{ __html: episode.summary }}
          />
        </div>
      </div>
    </div>
  );
}

export default EpisodePage;