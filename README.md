# IBM Watson Text Analysis Application

## Overview
A full-stack React application that leverages IBM Watson's Natural Language Understanding API to perform comprehensive text analysis. The application provides sentiment analysis, keyword extraction, entity recognition, and interactive data visualization.

## Features
- **Text Analysis**: Analyze text sentiment, extract keywords, and identify entities
- **Interactive Data Visualization**: Custom gauge charts for sentiment scores using MUI X Charts
- **Multiple Analysis Levels**: Three tiers of analysis (Default, Advanced, Full) with varying detail levels
- **Responsive Design**: Modern UI built with Tailwind CSS

## Tech Stack
### Frontend
- **React 19.1.0** - Modern React with hooks and functional components
- **Tailwind CSS 3.4.17** - Utility-first CSS framework with custom design system
- **MUI X Charts 8.9.0** - Data visualization components
- **Concurrently 9.2.0** - Development workflow management

### Backend
- **Node.js** - JavaScript runtime
- **Express 5.1.0** - Web application framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### APIs & Services
- **IBM Watson Natural Language Understanding** - AI-powered text analysis
- **Custom REST API** - Backend proxy for secure API communication

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- IBM Watson API key

### Installation Steps
```bash
# Clone the repository
git clone <repository-url>
cd ppp-ibm

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Usage

### Basic Analysis
1. Enter or paste text in the textarea
2. Select analysis level (Default/Advanced/Full)
3. Click "Analyse" button
4. View sentiment score, highlighted keywords, and extracted entities

### Analysis Levels
- **Default**: Basic sentiment and keyword extraction (~1-2s)
- **Advanced**: Adds categories, concepts, and emotions (~3-5s)
- **Full**: Complete linguistic analysis with syntax parsing (~5-8s)

## Project Structure
```
src/
├── components/
│   ├── AnalyseInput.jsx    # Text input and analysis controls
│   ├── Dashboard.jsx       # Main results display
│   ├── CardHolder.jsx      # Grid layout for analysis cards
│   ├── Card.jsx           # Individual analysis result cards
├── defaults.js            # Default text and API response data
├── featurePresets.js      # IBM Watson API configuration presets
└── App.js                # Main application component

server/
└── server.js             # Express server for API proxy
```

## API Integration

### IBM Watson Features Used
- **Sentiment Analysis**: Document-level and entity-level sentiment scoring
- **Keyword Extraction**: Important terms with relevance and emotion scores
- **Entity Recognition**: Named entities (people, places, organizations)
- **Categories**: Content categorization with confidence scores
- **Concepts**: High-level concepts and themes
- **Emotion Analysis**: Joy, sadness, anger, fear, disgust detection

### Custom API Endpoints
- `POST /analyse`: Main analysis endpoint
  - Accepts: `{ text: string, features: object }`
  - Returns: IBM Watson analysis results
### Technical Solutions
- **Security**: Server-side API proxy prevents key exposure
- **Performance**: Efficient text processing and conditional rendering
- **UX**: Loading states, error messages, and responsive design
- **Maintainability**: Clean code structure and documentation

