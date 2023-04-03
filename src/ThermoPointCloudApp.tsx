import {useCallback, useState} from "react";
import "./App.css";
import DeckGL from "@deck.gl/react";
import {FirstPersonView, COORDINATE_SYSTEM} from "@deck.gl/core";
import {PointCloudLayer} from "@deck.gl/layers";
import {PLYLoader} from "@loaders.gl/ply";

const initialViewState = {
  longitude: 0,
  latitude: 0,
  position: [0, 0, 43.5],
  bearing: 0,
  pitch: 0,
  maxPitch: 89,
  minPitch: -89,
};
function ThermoPointCloudApp() {
  const layers = [
    new PointCloudLayer({
      // Data source: Dorit Borrmann, and Hassan Afzal from Jacobs University Bremen
      data: "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/thermoscan.ply",
      modelMatrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1],
      coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
      pointSize: 4,
      loaders: [PLYLoader],
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
      initialViewState={initialViewState}
      controller={true}
    />
  );
}

export default ThermoPointCloudApp;
