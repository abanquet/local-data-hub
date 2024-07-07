
let protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles",protocol.tile);


var popup;
const geoLevels = {
    // "Australia": [
    //     [
    //         "aus_sau3_2021",
    //         "Statistical Area 2 (SA2)"
    //     ],
    //     [
    //         "aus_sau4_2023",
    //         "Local Government Areas"
    //     ]
    // ],
    // "Austria": [
    //     [
    //         "aut_sau3_2022",
    //         "Municipalities"
    //     ]
    // ],
    "Belgium": [
        [
            "bel_sau3_2022",
            "Municipalities"
        ]
    ],
    // "Bulgaria": [
    //     [
    //         "bgr_sau3_2020",
    //         "Municipalities"
    //     ]
    // ],
    // "Canada": [
    //     [
    //         "can_sau3_2021",
    //         "Census Subdivisions"
    //     ]
    // ],
    // "Chile": [
    //     [
    //         "chl_sau3_2017",
    //         "Municipalities"
    //     ]
    // ],
    // "Colombia": [
    //     [
    //         "col_sau3_2021",
    //         "Municipalities"
    //     ]
    // ],
    // "Costa Rica": [
    //     [
    //         "cri_sau3_2018",
    //         "Districts"
    //     ],
    //     [
    //         "cri_sau4_2022",
    //         "Cantons"
    //     ]
    // ],
    // "Croatia": [
    //     [
    //         "hrv_sau3_2020",
    //         "Municipalities"
    //     ]
    // ],
    // "Cyprus": [
    //     [
    //         "cyp_sau3_2020",
    //         "Municipalities"
    //     ]
    // ],
    // "Czechia": [
    //     [
    //         "cze_sau3_2022",
    //         "Municipalities"
    //     ]
    // ],
    // "Denmark": [
    //     [
    //         "dnk_sau3_2022",
    //         "Municipalities"
    //     ]
    // ],
    // "Estonia": [
    //     [
    //         "est_sau3_2023",
    //         "Municipalities"
    //     ]
    // ],
    // "Finland": [
    //     [
    //         "fin_sau3_2022",
    //         "Municipalities"
    //     ]
    // ],
    // "France": [
    //     [
    //         "fra_sau3_2022",
    //         "Municipalities"
    //     ]
    // ],
    // "Germany": [
    //     [
    //         "deu_sau3_2022",
    //         "Municipalities"
    //     ]
    // ],
    // "Greece": [
    //     [
    //         "grc_sau3_2020",
    //         "Communities"
    //     ],
    //     [
    //         "grc_sau4_2015",
    //         "Municipalities"
    //     ]
    // ],
    // "Hungary": [
    //     [
    //         "hun_sau3_2020",
    //         "Settlements"
    //     ]
    // ],
    // "Iceland": [
    //     [
    //         "isl_sau3_2023",
    //         "Municipalities"
    //     ]
    // ],
    // "Ireland": [
    //     [
    //         "irl_sau3_2022",
    //         "Local electoral areas"
    //     ],
    //     [
    //         "irl_sau4_2019",
    //         "Counties"
    //     ]
    // ],
    // "Italy": [
    //     [
    //         "ita_sau3_2022",
    //         "Municipalities"
    //     ]
    // ],
    // "Japan": [
    //     [
    //         "jpn_sau3_2020",
    //         "Municipalities"
    //     ]
    // ],
    // "Korea": [
    //     [
    //         "kor_sau2_2023",
    //         "Towns, townships, neighbourhoods"
    //     ],
    //     [
    //         "kor_sau3_2023",
    //         "Municipalities"
    //     ]
    // ],
    // "Latvia": [
    //     [
    //         "lva_sau3_2022",
    //         "Cities and municipalities"
    //     ]
    // ],
    // "Lithuania": [
    //     [
    //         "ltu_sau3_2020",
    //         "Municipalities"
    //     ]
    // ],
    // "Luxembourg": [
    //     [
    //         "lux_sau3_2021",
    //         "Municipalities"
    //     ]
    // ],
    // "Malta": [
    //     [
    //         "mlt_sau3_2020",
    //         "Local councils"
    //     ]
    // ],
    // "Mexico": [
    //     [
    //         "mex_sau3_2021",
    //         "Municipalities"
    //     ]
    // ],
    "Netherlands": [
        [
            "nld_sau3_2023",
            "Municipalities"
        ]
    ],
    "New Zealand": [
        [
            "nzl_sau3_2022",
            "Statistical Area 2"
        ],
        [
            "nzl_sau4_2022",
            "Territorial Authorities"
        ]
    ],
    // "Norway": [
    //     [
    //         "nor_sau3_2022",
    //         "Municipalities"
    //     ]
    // ],
    // "Poland": [
    //     [
    //         "pol_sau3_2021",
    //         "Municipalities"
    //     ],
    //     [
    //         "pol_sau4_2024",
    //         "Counties"
    //     ]
    // ],
    // "Portugal": [
    //     [
    //         "prt_sau3_2021",
    //         "Councils"
    //     ]
    // ],
    // "Romania": [
    //     [
    //         "rou_sau3_2020",
    //         "Communes, Municipalities, Cities"
    //     ]
    // ],
    // "Slovak Republic": [
    //     [
    //         "svk_sau3_2021",
    //         "Municipalities"
    //     ]
    // ],
    // "Slovenia": [
    //     [
    //         "svn_sau3_2021",
    //         "Municipalities"
    //     ]
    // ],
    // "Spain": [
    //     [
    //         "esp_sau3_2021",
    //         "Municipalities"
    //     ]
    // ],
    // "Sweden": [
    //     [
    //         "swe_sau3_2021",
    //         "Municipalities"
    //     ]
    // ],
    // "Switzerland": [
    //     [
    //         "che_sau3_2021",
    //         "Municipalities"
    //     ]
    // ],
    // "Türkiye": [
    //     [
    //         "tur_sau4_2022",
    //         "Districts"
    //     ]
    // ],
    // "United Kingdom": [
    //     [
    //         "gbr_sau3_2022",
    //         "Local Authority Districts (LAD)"
    //     ]
    // ],
    // "United States": [
    //     [
    //         "usa_cousub_2022",
    //         "County subdivions"
    //     ],
    //     [
    //         "usa_place_2022",
    //         "Places"
    //     ],
    //     [
    //         "usa_postcode_2020",
    //         "Zipcodes"
    //     ],
    //     [
    //         "usa_sau3_2022",
    //         "Counties"
    //     ]
    // ]
};

