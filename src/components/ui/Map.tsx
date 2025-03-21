
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  height?: string;
  className?: string;
}

const Map = ({
  latitude = -1.2982317,
  longitude = 36.7831046,
  zoom = 15,
  height = '300px',
  className = '',
}: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoibGlqbGVkYSIsImEiOiJjbTIxc2d1dHUwc2lqMmtxdDBodnltcDltIn0.kbYOYerFx_BAAl9szrPnZQ';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
    });

    // Add navigation control
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker
    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [latitude, longitude, zoom]);

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <div ref={mapContainer} className="w-full h-full rounded-lg" />
    </div>
  );
};

export default Map;
