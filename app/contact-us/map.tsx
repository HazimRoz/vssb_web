import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngExpression } from 'leaflet';
import L from 'leaflet';
import { useEffect, useRef } from 'react';
import iconImage from '@/assets/map.png';

// Import components dynamically to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

const DefaultIcon = new Icon({
  iconUrl: iconImage.src,
  iconSize: [38, 41]
});

const Map: React.FC = () => {
  const position: LatLngExpression = [3.1946892, 101.7315487]; // Wisma Rampai location
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    // Initialize the map only once
    if (!mapRef.current) {
      mapRef.current = L.map('map-container', {
        center: position,
        zoom: 17,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      // Create and add marker
      markerRef.current = L.marker(position, { icon: DefaultIcon })
        .addTo(mapRef.current)
        .bindPopup(
          `<div class="p-5 font-bold text-l text-center">
            VIBRANT SETS SDN BHD,<br />
            2-1-43, Wisma Rampai,<br />
            Rampai Town Centre, WPKL<br /><br />
            <a href="https://maps.app.goo.gl/yP2UJuwypRMe6Kss8" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
              View on Google Maps
            </a><br />
            or <br />
            <a href="https://waze.com/ul/hw2864vw8b" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
              Directions with Waze
            </a>
          </div>`
        )
        .openPopup();
    }
  }, [position]);

  return (
    <div id="map-container" style={{ height: '500px', width: '100%' }} />
  );
};

export default Map;
