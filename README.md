# VideoSearch

This repository contains code a video description generation and video semantic search project.

# Structure

video-semantic-search/
│── apps/
│ ├── frontend/ # Next.js frontend
│ │ ├── package.json
│ │ ├── pages/
│ │ ├── components/ui/
│ │ ├── public/
│ │ ├── styles/
│ │
│ ├── backend/ # FastAPI backend
│ │ ├── package.json # NPM scripts for managing Python backend
│ │ ├── requirements.txt # Python dependencies
│ │ ├── src/
│ │ │ ├── main.py # FastAPI entry point
│
│── package.json # Monorepo root with workspaces
│── package-lock.json
│── node_modules/
│── README.md