const geoLevelsDefault = [
    // "aus_sau3_2021",
    "aus_sau4_2023",
    "aut_sau3_2022",
    "bel_sau3_2022",
    "bgr_sau3_2020",
    "can_sau3_2021",
    "chl_sau3_2017",
    "col_sau3_2021",
    // "cri_sau3_2018",
    "cri_sau4_2022",
    "hrv_sau3_2020",
    "cyp_sau3_2020",
    "cze_sau3_2022",
    // "dnk_postcode_2024",
    "dnk_sau3_2022",
    "est_sau3_2023",
    // "fin_sau2_2022",
    "fin_sau3_2022",
    // "fra_sau2_2022",
    "fra_sau3_2022",
    // "deu_postcode_2022",
    "deu_sau3_2022",
    // "grc_sau3_2020",
    "grc_sau4_2015",
    // "hun_sau2_2016",
    "hun_sau3_2020",
    "isl_sau3_2023",
    // "irl_sau2_2022",
    "irl_sau3_2022",
    // "irl_sau4_2019",
    "isr_sau3_2020",
    "ita_sau3_2022",
    "jpn_sau3_2020",
    // "kor_sau2_2023",
    "kor_sau3_2023",
    // "lva_sau2_2022",
    "lva_sau3_2022",
    "ltu_sau3_2020",
    "lux_sau3_2021",
    "mlt_sau3_2020",
    // "mex_sau2_2021",
    "mex_sau3_2021",
    "nld_sau3_2023",
    // "nzl_sau3_2022",
    "nzl_sau4_2022",
    "nor_sau3_2022",
    "pol_sau3_2021",
    // "pol_sau4_2024",
    // "prt_sau2_2018",
    "prt_sau3_2021",
    "rou_sau3_2020",
    "svk_sau3_2021",
    "svn_sau3_2021",
    "esp_sau3_2021",
    "swe_sau3_2021",
    "che_sau3_2021",
    "tur_sau4_2022",
    // "gbr_postcode_2017",
    "gbr_sau3_2022",
    // "usa_cousub_2022",
    // "usa_place_2022",
    // "usa_postcode_2020",
    "usa_sau3_2022"
  ];  

class SidebarControl {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'info legend maplibregl-ctrl maplibregl-ctrl-group sm:hidden';
        this.container.innerHTML = `<div layer-control>
            <label id='map-toggle-button2'><b>Indicators</b></button>
            
        </div>
            `;
    }
    onAdd(map) {
        this.map = map;
        return this.container;
    }
    onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
    }
}
                
class BasemapControl {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'info legend maplibregl-ctrl maplibregl-ctrl-group';
        this.container.innerHTML = `<div class="layer-control">
            <label><b>Basemap</b><br>
            <div class="layer-options">
                <label><input type="radio" id="tl2-basemap" checked> Large regions (TL2)</label><br>
                <label><input type="radio" id="tl3-basemap"> Small regions (TL3)</label><br>
                <label><input type="radio" id="fuas-basemap"> Metropolitan areas (FUA)</label><br>
                <label><input type="radio" id="cities-basemap"> Cities</label>
            </div>
        </div>
            `;
    }
    onAdd(map) {
        this.map = map;
        return this.container;
    }
    onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
    }
}

class GeographiesControl {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'info legend maplibregl-ctrl maplibregl-ctrl-group';
        
        var htmlGeoLayers = `<div class="layer-control">
            <label><b>Geographies</b><br>
            `;
        for (const country in geoLevels) {
            if (geoLevels[country].length != 1) {
                htmlGeoLayers += `<div class="layer-options">
                <label><b>${country}</b><br>\n`;
                for (const [id, name] of geoLevels[country]) {
                    const checked = geoLevelsDefault.includes(id)
                    if (checked) {
                        htmlGeoLayers += `<label><input type="checkbox" id="${id}-layer" name="geography" checked> ${name}</label><br>\n`;
                    }
                    else {
                        htmlGeoLayers += `<label><input type="checkbox" id="${id}-layer" name="geography"> ${name}</label><br>\n`;
                    }
                }
                this.container.innerHTML += `</div>` 
            }
        }
        htmlGeoLayers += `</div></div>` 

        this.container.innerHTML = htmlGeoLayers;

    }
    onAdd(map) {
        this.map = map;
        return this.container;
    }
    onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
    }
}

class LegendControl {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'info legend maplibregl-ctrl maplibregl-ctrl-group';
        this.container.innerHTML = ``;
    }
    onAdd(map) {
        this.map = map;
        return this.container;
    }
    onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
    }
}

