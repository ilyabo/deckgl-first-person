import {useCallback, useState} from "react";
import "./App.css";
import DeckGL from "@deck.gl/react/typed";
import {FirstPersonView, MapView} from "@deck.gl/core/typed";
import {ScatterplotLayer} from "@deck.gl/layers/typed";
import {Map} from "react-map-gl";

const initialViewState = {
  longitude: 0,
  latitude: 10,
  zoom: 1,
  pitch: 0,
  bearing: 0,
  minZoom: 0,
  maxZoom: 20,
  minPitch: 0,
  maxPitch: 60,
  position: [0, 0, 10000],
};
function FirstPersonApp() {
  const layers = [
    new ScatterplotLayer({
      data: "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/airports.json",
      getPosition: (d) => d.coordinates,
      getRadius: 100,
      getColor: [155, 40, 0],
      radiusMinPixels: 20,
    }),
  ];
  return (
    <DeckGL
      layers={layers}
      views={
        new FirstPersonView({
          focalDistance: 100,
          fovy: 80,
          // near: 0.1,
          // far: 1000,
          controller: true,
        })
      }
      // views={new MapView({id: "mapview", repeat: true})}
      initialViewState={initialViewState}
      controller={true}
    >
      <Map mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" />
      {/* <MapView id="map" width="50%" controller={true}>
        <Map mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" />
      </MapView> */}
      {/* <FirstPersonView width="50%" x="50%" fovy={50} controller={true}>
        <Map mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" />
      </FirstPersonView> */}
    </DeckGL>
  );
}

export default FirstPersonApp;
