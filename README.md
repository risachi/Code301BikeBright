[![Stories in Ready](https://badge.waffle.io/risachi/Code301BikeBright.png?label=ready&title=Ready)](https://waffle.io/risachi/Code301BikeBright)


[![Throughput Graph](https://graphs.waffle.io/risachi/Code301BikeBright/throughput.svg)](https://waffle.io/risachi/Code301BikeBright/metrics)


Data Maintenance and Support:
  1.  The application depends on data contained in the Bicycle_Parking_pdx.geojson to mark bike parking locations on a map.  This data should be updated quarterly, on the first working day of the first month of the calendar quarter (Jan, April, July, Oct).  For detailed instructions on how to download, convert and store this data, reference the following document in the docs folder: Bike Parking Location Data Configuration.docx
  2.  The application depends on data contained in the heatMapData.js file.  This is SIMULATED data and does not have to be updated.  The applicaiton roadmap calls for the  replacement of this data with an api supported real time data source or actual data file that we will maintain on the server.
  3.  Originally, the application did was designed to display zipcode boundaries.  WIth the implementation of a heat map, we will no longer display zip code data.  In the future, there may be a need for this capability, so the instructions used for this data will remain.  Reference the following file in the docs folder for details on how to access, download, convert, and store the zip code data: ZipCodeDataConfiguration.docx.
  4.  Originally, the application was showing crime data by zip code.  The stolenBike.json file contained the crime related data.  We are no longer using this data, and are instead using a heat map solution.We will leave the instructions for this data in the docs folder, just in case it is needed in the future.  The doc is titled: CrimeDataConfigurationcopy.docx    