function buildBaseMap() {
    const sourcesMap = {};
    for (const country in geoLevels) {
        // Iterate over each array within the country's value
        for (const [id, name] of geoLevels[country]) {
            sourcesMap[`${id}_tiles`] = {
                type: "vector",
                url: `pmtiles://tiles/${id}.pmtiles`,
                minzoom: 5,
                maxzoom: 11,
            };
        }
            
    };

    const sourcesBasemaps = ["coastlines", 
            "lakes", 
            "tl1_plain_boundaries", 
            "tl1_dotted_boundaries", 
            "tl2_oecd_interior_boundaries",
            "tl2_labels",
            "tl3_oecd_interior_boundaries",
            "tl3_labels",
            "fuas_oecd_boundaries",
            "fuas_labels",
            "cities_oecd_boundaries",
            "cities_labels",
        ];
    for (const geo of sourcesBasemaps) {
        sourcesMap[`${geo}_tiles`] = {
            type: "vector",
            url: `pmtiles://tiles/${geo}.pmtiles`,
            minzoom: 5,
            maxzoom: 11,
        };

        if (geo == "tl1_plain_boundaries") {
            sourcesMap[`${geo}_tiles`]['attribution'] = "Source of administrative boundaries: National Statistical Offices and FAO Global Administrative Unit Layers (GAUL). This map is for illustrative purposes and is without prejudice to the status of or sovereignty over any territory covered by this map."

        }
    };    

    var map = new maplibregl.Map({
        container: 'map',
        minZoom: 5, 
        maxZoom: 11,
        center: [2.3522, 48.8566],
        zoom: 7,
        style: {
            version:8,
            glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf", // Add glyphs URL
            
            sources: sourcesMap,
            layers: [
            {
                id: 'background-layer',
                type: 'background',
                paint: { 
                    'background-color': 'rgb(201, 205, 206)' 
                }
            },
            {
                "id": "coastlines-layer",
                "type": "fill",
                "source": "coastlines_tiles",
                "source-layer": "coastlines", 
                "paint": {
                    "fill-color": "rgb(236, 236, 236)",
                }
            },
            {
                "id": "lakes-layer",
                "type": "fill",
                "source": "lakes_tiles",
                "source-layer": "lakes", 
                "paint": {
                    "fill-color": "rgb(201, 205, 206)",
                }
            },
            {
                "id": "tl1-plain-boundary-line-layer",
                "type": "line",
                "source": "tl1_plain_boundaries_tiles",
                "source-layer": "tl1_plain_boundaries", 
                "paint": {
                    "line-color": "#606060", 
                    "line-opacity": 0.9,
                    "line-width": [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            0, 1,
                            8, 2,
                            10, 3,
                        ],
                }
            },
            {
                "id": "tl1-dotted-boundary-line-layer",
                "type": "line",
                "source": "tl1_dotted_boundaries_tiles",
                "source-layer": "tl1_dotted_boundaries", 
                "paint": {
                    "line-color": "#606060", 
                    "line-opacity": 0.9,
                    "line-width": [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            0, 1,
                            8, 2,
                            10, 3,
                        ],
                    "line-dasharray": [5, 5]
                }
            },

            {
                "id": "tl2-line-layer",
                "type": "line",
                "source": "tl2_oecd_interior_boundaries_tiles",
                "source-layer": "tl2_oecd_interior_boundaries", 
                "paint": {
                    "line-color": "#606060", 
                    "line-opacity": 0.9,
                    "line-width": [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            0, 0.5,
                            8, 1,
                            10, 2,
                        ],
                },
                "layout": {
                    "visibility": "visible"
                }
            },

            
            {
                "id": "tl3-line-layer",
                "type": "line",
                "source": "tl3_oecd_interior_boundaries_tiles",
                "source-layer": "tl3_oecd_interior_boundaries", // Update with your actual layer name
                "paint": {
                    "line-color": "#606060", 
                    "line-opacity": 0.9,
                    "line-width": [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            0, 0.5,
                            8, 1,
                            10, 2,
                        ],
                },
                "layout": {
                    "visibility": "none"
                }
            },

            {
                "id": "fuas-line-layer",
                "type": "line",
                "source": "fuas_oecd_boundaries_tiles",
                "source-layer": "fuas_oecd_boundaries", // Update with your actual layer name
                "paint": {
                    "line-color": "#606060", 
                    "line-opacity": 0.9,
                    "line-width": [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            0, 0.5,
                            8, 1,
                            10, 2,
                        ],
                },
                "layout": {
                    "visibility": "none"
                }
            },

            {
                "id": "cities-line-layer",
                "type": "line",
                "source": "cities_oecd_boundaries_tiles",
                "source-layer": "cities_oecd_boundaries", // Update with your actual layer name
                "paint": {
                    "line-color": "#606060", 
                    "line-opacity": 0.9,
                    "line-width": [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            0, 0.5,
                            8, 1,
                            10, 2,
                        ],
                },
                "layout": {
                    "visibility": "none"
                }
            },

            // {
            //     "id": "tl1-label-layer",
            //     "type": "symbol",
            //     "source": "tl1_labels_tiles",
            //     "source-layer": "tl1_labels", // Update with your actual layer name
            //     "layout": {
            //         "text-field": ["get", "tl1_name_en"],
            //         "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
            //         "text-size": 15
            //     },
            //     "paint": {
            //         "text-color": "#808080", // Grey text
            //         "text-halo-color": "rgba(255, 255, 255, 0.6)", // White halo (shadow)
            //         "text-halo-width": 5 // Width of the halo
            //     },
            //     "minzoom": 4,
            //     "maxzoom": 11
    
    
            // },

            {
                "id": "tl2-label-layer",
                "type": "symbol",
                "source": "tl2_labels_tiles",
                "source-layer": "tl2_labels", // Update with your actual layer name
                "layout": {
                    "text-field": ["get", "reg_name_publications"],
                    "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                    "text-transform": "uppercase",
                    "text-size": [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        4, 12,
                        9, 15,
                    ],
                },
                "paint": {
                    "text-color": "#808080", // Grey text
                    "text-halo-color": "rgba(255, 255, 255)", // White halo (shadow)
                    "text-halo-width": 2 // Width of the halo
                },
                "minzoom": 4,
                "maxzoom": 9
    
            },

            {
                "id": "tl3-label-layer",
                "type": "symbol",
                "source": "tl3_labels_tiles",
                "source-layer": "tl3_labels", // Update with your actual layer name
                "layout": {
                    "visibility": "none",
                    "text-field": ["get", "reg_name_publications"],
                    "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                    "text-transform": "uppercase",
                    "text-size": [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        4, 11,
                        9, 14,
                    ],
                },
                "paint": {
                    "text-color": "#808080", // Grey text
                    "text-halo-color": "rgba(255, 255, 255)", // White halo (shadow)
                    "text-halo-width": 2 // Width of the halo
                },
                "minzoom": 4,
                "maxzoom": 9,
            },

            {
                "id": "fuas-label-layer",
                "type": "symbol",
                "source": "fuas_labels_tiles",
                "source-layer": "fuas_labels", // Update with your actual layer name
                "layout": {
                    "visibility": "none",
                    "text-field": ["get", "fuaname_en"],
                    "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                    "text-size": [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        4, 12,
                        9, 15,
                    ],
                },
                "paint": {
                    "text-color": "#808080", // Grey text
                    "text-halo-color": "rgba(255, 255, 255)", // White halo (shadow)
                    "text-halo-width": 2 // Width of the halo
                },
                "minzoom": 4,
                "maxzoom": 9,
            },

            {
                "id": "cities-label-layer",
                "type": "symbol",
                "source": "cities_labels_tiles",
                "source-layer": "cities_labels", // Update with your actual layer name
                "layout": {
                    "visibility": "none",
                    "text-field": ["get", "cityname_en"],
                    "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                    "text-size": [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        4, 11,
                        9, 14,
                    ],
                },
                "paint": {
                    "text-color": "#808080", // Grey text
                    "text-halo-color": "rgba(255, 255, 255)", // White halo (shadow)
                    "text-halo-width": 2
                },
                "minzoom": 4,
                "maxzoom": 9,
            },

        //     {
        //     "id": "sau-label-layer",
        //     "type": "symbol",
        //     "source": "sau_tiles",
        //     "source-layer": "data_geo", // Update with your actual layer name
        //     "layout": {
        //         "text-field": ["get", "launame"],
        //         "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
        //         "text-size": 11
        //     },
        //     "paint": {
        //         "text-color": "#808080", // Grey text
        //         "text-halo-color": "rgba(255, 255, 255, 0.6)", // White halo (shadow)
        //         "text-halo-width": 1 // Width of the halo
        //     },
        //     "minzoom": 9,
        //     "maxzoom": 12


        // }
        ]
        }
    });

    function setBasemapLayerVisibility(layerId) {
        const layers = ["tl2", 
                        "tl3", 
                        "fuas", 
                        "cities"];
        layers.forEach(id => {
            map.setLayoutProperty(`${id}-line-layer`, 'visibility', `${id}-line-layer` === `${layerId}-line-layer` ? 'visible' : 'none');
            map.setLayoutProperty(`${id}-label-layer`, 'visibility', `${id}-label-layer` === `${layerId}-label-layer` ? 'visible' : 'none');
            document.getElementById(`${id}-basemap`).checked = id === layerId;
        });
    };

    function setGeographyLayerVisibility(layerId, country) {
        for (const [id, name] of geoLevels[country]) {
            map.setLayoutProperty(`${id}-layer`, 'visibility', `${id}-layer` === `${layerId}-layer` ? 'visible' : 'none');
            map.setLayoutProperty(`${id}-outline-layer`, 'visibility', `${id}-layer` === `${layerId}-layer` ? 'visible' : 'none');
            map.setLayoutProperty(`${id}-label-layer`, 'visibility', `${id}-layer` === `${layerId}-layer` ? 'visible' : 'none');
            document.getElementById(`${id}-layer`).checked = id === layerId;
        }
        
    };

    const geocoderApi = {
        forwardGeocode: async (config) => {
            const features = [];
            try {
                const request =
            `https://nominatim.openstreetmap.org/search?q=${
                config.query
            }&format=geojson&polygon_geojson=1&addressdetails=1`;
                const response = await fetch(request);
                const geojson = await response.json();
                for (const feature of geojson.features) {
                    const center = [
                        feature.bbox[0] +
                    (feature.bbox[2] - feature.bbox[0]) / 2,
                        feature.bbox[1] +
                    (feature.bbox[3] - feature.bbox[1]) / 2
                    ];
                    const point = {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: center
                        },
                        place_name: feature.properties.display_name,
                        properties: feature.properties,
                        text: feature.properties.display_name,
                        place_type: ['place'],
                        center
                    }; 
                    features.push(point);
                }
            } catch (e) {
                console.error(`Failed to forwardGeocode with error: ${e}`);
            }

            return {
                features
            };
        }
    };
    
    map.addControl(
        new MaplibreGeocoder(geocoderApi, {
            maplibregl
        })
    );

    map.addControl(new maplibregl.NavigationControl());

    map.addControl(new maplibregl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }));

    let scale = new maplibregl.ScaleControl({
        maxWidth: 80,
        unit: 'metric'
    });
    map.addControl(scale);

    map.addControl(new SidebarControl, 'top-left');
    document.getElementById('map-toggle-button').addEventListener('click', function() {
        var div = document.getElementById('map-topic');
        div.classList.toggle('hidden');
    });
    document.getElementById('map-toggle-button2').addEventListener('click', function() {
        var div = document.getElementById('map-topic');
        div.classList.remove('hidden');
    });
    


    map.addControl( new BasemapControl, 'top-left')
    document.getElementById('tl2-basemap').addEventListener('change', function() {
        setBasemapLayerVisibility('tl2');
    });

    document.getElementById('tl3-basemap').addEventListener('change', function() {
        setBasemapLayerVisibility('tl3');
    });

    document.getElementById('fuas-basemap').addEventListener('change', function() {
        setBasemapLayerVisibility('fuas');
    });

    document.getElementById('cities-basemap').addEventListener('change', function() {
        setBasemapLayerVisibility('cities');
    });

    map.addControl( new GeographiesControl, 'top-left')
    for (const country in geoLevels) {
        for (const [id, name] of geoLevels[country]) {
            if (geoLevels[country].length != 1) {
                document.getElementById(`${id}-layer`).addEventListener('change', function() {
                    setGeographyLayerVisibility(id, country);
                });
            }
        }
    }
    

    return map;
}

