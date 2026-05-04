import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {useGetEpisodeByIdQuery} from '../app/store.ts'


function EpisodePage() {
  const { data: episodeByIdData ,loading: episodeByIdLoading ,erreur: episodeByIdError} = useGetEpisodeByIdQuery(1);
  
  if (episodeByIdLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Chargement...</p>
      </div>
    );
  }

  if (!episodeByIdData) {
    return <p className="text-center text-red-500">Épisode non trouvé</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link to="/" className="text-pink-500 hover:underline mb-6 inline-block">
        ← Retour à la série
      </Link>
      
      <div className="bg-blue-400 rounded-lg shadow-lg overflow-hidden">
        {episodeByIdData.image && (
          <img 
            src={episodeByIdData.image.medium} 
            alt={episodeByIdData.name}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            S{episodeByIdData.season} E{episodeByIdData.number} - {episodeByIdData.name}
          </h1>
          <div 
            className="text-gray-700 mt-4"
            dangerouslySetInnerHTML={{ __html: episodeByIdData.summary }}
          />
        </div>
      </div>
    </div>
  );
}

export default EpisodePage;