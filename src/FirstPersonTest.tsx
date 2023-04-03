import "./App.css";
import DeckGL from "@deck.gl/react/typed";
import {
  FirstPersonView,
  MapView,
  View,
  COORDINATE_SYSTEM,
} from "@deck.gl/core/typed";
import {ScatterplotLayer} from "@deck.gl/layers/typed";
import {Map} from "react-map-gl";
import {useState} from "react";

const initialViewState = {
  width: 236,
  height: 110,
  latitude: 37.87873461641798,
  longitude: -122.27376041439823,
  zoom: 8.29184745707587,
  bearing: -52.62711864406781,
  pitch: 51.890389140271495,
  altitude: 1.5,
  maxZoom: 20,
  minZoom: 0,
  maxPitch: 89,
  minPitch: -89,
  normalize: true,
  position: [0, 0, 1000],
};
function FirstPersonApp2() {
  const layers = [
    new ScatterplotLayer({
      id: "ScatterplotLayer",
      data: "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json",
      getFillColor: [255, 140, 0],
      getLineColor: [0, 0, 0],
      getPosition: (d) => d.coordinates,
      getRadius: (d) => Math.sqrt(d.exits),
      lineWidthMinPixels: 1,
      radiusMaxPixels: 100,
      radiusMinPixels: 1,
      radiusScale: 6,
      stroked: true,

      // coordinateOrigin: [0, 0, 0],
      // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
      // highlightColor: [0, 0, 128, 128],
      // modelMatrix: null,

      opacity: 0.8,
      pickable: false,
    }),
  ];
  const [viewState, setViewState] =
    useState<Record<string, any>>(initialViewState);
  console.log(viewState);

  return (
    <DeckGL
      layers={layers}
      onViewStateChange={({viewState}) => {
        console.log(viewState);
        setViewState(viewState);
      }}
      viewState={viewState}
      views={[
        new FirstPersonView({
          focalDistance: 100,
          fovy: 80,
          // near: 0.1,
          // far: 1000,
          controller: true,
        }),
        // new MapView({controller: true}),
        new MapView({
          id: "minimap",
          x: "73%",
          y: "70%",
          height: "20%",
          width: "25%",
          // @ts-ignore
          // clear: {
          //   color: [255, 255, 255, 255],
          // },
          controller: true,
        }),
      ]}
      initialViewState={initialViewState}
      parameters={{
        depthTest: false,
        cull: true,
      }}
      // controller={true}
    >
      <Map mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" />
      {/* @ts-ignore */}
      <View id="minimap">
        <Map mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" />
      </View>
    </DeckGL>
  );
}

export default FirstPersonApp2;
