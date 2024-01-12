import { ItemChapters } from "@/types/interfaces";
import React from "react";

const ItemList: React.FC<{ data: ItemChapters }> = ({ data }) => {
  return (
    <div className="group flex justify-between items-center border p-4 rounded-md cursor-pointer hover:border-sky-500">
      <div className="flex items-center">
        <div className="bg-gray-200 group-hover:bg-sky-500 text-inherit group-hover:text-white rotate-45 h-10 w-10 flex justify-center flex-col items-center rounded-md me-4">
          <p className="-rotate-45 font-bold">{data.id}</p>
        </div>
        <div>
          <p className="font-bold">{data.name_simple}</p>
          <p className="font-bold text-xs text-gray-400 group-hover:text-sky-500">
            {data.translated_name.name}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-1">
        <p className="font-arabic">{data.name_arabic}</p>
        <p className="font-bold text-xs text-gray-400 group-hover:text-sky-500">
          {data.verses_count} Ayat
        </p>
      </div>
    </div>
  );
};

export default ItemList;
