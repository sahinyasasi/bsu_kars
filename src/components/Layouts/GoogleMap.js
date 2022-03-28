import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "45vh",
};

const GoogleMap = (props) => {
  const [mapState, setMapState] = React.useState({
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  });
  const defaultProps = {
    center: { lat: 17.45157364560896, lng: 78.56768994139004 },
    zoom: 15,
  };

  const onMarkerClick = (props, marker, e) => {
    setMapState({
      ...mapState,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };
  const onInfoWindowClose = () => {
    setMapState({
      ...mapState,
      showingInfoWindow: false,
      activeMarker: null,
    });
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      containerStyle={containerStyle}
      //   style={containerStyle}
      initialCenter={defaultProps.center}
    >
      <Marker
        onClick={(props, marker, e) => onMarkerClick(props, marker, e)}
        name={"Sri Laxmi Cars - NFC Main Rd, APHB Colony, Moula Ali."}
      />
      <InfoWindow
        marker={mapState.activeMarker}
        visible={mapState.showingInfoWindow}
        onClose={() => onInfoWindowClose()}
      >
        <div>
          <h4>{mapState.selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
})(GoogleMap);
