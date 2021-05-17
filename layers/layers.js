var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_500m_Buffers_1 = new ol.format.GeoJSON();
var features_500m_Buffers_1 = format_500m_Buffers_1.readFeatures(json_500m_Buffers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_500m_Buffers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_500m_Buffers_1.addFeatures(features_500m_Buffers_1);
var lyr_500m_Buffers_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_500m_Buffers_1, 
                style: style_500m_Buffers_1,
                interactive: true,
                title: '<img src="styles/legend/500m_Buffers_1.png" /> 500m_Buffers'
            });
var format_KMC_Boundarry_2 = new ol.format.GeoJSON();
var features_KMC_Boundarry_2 = format_KMC_Boundarry_2.readFeatures(json_KMC_Boundarry_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KMC_Boundarry_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KMC_Boundarry_2.addFeatures(features_KMC_Boundarry_2);
var lyr_KMC_Boundarry_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KMC_Boundarry_2, 
                style: style_KMC_Boundarry_2,
                interactive: false,
                title: '<img src="styles/legend/KMC_Boundarry_2.png" /> KMC_Boundarry'
            });
var format_OS_Locations_3 = new ol.format.GeoJSON();
var features_OS_Locations_3 = format_OS_Locations_3.readFeatures(json_OS_Locations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OS_Locations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OS_Locations_3.addFeatures(features_OS_Locations_3);
var lyr_OS_Locations_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OS_Locations_3, 
                style: style_OS_Locations_3,
                interactive: true,
                title: '<img src="styles/legend/OS_Locations_3.png" /> OS_Locations'
            });

lyr_OSMStandard_0.setVisible(true);lyr_500m_Buffers_1.setVisible(true);lyr_KMC_Boundarry_2.setVisible(true);lyr_OS_Locations_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_500m_Buffers_1,lyr_KMC_Boundarry_2,lyr_OS_Locations_3];
lyr_500m_Buffers_1.set('fieldAliases', {'Area_1': 'Area_1', 'Landuse_Ty': 'Landuse_Ty', 'OPENSPACES': 'OPENSPACES', 'ORIG_FID': 'ORIG_FID', 'BUFF_DIST': 'BUFF_DIST', });
lyr_KMC_Boundarry_2.set('fieldAliases', {'Id': 'Id', 'Area': 'Area', });
lyr_OS_Locations_3.set('fieldAliases', {'Area_1': 'Area_1', 'Landuse_Ty': 'Landuse_Ty', 'OPENSPACES': 'OPENSPACES', 'ORIG_FID': 'ORIG_FID', });
lyr_500m_Buffers_1.set('fieldImages', {'Area_1': 'TextEdit', 'Landuse_Ty': 'TextEdit', 'OPENSPACES': 'TextEdit', 'ORIG_FID': 'Range', 'BUFF_DIST': 'TextEdit', });
lyr_KMC_Boundarry_2.set('fieldImages', {'Id': 'Range', 'Area': 'TextEdit', });
lyr_OS_Locations_3.set('fieldImages', {'Area_1': 'TextEdit', 'Landuse_Ty': 'TextEdit', 'OPENSPACES': 'TextEdit', 'ORIG_FID': 'Range', });
lyr_500m_Buffers_1.set('fieldLabels', {'Area_1': 'no label', 'Landuse_Ty': 'no label', 'OPENSPACES': 'header label', 'ORIG_FID': 'no label', 'BUFF_DIST': 'no label', });
lyr_KMC_Boundarry_2.set('fieldLabels', {'Id': 'no label', 'Area': 'no label', });
lyr_OS_Locations_3.set('fieldLabels', {'Area_1': 'no label', 'Landuse_Ty': 'no label', 'OPENSPACES': 'inline label', 'ORIG_FID': 'no label', });
lyr_OS_Locations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});