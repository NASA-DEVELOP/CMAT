===============
=====================
 Coal Mining Assessment Tool (CMAT)

====================================



Date Created: August 8, 2019



The Coal Mining Assessment Tool is designed to assist users in analyzing land disturbance and reclamation around coal mines in the Powder River Basin from 1985 to 2018.
It uses a graphical user interface (GUI) so that users can intuitively add, process, view, and export data. The interface contains five main parts:

	1. a panel to set analysis parameters (time range and area of analysis)
	2. a panel to select analysis types and add images to the map
	3. a panel to export images to Google Drive
	4. a point change inspector that generates a graph showing how an analysis type has changed over time for a point selected on the map
	5. a panel to add ancillary datasets to the map

Based on the user selected time range and area of analysis, the tool accesses and filters Landsat collections to create cloud free composites
from imagery taken between June and August of each year. NDVI, NDWI, Tasseled Cap Greenness, Tasseled Cap Angle, and LandTrendr disturbance 
and reclamation are calculated for each composite. Each panel operates independently of the other panels, but all panels use the composite imagery.



===================
 Required Packages

===================


CMAT derives all analyses using Google Earth Engine's free and publicly accessible data catalog.
Users do not need to load in their own data, but do need to request an account with Google Earth Engine at code.earthengine.google.com .
Accounts are free and typically approved within a few days. 

CMAT uses the LandTrendr algorithm developed by Oregon State University, which is a free toolkit for Google Earth Engine.
LandTrendr is integrated directly into CMAT but will only run if users first accept the LandTrendr repository in Google Earth Engine here:
https://code.earthengine.google.com/?accept_repo=users/emaprlab/public



============
 Parameters

============


No steps must be taken to modify the code to enable it to run - users paste the provided code directly into the Google Earth Engine Code Editor and
select "Run." This will load the interface with which users directly interact. The interface includes brief directions to guide users through each analysis option. 



=========

 Contact

=========


Names: Hayley Pippin | Gina Cova | Claudia Herbert | Andrew Bake
E-mail(s): habpippin@berkeley.edu | grosacova@gmail.com | claudiaherbert@berkeley.edu | abake@scu.edu
