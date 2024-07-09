const topBarCenterText = `KD4VRD - FM04va`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "BAND PLAN", "https://pwarc.com/documents/ARRLBandPlan.pdf","1","R",],
  ["2196F3", "CONTEST","https://www.contestcalendar.com/fivewkcal.html","1",],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  ["2196F3","LIGHTNING","https://map.blitzortung.org/#3.87/36.5/-89.41","1","R", ],
  ["2196F3", "POTA", "https://pota.app/#/", "1.2"],
  ["ff0000", "WATCHES & WARNINGS","https://www.weather.gov/","1","R" ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  ["2196F3","WEATHER","https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=36.5&lon=-89.41&zoom=5","1","R",],
  ["2196F3","WINDS","https://earth.nullschool.net/#current/wind/surface/level/orthographic=-89.41,36.5,3000","1","R",],];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
   ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
//  
   ["LOCAL RADAR","https://radar.weather.gov/ridge/standard/KRAX_loop.gif?refreshed=1720284520450",],
//
   [ "National Forecast/R","https://www.wpc.ncep.noaa.gov//noaa/noaa.gif", "http://origin.wpc.ncep.noaa.gov/basicwx/allfcsts_loop_ndfd.gif"],
//
   ["Watches and Warnings",    "https://forecast.weather.gov/wwamap/png/US.png" ],   
//
   [ "SAT CONUS w/ Lightning","https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/20241891456-20241891851-GOES16-GLM-CONUS-EXTENT3-625x375.gif"],
//
   [ "SAT SE w/ Lightning","https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/eus/EXTENT3/20241890956-20241891351-GOES16-GLM-EUS-EXTENT3-1000x1000.gif",]  ,
//  
   [ "SAT ATLANTIC ","https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/taw/GEOCOLOR/20241910740-20241911550-GOES16-ABI-TAW-GEOCOLOR-900x540.gif",  ],
// 
   [ "LIGHTNING LOCAL","https://www.blitzortung.org/en/Images/image_b_fl.png",  ],
//
  ["TEMP/R", "https://www.weather.gov/images/rah/statebrief/MaxT_SFC-Day1State.png","https://www.weather.gov/images/rah/statebrief/MinT_SFC-Day1State.png"], 
//
["Tropical/R","https://www.nhc.noaa.gov/storm_graphics/AT02/refresh/AL022024_5day_cone_no_line_and_wind+png/151128_5day_cone_no_line_and_wind.png","https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png" ],  
//
["1,2,3 DAY Outlook/R", "https://www.spc.noaa.gov/products/outlook/day1otlk_1630.gif","https://www.spc.noaa.gov/products/outlook/day2otlk_1730.gif","https://www.spc.noaa.gov/products/outlook/day3otlk_0730.gif" ],
//
  ["MEMORIAL BRIDGE",
  "https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=Wilimington_01.JPG"],];
// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,10400,10700,10900,10800];