function normalizeData(val, valMin, valMax) {
    var valNorm = (Math.min(val, valMax) - valMin) / (valMax - valMin);
    return valNorm;
    }

function clickHandler(e, variable, label, unit){
    var radarLabels = [];
    var radarSauData = [];
    var radarFuaData = [];

    var iso3 = e.features[0].properties.iso3;
    var geo_level = e.features[0].properties.geo_level;
    var table_name = e.features[0].properties.table_name;
    var sauname = e.features[0].properties.launame;
    var saucode = e.features[0].properties.pk;
    var fuacode = e.features[0].properties.fuacode;
    var fuaname = e.features[0].properties.fuaname_en;
    var cityname = e.features[0].properties.cityname_en;
    var citycode = e.features[0].properties.citycode;
    var tl2_id = e.features[0].properties.tl2_id;
    var tl2_name_en = e.features[0].properties.tl2_name_en;
    var tl3_id = e.features[0].properties.tl3_id;
    var tl3_name_en = e.features[0].properties.tl3_name_en;

    var year = findRow(iso3, geo_level, variable);

    if (sauname == undefined) {
        var sauInfo = ''
    } else {
        // var sauInfo = `<b>Commune:</b> ${sauname} <br>`
        var sauInfo = `${sauname}`
    };

    var varValue = e.features[0].properties[variable];
    
    var innerHtmlTl = "";

    if (tl2_name_en != undefined) {
        innerHtmlTl += `<div class="flex items-start gap-1" style="padding-left: 0.2em">
                        <div class="flex h-6 w-6 items-center justify-center rounded text-white font-bold"
                        style="background: darkgrey; font-size: 0.6rem"> TL2 </div>
                    <div class="flex h-6 items-center justify-center font-bold text-gray-500" style="padding-left: 0.2em; padding-right: 1em">${tl2_name_en}</div>
                </div>`
    };

    if (tl3_name_en != undefined) {
        innerHtmlTl += `<div class="flex items-start gap-1" style="padding-left:0.2em">
                    <div class="flex h-6 w-6 items-center justify-center rounded text-white text-sm font-bold"
                        style="background: darkgrey; font-size: 0.6rem"> TL3 </div>
                    <div class="flex h-6 items-center justify-center font-bold text-gray-500" style="padding-left: 0.2em; padding-right: 1em">${tl3_name_en}</div>
                </div>`
    };

    if (fuaname != undefined) {
        innerHtmlTl += `<div class="flex items-start gap-1" style="padding-left: 0.2em">
                        <div class="flex h-6 w-6 items-center justify-center rounded text-white text-sm font-bold"
                        style="background: darkgrey; font-size: 0.6rem;"> FUA </div>
                    <div class="flex h-6 items-center justify-center font-bold text-gray-500" style="padding-left: 0.2em; padding-right: 1em">${fuaname}</div>
                </div>`
    };

    if (cityname != undefined) {
        innerHtmlTl += `<div class="flex items-start gap-1" style="padding-left: 0.2em">
                        <div class="flex h-6 w-6 items-center justify-center rounded text-white text-sm font-bold"
                        style="background: darkgrey; font-size: 0.6rem;"> City </div>
                    <div class="flex h-6 items-center justify-center font-bold text-gray-500" style="padding-left: 0.2em; padding-right: 1em">${cityname}</div>
                </div>
                    `
    };

    var innerHtmlTopic = "";

    varListDemography = ["POP_T", "POP_CH", "NETNAT_RATE", "NETMOBMIG_RATE", "NETMOB_RATE", "NETMIG_RATE", "OLD_SH", "WORKAGE_SH", "YOUTH_SH",
                        "MIGRANT_SH", "SEX_RATIO_TOT", "BIRTH_RATE", "DEATH_RATE"];
    varListEnvironment = [
        "GREEN_AREA_SHARE", "GREEN_AREA_CAPITA", "FOREST_CH"
                        ];

    varListEnergy = [
        "SOLAR_POWER_POT", "WIND_POWER_POT", "CDD_T_22C", "CDD_T_22C_CH", "HDD_T_15C", "HDD_T_15C_CH", 
                        ];
    varListClimate = [
        "AIR_TEMP2M", "AIR_TEMP2M_DIFF_1981_2010", "LST_DAY_SUMMER", "LST_NIGHT_SUMMER",
        "HOT_DAYS", "HOT_DAYS_DIFF_1981_2010", "TROPICAL_NIGHTS", "TROPICAL_NIGHTS_DIFF_1981_2010",
        "PRECIP_SUM", "PRECIP_SUM_DIFF_1981_2010", "EXT_PRECIP_DAYS", "EXT_PRECIP_DAYS_1981_2010",
        "SOIL_MOIST_L1_CH_1981_2018", "FIRE_TOTAL_AREA_SH", "RIVER_FLOOD_RP100_POP_SH", "COASTAL_FLOOD_RP100_POP_SH",
    ];
    varListEconomy = [
        "DISP_INC_EQ", "DISP_INC_EQ_GINI", "POV_RATE_60", "UNEMP_RA"
    ];
    varListTransport = [
        "PASG_VEH_CAP", "SH_ELEC_HYB_PASG_VEH",  "SH_COMMUT_CAR", "SH_COMMUT_PUBLIC_TRANSPORT", "SH_COMMUT_BIKE", "SH_COMMUT_WALK"
    ];
    varListHousing = [
        "NB_UNITS", "OCCUP_SH", "VAC_SH", "OWN_SH", "RENT_SH", "MAIN_RES_SH", "SECOND_RES_SH", "ENER_HEAT_SH_ELEC", "ENER_HEAT_SH_GAS", "ENER_HEAT_SH_OIL", 
    ];
    varListGHSL = [
        "pop_density_km2", "BUILT_S_RES", "BUILT_S_NRES", "BUILT_S__T_CH_2000_2020", "BUILT_S_RES_CH_2000_2020",
        "BUILT_V__T", "BUILT_V_RES", "BUILT_V_NRES", "BUILT_H",
        "DEGURBA_L1", "DEGURBA_L2"
    ];
    varListServices= [
        "FIXED_AVG_D_DEV_NAT", "FIXED_AVG_U_DEV_NAT", "MOBILE_AVG_D_DEV_NAT", "MOBILE_AVG_U_DEV_NAT",  "SCHOOLS_DIST_MEAN", "HOSPITALS_DIST_MEAN"
    ];

    if (varListDemography.includes(variable)) {
        innerHtmlTopic += `<div class="flex items-center gap-1">
                <div class="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
                style="background: rgb(178, 82, 144);"><i
                    class="fa-fw fa-regular fa-people"></i></div>
            <div class="font-bold">Demography</div>
            </div>`
    } else if (varListEnvironment.includes(variable)) {
        innerHtmlTopic += `<div class="flex items-center gap-1">
        <div class="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
        style="background: rgb(16, 149, 76);"><i
            class="fa-fw fa-regular fa-seedling"></i></div>
    <div class="font-bold">Environment</div>
    </div>`}
    else if (varListEnergy.includes(variable)) {
        innerHtmlTopic += `<div class="flex items-center gap-1">
        <div class="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white bg-energy"
        ><i
            class="fa-fw fa-regular fa-bolt"></i></div>
    <div class="font-bold">Environment</div>
    </div>`
    } 
    else if (varListTransport.includes(variable)) {
        innerHtmlTopic += `<div class="flex items-center gap-1">
        <div class="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white bg-transport"
        ><i
            class="fa-fw fa-regular fa-car"></i></div>
    <div class="font-bold">Transport</div>
    </div>`
    }
    else if (varListHousing.includes(variable)) {
        innerHtmlTopic += `<div class="flex items-center gap-1">
        <div class="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white bg-housing"
        ><i
            class="fa-fw fa-regular fa-building"></i></div>
    <div class="font-bold">Housing</div>
    </div>`
    }
    else if (varListClimate.includes(variable)) {
        innerHtmlTopic += `<div class="flex items-center gap-1">
        <div class="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
        style="background: darkred;"><i
            class="fa-fw fa-regular fa-temperature-arrow-up"></i></div>
    <div class="font-bold">Climate</div>
    </div>`
    } else if (varListEconomy.includes(variable)) {
        innerHtmlTopic += `<div class="flex items-center gap-1">
        <div class="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
        style="background: rgb(77, 82, 168);"><i
            class="fa-fw fa-regular fa-building-columns"></i></div>
    <div class="font-bold">Economy and labour</div>
    </div>`
    } else if (varListGHSL.includes(variable)) {
        innerHtmlTopic += `<div class="flex items-center gap-1">
        <div class="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
        style="background: rgb(122, 64, 43);"><i
            class="fa-fw fa-regular fa-building-user"></i></div>
    <div class="font-bold">Territorial organisation</div>
    </div>`
    } else if (varListServices.includes(variable)) {
        innerHtmlTopic += `<div class="flex items-center gap-1">
        <div class="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
        style="background: rgb(255, 130, 0);"><i
            class="fa-fw fa-regular fa-shop"></i></div>
    <div class="font-bold">Services</div>
    </div>`
    }

    let popupResult;

    if (typeof varValue === 'string') {
        popupResult = varValue; // If varValue is a string, use it as is
    } else {
        popupResult = `${(Math.round(varValue * 10) / 10).toLocaleString('en-US').replaceAll(',', ' ')} ${unit}`;
    }

    if (popup) {
        popup.remove();
    }

    if (varValue != null) {
        popup = new maplibregl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`
            <div class="flex flex-col gap-2">
                <div class="flex flex-col gap-1">
                    <div class="flex items-start text-xl font-bold">${sauInfo}</div>
                    <div class="flex flex-col items-start gap-1" style="padding-left: 1em">
                    ${innerHtmlTl}
                    </div>
                </div>
                <hr />
                
                <div class="flex flex-col gap-1">
                    ${innerHtmlTopic}
                    <div class="font-bold px-3 text-gray-500">${label.replaceAll("<br>", " ")} (${year})</div>
                    <div class="px-3 text-gray-500">${popupResult}</div>
                </div>
                <hr />
                <div class="flex flex-col gap-1">
                    <div class="text-xs font-bold">
                        Get all statistics about <a class="text-gray-800 transition hover:text-shift-blue" href="profile.html?georef=${table_name}&code=${saucode}"><u>${sauname}</u></a>.
                    </div>
                </div>
            </div>
                    ` )
        .addTo(map);
            
    }
    }
    
