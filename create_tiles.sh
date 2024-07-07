tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --simplify-only-low-zooms --simplification=4 --output=tiles/coastlines.pmtiles data_raw/coastlines.geojson
# tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --output=tiles/lakes.pmtiles data_raw/lakes.geojson
# tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --output=tiles/tl1_plain_boundaries.pmtiles data_raw/tl1_plain_boundaries.geojson
# tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --output=tiles/tl1_dotted_boundaries.pmtiles data_raw/tl1_dotted_boundaries.geojson
# tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --output=tiles/tl2_oecd_interior_boundaries.pmtiles data_raw/tl2_oecd_interior_boundaries.geojson
# tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --output=tiles/tl3_oecd_interior_boundaries.pmtiles data_raw/tl3_oecd_interior_boundaries.geojson
# tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --output=tiles/cities_oecd_boundaries.pmtiles data_raw/cities_oecd_boundaries.geojson
# tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --output=tiles/fuas_oecd_boundaries.pmtiles data_raw/fuas_oecd_boundaries.geojson

# tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --output=tiles/tl1_labels.pmtiles data_raw/tl1_labels.geojson
# tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --output=tiles/tl2_labels.pmtiles data_raw/tl2_labels.geojson
# tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --output=tiles/tl3_labels.pmtiles data_raw/tl3_labels.geojson
# tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --output=tiles/fuas_labels.pmtiles data_raw/fuas_labels.geojson
# tippecanoe -z11 -Z4 --no-tile-compression --force --no-tile-size-limit --output=tiles/cities_labels.pmtiles data_raw/cities_labels.geojson

# tippecanoe -z12 --no-tile-compression --force --no-tile-size-limit --output=tiles/data_geo.pmtiles data_raw/data_geo.geojson

# tail -n +2 sau_level_names.csv | cut -d ',' -f 2 | while IFS= read -r value; do
#     # Replace 'echo' with the command you want to execute
#     echo "Processing value: $value"
#     tippecanoe -z12 --no-tile-compression --force --no-tile-size-limit --output=tiles/$value.pmtiles data_raw/sau_data/$value.geojson
# done
