import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useGetSeriesQuery, useGetEpisodesQuery} from '../app/store.ts'




function SeriesPage() {
  const { data: serieData, loading: serieLoading } = useGetSeriesQuery();
  const { data: episodesData, loading: episodesLoading } = useGetEpisodesQuery(); 

  // en cas de chargement, on affiche un message de chargement
  if (serieLoading || episodesLoading ) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Chargement...</p>
      </div>
    );
  }

  return (
  <div className="max-w-7xl mx-auto px-6 mt-10 py-10">
    {serieData && (
      <div className="flex flex-col mt-10 md:flex-row gap-8 mb-12">
        <img 
          src={serieData.image?.medium} 
          alt={serieData.name}
          className="w-64 rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-pink-500 mb-4">{serieData.name}</h1>
          <div 
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: serieData.summary }}
          />
        </div>
      </div>
    )}
    
    <h1 className="text-3xl text-center font-bold text-pink-500 mb-6">
      Tous les épisodes
    </h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-bold">
      {episodesData ? episodesData.map(ep => (
        <div key={ep.id} className='border-b-blue-500 p-3 bg-blue-400 rounded-lg shadow-md text-center'>
          <Link to={`/episode/${ep.id}`}>
            S{ep.season} - E{ep.number} - {ep.name}
          </Link>
        </div>
      )) : (
        <p className="text-center text-gray-500">Aucun épisode disponible</p>
      )}
    </div>
  </div>
);
}

export default SeriesPage;