var scaleBrowns = chroma.scale(['#D4BBBA', '#C3A19E', '#B18883', '#9F6F67', '#8D574C', '#7A4031', '#722E2C', '#6A262F', '#612135', '#591D39', '#50183C', '#46143D'])
var scaleReds = chroma.scale(['#ffffe0', '#f5e1c1', '#eac4a3', '#dda686', '#cf8a6a', '#c06d4e', '#b05034', '#9e311b', '#8b0000'])
var scaleGreens = chroma.scale(['#ffffe0', '#e5f2cc', '#cbe5b9', '#b1d8a6', '#97ca93', '#7cbd81', '#60b06f', '#41a25d', '#10954c'])
var scalePinks = chroma.scale(['#E7C4E0', '#DDADD2', '#D396C3', '#C87FB3', '#BD68A2', '#B25290', '#A64995', '#81398E', '#673281', '#502B73', '#3A2466'])
var scaleBlues = chroma.scale(['#ffffe0', '#eae8da', '#d5d1d3', '#c0bacc', '#aba4c5', '#958fbe', '#7f7ab7', '#6766b0', '#4d52a8'])
var scaleOranges = chroma.scale(["#360012", "#5E000F", "#860001", "#AE1D03", "#D74908", "#ff7f0e", "#FF8D2B", "#FF9C49", "#FFAC69", "#FFBD8B", "#FFD0AD"].slice().reverse());
var scalePurples = chroma.scale(['#D6B9F1', '#C79DEA', '#BA82E3', '#AE67DC', '#A34CD4', '#9932CC', '#752BC0', '#5324B2', '#181996', '#132887'])
var scaleGreenBlue = chroma.scale(['#C7D3E2', '#B1C0D6', '#9BACCA', '#8598BE', '#7083B1', '#5A6EA4', '#517199', '#49738D', '#417382', '#397276', '#316963', '#2A5D4E'])
var scaleYellowRed = chroma.scale(['#EFE7C0', '#E7DFA6', '#E0D88D', '#D8D175', '#D0CB5D', '#C7C645', '#BAA43D', '#AD8435', '#9F652E', '#914827', '#832F20', '#741B1D'])
var scaleBlues2 = chroma.scale(["#03291A", "#074738", "#0B645D", "#11767F", "#187A9A", "#1f77b4", "#3B8CC1", "#58A0CC", "#76B3D7", "#94C6E2", "#B3D8EB"].slice().reverse())
var scaleBuRd = chroma.scale(['#00429d', '#4771b2', '#73a2c6', '#a5d5d8', '#ffffe0', '#ffbcaf', '#f4777f', '#cf3759', '#93003a'])
var scaleRdBu = chroma.scale(['#93003a', '#cf3759', '#f4777f', '#ffbcaf', '#ffffe0', '#a5d5d8', '#73a2c6', '#4771b2', '#00429d'])

