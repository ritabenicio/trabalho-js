let map;

    async function initMap() {
      // The location of Uluru
      const position = { lat: -18.945025592564566, lng: -48.315049535581785 };
      // Request needed libraries.
      //@ts-ignore
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    
      // The map, centered at Uluru
      map = new Map(document.getElementById("map"), {
        zoom: 20,
        center: position,
        mapId: "DEMO_MAP_ID",
      });
    
      // The marker, positioned at Uluru
      const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Uluru",
      });
    }
    initMap();