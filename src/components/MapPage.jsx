import React, { useEffect, useRef } from "react";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import { Draw, Modify, Snap } from "ol/interaction";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import "ol/ol.css";

const MapPage = ({ userData }) => {
  const mapRef = useRef(null);
  const vectorSource = useRef(new VectorSource());
  const vectorLayer = useRef(new VectorLayer({ source: vectorSource.current }));

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
        vectorLayer.current,
      ],
      view: new View({ center: [0, 0], zoom: 2 }),
    });

    const draw = new Draw({ source: vectorSource.current, type: "Polygon" });
    const modify = new Modify({ source: vectorSource.current });
    const snap = new Snap({ source: vectorSource.current });

    map.addInteraction(draw);
    map.addInteraction(modify);
    map.addInteraction(snap);

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div>
      <h1 className="text-center text-xl p-4 bg-gray-200">
        {userData?.firstName || "User"}'s Map
      </h1>
      <div ref={mapRef} className="h-[500px] w-full"></div>
    </div>
  );
};

export default MapPage;
