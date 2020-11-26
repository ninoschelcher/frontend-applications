# frontend-applications

This repository contains my process of creating a interactive visualization for The Volkskrant. Full documentation & process can be found in my wiki.

# The Assignment 📝
During this project we're working together with The Volkskrant, a newspaper based in the Netherlands. We have to come up with a concept related to: **The car in the city**.

Now the goal is to find interesting insights in these (37) datasets about parking and turn these into interesting research questions that we can answer with a datavisualization created with D3. The Volkskrant can decide if they think these visualization(s) are enough to write an article about.

![Volkskrant picture](https://github.com/ninoschelcher/functional-programming/blob/main/wiki_media/798px-Volkskrant.svg.png)

Volkskrant, 2020

# Concept 🌝

In my concept I'll take the user through a small data story where I'll be answering different questions about how many bikes could replace cars in the Amsterdam parking garages. This experience is through horizontal scrolling on the web page which makes it look like you're literally 'going' through the story and don't have to click on multiple buttons. 

![concept](https://github.com/ninoschelcher/frontend-applications/blob/main/wiki-media/conceptfoto.png)

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

Full documentation about my research questions and explanations are [in my wiki](https://github.com/ninoschelcher/frontend-data/wiki/Concept-Iteration)

# 'Favourite' Component

I have one component which I really liked, i've written a wiki page about it [here](https://github.com/ninoschelcher/frontend-applications/wiki/Making-a-cheeky-chart-without-D3). It's about a component that makes a chart without D3!


# Installation Guide 💻
There are a few steps required to do so you can get the program up and running on your own machine!

### Clone project
- Clone this repo to your local machine using `$ git clone https://github.com/ninoschelcher/frontend-applications.git`
- Go to the directory by typing `$ cd frontend-applications `

### Install packages
- Install all required packages by using `$ npm i`

### Run project
- type `$ npm run serve` to start the program

# Sources & Acknowledgements 🙋
- [Max Hauser](https://github.com/max-hauser) — For regular feedback throughout the project.
- [Volkskrant Image](https://nl.wikipedia.org/wiki/De_Volkskrant) — Wikipedia-bijdragers. (2020b, 7 oktober). De Volkskrant. Geraadpleegd op 30 oktober 2020, van https://nl.wikipedia.org/wiki/De_Volkskrant
