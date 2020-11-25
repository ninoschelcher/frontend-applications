# frontend-applications

This repository contains my process of creating a interactive visualization for The Volkskrant. Full documentation & process can be found in my wiki.

# The Assignment 📝
During this project we're working together with The Volkskrant, a newspaper based in the Netherlands. We have to come up with a concept related to: **The car in the city**.

Now the goal is to find interesting insights in these (37) datasets about parking and turn these into interesting research questions that we can answer with a datavisualization created with D3. The Volkskrant can decide if they think these visualization(s) are enough to write an article about.

![Volkskrant picture](https://github.com/ninoschelcher/functional-programming/blob/main/wiki_media/798px-Volkskrant.svg.png)

Volkskrant, 2020

# Research Question(s) 🔍

Bikes in Amsterdam came up in my head during my brainstorm, there are a lot of them in Amsterdam. Why wouldn't it be interesting to know how many bikes could fit into the space that parking garages have right now? So I came up with the following research question.

## How many bikes could fit in all parking spots in Amsterdam parking garages? 

I've also written down some sub questions that are required to answer this question

###  1. Where are the parking garages in Amsterdam?
- **Datasets:**
   - [Specificatie Parkeergebied](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s/) — Information about parking garages with specifications like Capacity, Charging Points and Disabled Access.
   - [GEO Parkeer Garages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34/data) — Geographical data about the specific parking garages.

- **Variables:**
   - **AreaDesc** — Description/name of parking garage (text)
   - **Location** — Data that consists of Latitude and Longitude (number)
   - **AreaId** — Number to identify specific garage, can be combined to find geo location of garage with charging point (number/text)

### 2. What is the capacity of each parking garage?
- **Datasets:**
  - [Specificatie Parkeergebied](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s/) — Information about parking garages with specifications like Capacity, Charging Points and Disabled Access.
  - [GEO Parkeer Garages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34/data) — Geographical data about the specific parking garages.

- **Variables:**
  - **Capacity** — Amount of charging points in a garage (number)
  - **Location** — Data that consists of Latitude and Longitude (number)
  - **AreaId** — Number to identify specific garage, can be combined to find geo location of garage with charging point (number/text)

I'm gonna combine these 2 datasets, there will probably be some entries that dont exist in both datasets which means that they won't be taken into the final visualization. This process is better described [on this page](https://github.com/ninoschelcher/frontend-data/wiki/RDW-data)

### Questions I need to answer without the datasets
- **How big is the average car parking spot?** — Required to calculate/visualize how many bikes could fit in a parking spot.
- **How long and wide is the average bicycle?** — Required to calculate how bikes could fit in a parking spot, I will probably take a regular city bike for this.

### External Datasets?
- [Amsterdam parking spaces](https://map.data.amsterdam.nl/maps/parkeervakken?REQUEST=Getfeature&VERSION=1.1.0&SERVICE=wfs&TYPENAME=alle_parkeervakken&outputformat=geojson) — This might come in handy if I wanted to use the parking spaces on the street instead of a parking garage because its more relevant to the cyclists who want to park their bike close to home.

Full documentation about my research questions and explanations are [in my wiki](https://github.com/ninoschelcher/frontend-data/wiki/Concept-Iteration)

# Concept 🌝


# Sources & Acknowledgements 🙋
- [Max Hauser](https://github.com/max-hauser) — For regular feedback throughout the project.
- [Volkskrant Image](https://nl.wikipedia.org/wiki/De_Volkskrant) — Wikipedia-bijdragers. (2020b, 7 oktober). De Volkskrant. Geraadpleegd op 30 oktober 2020, van https://nl.wikipedia.org/wiki/De_Volkskrant
