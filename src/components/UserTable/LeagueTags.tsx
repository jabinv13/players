import React, { useState } from 'react';

interface LeagueTagsProps {
  leagues: string[];
  maxDisplay?: number;
}

export function LeagueTags({ leagues, maxDisplay = 3 }: LeagueTagsProps) {
  const [showAll, setShowAll] = useState(false);
  const displayLeagues = showAll ? leagues : leagues.slice(0, maxDisplay);
  const hasMore = leagues.length > maxDisplay;

  return (
    <div className="flex flex-wrap gap-1">
      {displayLeagues.map((league, index) => (
        <span
          key={index}
          className="px-2 py-1 text-xs rounded-full  text-gray-700 border-2 border-gray-300 "
        >
          {league}
        </span>
      ))}
      {!showAll && hasMore && (
        <button
          onClick={() => setShowAll(true)}
          className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"
        >
          More...
        </button>
      )}
      {showAll && hasMore && (
        <button
          onClick={() => setShowAll(false)}
          className="px-2 py-1 text-xs rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100"
        >
          Less...
        </button>
      )}
    </div>
  );
}