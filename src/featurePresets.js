export const featurePresets = {
    // DEFAULT: Fast & Basic Analysis
    // Best for: Quick sentiment check, basic keyword extraction
    // Processing time: ~1-2 seconds
    // Use case: Simple text analysis, basic understanding
    default: {
        sentiment: {
            document: true  // Overall positive/negative/neutral sentiment
        },
        keywords: {
            emotion: true,    // Emotion scores for each keyword
            sentiment: true,  // Sentiment scores for each keyword
            limit: 10         // Top 10 most important words/phrases
        },
        entities: {
            emotion: true,    // Emotion scores for entities
            sentiment: true,  // Sentiment scores for entities
            limit: 10         // Top 10 named entities (people, places, companies)
        }
    },

    // ADVANCED: Comprehensive Analysis
    // Best for: Detailed content analysis, categorization
    // Processing time: ~3-5 seconds
    // Use case: Content analysis, research, detailed insights
    advanced: {
        sentiment: {
            document: true    // Overall document sentiment
        },
        keywords: {
            emotion: true,    // Emotion analysis for keywords
            sentiment: true,  // Sentiment analysis for keywords
            limit: 15         // Top 15 keywords with detailed analysis
        },
        entities: {
            emotion: true,    // Emotion analysis for entities
            sentiment: true,  // Sentiment analysis for entities
            limit: 15,        // Top 15 entities
            mentions: true    // Include all mentions of each entity
        },
        categories: {
            limit: 8,         // Top 8 content categories
            explanation: true // Include explanations for categorization
        },
        concepts: {
            limit: 8          // Top 8 high-level concepts discussed
        },
        emotion: {
            document: true    // Overall document emotions (joy, sadness, anger, fear, disgust)
        }
    },

    // FULL: Complete Linguistic Analysis
    // Best for: Research, academic analysis, complete understanding
    // Processing time: ~5-8 seconds
    // Use case: Academic research, detailed linguistic analysis, comprehensive insights
    full: {
        sentiment: {
            document: true    // Overall document sentiment
        },
        keywords: {
            emotion: true,    // Emotion analysis for keywords
            sentiment: true,  // Sentiment analysis for keywords
            limit: 20         // Top 20 keywords with full analysis
        },
        entities: {
            emotion: true,    // Emotion analysis for entities
            sentiment: true,  // Sentiment analysis for entities
            limit: 20,        // Top 20 entities
            mentions: true    // Include all mentions of each entity
        },
        categories: {
            limit: 10,        // Top 10 content categories
            explanation: true // Include explanations for categorization
        },
        concepts: {
            limit: 10         // Top 10 high-level concepts
        },
        semantic_roles: {
            limit: 10,        // Top 10 subject-verb-object relationships
            entities: true,   // Include entities in semantic roles
            keywords: true    // Include keywords in semantic roles
        },
        relations: {
            limit: 10         // Top 10 relationships between entities
        },
        emotion: {
            document: true    // Overall document emotions
        },
        syntax: {
            tokens: {
                lemma: true,           // Word root forms (e.g., "running" -> "run")
                part_of_speech: true   // Grammar parts (noun, verb, adjective, etc.)
            },
            sentences: true            // Sentence boundaries and structure
        }
    }
}; 