"use client";

import "../globals.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
import { useTranslation } from "react-i18next";

type LatLng = {
  lat: number;
  lng: number;
};
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { LatLngExpression } from "leaflet";

// Fix default icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

function LocationMarker({ position, setPosition }: { position: LatLng | null; setPosition: (pos: LatLng) => void }) {
  useMapEvents({
    click(e: any) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function Mapa() {
  const { t } = useTranslation();
  const [position, setPosition] = useState<LatLng | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          console.error("Error getting location:", err);
        },
        { enableHighAccuracy: true }
      );
    }
  }, []);

  if (!position) {
    return (
      <section
        id="localizacao"
        className="flex items-center justify-center w-full h-screen bg-white"
      >
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </section>
    );
  }

  function SetView({ coords }: { coords: LatLng }) {
    const map = useMap();
    map.setView([coords.lat, coords.lng], 15);
    return null;
  }

  return (
    <section
      id="localizacao"
      className="bg-gradient-to-r from-white to-blue-400 w-full h-screen dark:from-black dark:to-black/90"
    >
      <MapContainer
        className="w-full h-full"
      >
        <SetView coords={position} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={position} setPosition={setPosition} />
      </MapContainer>
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 p-2 rounded shadow">
        <p>
          {t('Location.you_are_at', { lat: position.lat.toFixed(2), lng: position.lng.toFixed(2) })}
        </p>
      </div>
    </section>
  );
}