function getColor(d, valMin, valMax, varScale = scaleReds) {
    var scaledValue = (d - valMin) / (valMax - valMin);
    var color = varScale(scaledValue).hex();
    return color;
};

function getLegend(varLabel, varUnit, grades, varMin, varMax, varScale = scaleReds, minusLow=false, plusUp=true) {
        var legend = new LegendControl({position: 'bottomright'});

        legend.container.innerHTML = `<div class="layer-control">`;

        if (varUnit != "") {
            legend.container.innerHTML += `<b>${varLabel} (${varUnit})</b><br>`
        } else {
            legend.container.innerHTML += `<b>${varLabel}</b><br>`
        }
        
        if (minusLow){
            legend.container.innerHTML +=
            '<i style="background:' + getColor(grades[0], varMin, varMax, varScale) + '"></i> ' + '< ' +
            grades[0]  + '<br>';
        }
        for (var i = 0; i < grades.length - 1; i++) {
            legend.container.innerHTML +=
                '<i style="background:' + getColor((grades[i + 1] + grades[i]) / 2, varMin, varMax, varScale) + '"></i> ' +
                grades[i] + ' &ndash; ' + grades[i + 1] + '<br>' ;
        
        }
        if (plusUp){
            legend.container.innerHTML +=
                '<i style="background:' + getColor(grades[grades.length-1], varMin, varMax, varScale) + '"></i> '+ '> '  +
                grades[grades.length - 1] + '<br>';
            }
        legend.container.innerHTML += '</div>'

    return legend;
}

