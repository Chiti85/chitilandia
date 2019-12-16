import React, { Component } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import Service from "../../service/map.service";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCenter: {},
      selectedLocation: null,
      cities: []
    };
    this.Service = new Service();
  }
  componentDidMount = () => {
    const cityPoints = this.props.cities;
    console.log(cityPoints);
    this.Service.getMPoint(cityPoints)
      .then(theCity => {
        console.log(theCity, "pizza");
        this.setState({ cities: theCity.data });
      })
      .catch(err => console.log(err));
  };

  selectedLocation = value => {
    this.setState({ selectedLocation: value });
  };

  render() {
    return (
      <GoogleMap
        defaultZoom={this.props.zoom}
        // defaultCenter={{ lat: 28.487523, lng: -16.312859 }}
        defaultCenter={this.props.center}
      >
        {this.state.cities.map(places => (
          <Marker
            key={places.city}
            position={{
              lat: places.cords.coordinates[0],
              lng: places.cords.coordinates[1]
            }}
            onClick={() => {
              this.selectedLocation(places);
            }}
            icon={{
              url: "../../../image/next button Org.png",
              scaledSize: new window.google.maps.Size(25, 25)
            }}
          ></Marker>
        ))}

        {this.state.selectedLocation && (
          <InfoWindow
            position={{
              lat: this.state.selectedLocation.cords.coordinates[0],
              lng: this.state.selectedLocation.cords.coordinates[1]
            }}
            onCloseClick={() => {
              this.selectedLocation(null);
            }}
          >
            <div>
              <h2>{this.state.selectedLocation.name}</h2>
              <h3>{this.state.selectedLocation.address}</h3>
              <h3>{this.state.selectedLocation.schedule}</h3>
              <h3>{this.state.selectedLocation.phone}</h3>
              <h3>{this.state.selectedLocation.description}</h3>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function TheMap(props) {
  console.log(process.env.REACT_APP_GOOGLEKEY);
  return (
    <div style={{ width: "50vw", height: "50vh" }}>
      <WrappedMap
        {...props}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLEKEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}

export default TheMap;
