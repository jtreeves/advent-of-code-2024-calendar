# Advent of Code: 2023 - Calendar

_A website to showcase my solutions to the annual challenge problems_

This repo contains a **React** app for a UI for an advent-style calendar. It uses the **Vite** framework. The code is written in **TypeScript**. It pairs with my [solutions repo](https://github.com/jtreeves/advent_of_code_2023_solutions).

## Setup

### Prerequisites

-   Node 19 or higher (v19.2.0 ideally): `node -v`

### Installation

1.  Clone this repository: `git clone https://github.com/jtreeves/advent-of-code-2023-calendar.git`
2.  Install requirements: `npm i`

## Running the App

1. Start the app: `npm run dev`
2. Interact with the app in the browser (previous command should automatically open it): `http://localhost:5173`

## Deployed Site

View a live version of the calendar, deployed via **Netlify**: [https://advent-of-code-2023-jtreeves.netlify.app](https://advent-of-code-2023-jtreeves.netlify.app)

## Code Analysis

Unlike most coding challenge approaches, this repo is written more like a library, with type annotations for documentation, and it uses a more OOP approach overall.

### General Patterns

-   camelCase used for file names unless the file is for a component, in which case PascalCase is used
-   strong type annotation is used throughout

### Key Folders and Files

-   files at the root
    -   `package.json`: establishes key dependencies
    -   `index.html`: entry point to app
-   `src` folder
    -   `main.tsx`: bootstraps the app with React
    -   `App.tsx`: sets up the app with component hierarchy
    -   `components` folder: contains files for modular React elements
    -   `utilities` folder: contains helper functions to simplify other tasks
    -   `styles` folder: contains CSS files for app
    -   `data` folder: contains static content for use throughout the site