function getLegendCat(varLabel, categoricalColors){
    var legend = new LegendControl({position: 'bottomright'});

    legend.container.innerHTML = `<div class="layer-control">`;

    legend.container.innerHTML += `<b>${varLabel}</b><br>`
    
    for (const category in categoricalColors) {
        if (categoricalColors.hasOwnProperty(category)) {
            const color = categoricalColors[category];
            legend.container.innerHTML +=
                `<i style="background:${color}"></i> ${category}<br>`;
        }
    }

    return legend;
}

function chromaScaleToStops(varScale, valMin, valMax, steps=10) {
    const stops = [];
    const step = (valMax - valMin) / steps
    for (let i = 0; i <= steps; i++) {
        const value = valMin + (i * step);
        const scaledValue = (value - valMin) / (valMax - valMin);
        const color = varScale(scaledValue).hex();
        stops.push(value, color);
    }
    return stops;
}

function createLayerAndLegend(id, variable, label, varUnit, valMin, valMax, legendVals, varScale, firstLayer=false, minusLow=false, plusUp=true) {
  const buttonElement = document.getElementById(`button-${id}`);
  const legend = getLegend(label, varUnit, legendVals, valMin, valMax, varScale, minusLow, plusUp);
  
  if (firstLayer)  {
    currentButton = buttonElement;
    currentLegend = legend;
    currentButton.classList.remove('bg-white');
    currentButton.classList.add('bg-gray-100');
    map.addControl(currentLegend, 'bottom-right');
    stops = chromaScaleToStops(varScale, valMin, valMax);
    
    map.on('styledata', function() {
        for (const country in geoLevels) {
            for (const [id, name] of geoLevels[country]) {
                let isChecked;
                let visibilityLayer;
                if (geoLevels[country].length != 1) {
                    isChecked = document.getElementById(`${id}-layer`).checked;
                    visibilityLayer = document.getElementById(`${id}-layer`).checked;
                }
                else {
                    visibilityLayer = true;
                    isChecked = false;
                }
                if (!map.getLayer(`${id}-layer`)) {
                    
                    map.addLayer(
                        {
                            "id": `${id}-layer`,
                            "source": `${id}_tiles`,
                            "source-layer": id, 
                            "type": "fill",
                            "paint": {
                                "fill-color": [
                                    "case", ["==", ["get", variable], null], "rgb(236, 236, 236)",
                                        ['interpolate',
                                        ['linear'],
                                        ['get', variable],
                                        ...stops]
                                
                                ],
                                "fill-opacity": 0.9,
                            },
                            "layout": {
                                "visibility": visibilityLayer ? "visible" : "none"
                            }
                        },
                        "tl1-plain-boundary-line-layer"
                    );
                    map.addLayer({
                        "id": `${id}-outline-layer`,
                        "source": `${id}_tiles`,
                        "source-layer": id, 
                        "type": "line",
                        "paint": {
                            "line-color": "silver",
                            "line-width": 0.2
                        },
                        "layout": {
                            "visibility": visibilityLayer ? "visible" : "none"
                        },
                        "minzoom": 7,
                        "maxzoom": 12
                    }, "tl1-plain-boundary-line-layer"); 
                    
                    map.addLayer(
                            {
                                "id": `${id}-label-layer`,
                                "type": "symbol",
                                "source": `${id}_tiles`,
                                "source-layer": id, 
                                "layout": {
                                    "text-field": ["get", "launame"],
                                    "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                                    "text-size": 11,
                                    "visibility": visibilityLayer ? "visible" : "none"
                                },
                                "paint": {
                                    "text-color": "#808080", // Grey text
                                    "text-halo-color": "rgba(255, 255, 255, 0.6)", // White halo (shadow)
                                    "text-halo-width": 1 // Width of the halo
                                },
                                "minzoom": 9,
                                "maxzoom": 12

                            }
                    );
                    map.on('click', `${id}-layer`, e => clickHandler(e, variable, label, varUnit));
                }
            }
        }
        
    });
  }
  
  
  buttonElement.addEventListener('click', function () {
    currentButton.classList.remove('bg-gray-100');
    currentButton.classList.add('bg-white');
    stops = chromaScaleToStops(varScale, valMin, valMax);

    map.removeControl(currentLegend);
    currentLegend = legend;
    map.addControl(currentLegend, 'bottom-right');
    
    currentButton = buttonElement;
    
    for (const country in geoLevels) {
        for (const [id, name] of geoLevels[country]) {
            let isChecked;
            let visibilityLayer;
            if (geoLevels[country].length != 1) {
                isChecked = document.getElementById(`${id}-layer`).checked;
                visibilityLayer = document.getElementById(`${id}-layer`).checked;
            }
            else {
                visibilityLayer = true;
                isChecked = false;
            }
            map.setPaintProperty(`${id}-layer`, 'fill-color', [
                'case',
                ['==', ['get', variable], null], 
                "rgb(236, 236, 236)", 
                [
                    'interpolate',
                    ['linear'],
                    ['get', variable],
                    ...stops
                ]
            ]);
            map.on('click', `${id}-layer`, e => clickHandler(e, variable, label, varUnit));
        }
    }
    
   
    // currentLegend.addTo(map);
    currentButton.classList.add('bg-gray-100');
  });
}

