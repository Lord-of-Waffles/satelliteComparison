import React from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ClickableMap() {
    // Component to handle map clicks and display coordinates
    function LocationMarker() {
        useMapEvents({
            click(event) {
                const { lat, lng } = event.latlng;
                alert(`Coordinates: ${lat}, ${lng}`);
            },
        });
        return null;
    }

    return (
        <MapContainer center={[0, 0]} zoom={2} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            <LocationMarker />
        </MapContainer>
    );
}

export default ClickableMap;