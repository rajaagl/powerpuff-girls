import { Link } from 'react-router-dom';
import {useGetSeriesQuery, useGetEpisodesQuery} from '../app/store.ts'



function SeriesPage() {
  const { data: serieData, isLoading: serieLoading } = useGetSeriesQuery();
  const { data: episodesData, isLoading: episodesLoading } = useGetEpisodesQuery();

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
    { serieData && (
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
    <div className="relative overflow-hidden">
       <div className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2
                  scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
     {episodesData?.map((episode) => (
      <div
        key={episode.id}
        className="flex-none w-36 sm:w-40 snap-start bg-blue-400 rounded-lg shadow overflow-hidden"
      >
        {episode.image && (
            <img
              src={episode.image.medium}
              alt={episode.name}
              className="w-full h-24 object-cover"
            />
        )}
        <div className="p-2">
          <div className="text-xs font-bold text-white">
            <Link to={`/episode/${episode.id}`}>
              S{episode.season} - E{episode.number}
            </Link>
          </div>
          <div className="text-white text-xs truncate">{episode.name}</div>
        </div>
      </div>
    ))}
     </div>
  </div> 
  </div>
  );
}

export default SeriesPage;