function createLayerAndLegendCategorical(id, variable, label, categoricalColors, firstLayer=false) {
    const legend = getLegendCat(label, categoricalColors);
    const buttonElement = document.getElementById(`button-${id}`);
    const matchExpression = ['match', ['get', variable]];
    for (const [category, color] of Object.entries(categoricalColors)) {
        matchExpression.push(category, color);
    }
    matchExpression.push("rgb(236, 236, 236)");


  if (firstLayer) {
    currentButton = buttonElement;
    currentLegend = legend;
    currentButton.classList.remove('bg-white');
    currentButton.classList.add('bg-gray-100');
    map.addControl(currentLegend, 'bottom-right');

    
    map.on('styledata', function() {
        for (const country in geoLevels) {
            for (const [id, name] of geoLevels[country]) {
                let isChecked;
                let visibilityLayer;
                if (geoLevels[country].length != 1) {
                    isChecked = document.getElementById(`${id}-layer`).checked;
                    visibilityLayer = document.getElementById(`${id}-layer`).checked;
                }
                else {
                    visibilityLayer = true;
                    isChecked = false;
                }
                if (!map.getLayer(`${id}-layer`)) {
                    map.addLayer(
                        {
                            "id": `${id}-layer`,
                            "source": `${id}_tiles`,
                            "source-layer": id, // Update with your actual layer name
                            "type": "fill",
                            "paint": {
                                "fill-color": matchExpression,
                                "fill-opacity": 0.9,
                            },
                            "layout": {
                                "visibility": visibilityLayer ? "visible" : "none"
                            }
                        },
                        "tl1-plain-boundary-line-layer"
                    );
                    map.addLayer({
                        "id": `${id}-outline-layer`,
                        "source": `${id}_tiles`,
                        "source-layer": id, 
                        "type": "line",
                        "paint": {
                            "line-color": "silver",
                            "line-width": 0.2
                        },
                        "layout": {
                            "visibility": visibilityLayer ? "visible" : "none"
                        },
                        "minzoom": 7,
                        "maxzoom": 12
                    }, "tl1-plain-boundary-line-layer"); 
                    map.addLayer(
                        {
                            "id": `${id}-label-layer`,
                            "type": "symbol",
                            "source": `${id}_tiles`,
                            "source-layer": id, 
                            "layout": {
                                "text-field": ["get", "launame"],
                                "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
                                "text-size": 11,
                                "visibility": visibilityLayer ? "visible" : "none"
                            },
                            "paint": {
                                "text-color": "#808080", // Grey text
                                "text-halo-color": "rgba(255, 255, 255, 0.6)", // White halo (shadow)
                                "text-halo-width": 1 // Width of the halo
                            },
                            "minzoom": 9,
                            "maxzoom": 12

                        }
                    );
                    map.on('click', `${id}-layer`, e => clickHandler(e, variable, label, ""));
                }
            }
        }
    });
    
    
  }
  
  buttonElement.addEventListener('click', function () {
    map.removeControl(currentLegend);
    currentButton.classList.remove('bg-gray-100');
    currentButton.classList.add('bg-white');
    
    currentLegend = legend;
    map.addControl(currentLegend, 'bottom-right');
    currentButton = buttonElement;
    
    for (const country in geoLevels) {
        for (const [id, name] of geoLevels[country]) {
            let isChecked;
            let visibilityLayer;
            if (geoLevels[country].length != 1) {
                isChecked = document.getElementById(`${id}-layer`).checked;
                visibilityLayer = document.getElementById(`${id}-layer`).checked;
            }
            else {
                visibilityLayer = true;
                isChecked = false;
            }
            map.setPaintProperty(`${id}-layer`, 'fill-color', matchExpression);
            map.on('click', `${id}-layer`, e => clickHandler(e, variable, label, ""));
        }
    }
    // currentLegend.addTo(map);
    currentButton.classList.add('bg-gray-100');
  });
}


let csvData = [];

// Function to load CSV data and store it in csvData variable
function loadCSV(csvFilePath) {
    return fetch(csvFilePath)
        .then(response => response.text())
        .then(csvText => {
            const rows = csvText.trim().split('\n');
            const headers = rows[0].split(',');
            csvData = rows.slice(1).map(row => {
                const values = row.split(',');
                return headers.reduce((obj, header, index) => {
                    obj[header.trim()] = values[index].trim();
                    return obj;
                }, {});
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing CSV file:', error);
        });
}

function findRow(iso3, geo_level, varName) {
    const foundRow = csvData.find(row => row['iso3'] === iso3 && row['geo_level'] === geo_level);
    if (foundRow) {
        return foundRow[`${varName}_YEAR`]; // Return the value of column3 from the found row
    } else {
        return null; // Or handle the case where row is not found
    }
}