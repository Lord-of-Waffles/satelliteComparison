import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ClickableMap({ onMapClick }) {
    const [coordinates, setCoordinates] = useState({ lat: "", lon: "" });

    // Handle map clicks and set coordinates
    function LocationMarker() {
        useMapEvents({
            click(event) {
                const { lat, lng } = event.latlng; // Use correct property names
                setCoordinates({ lat, lon: lng });
                if (onMapClick) {
                    onMapClick(lng, lat); // Pass to parent component if onMapClick exists
                }
            },
        });
        return null;
    }

    return (
        <Container maxWidth="md" sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                Or click on the map to get coordinates!
            </Typography>

            {/* Map Section */}
            <MapContainer center={[0, 0]} zoom={0.5} style={{ height: "500px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <LocationMarker />
            </MapContainer>
        </Container>
    );
}

export default ClickableMap;
