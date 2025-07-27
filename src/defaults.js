export const defaults = {
    // Default text to analyze
    defaultText: "Last week, Apple announced its new iPhone during a glitzy event in San Francisco. While many fans were excited about the improved camera and battery life, some critics felt the changes were too minor to justify the price. Meanwhile, Samsung is gearing up to launch its own flagship device, promising groundbreaking features and competitive pricing. The tech world is buzzing, and investors are watching both companies closely.",

    // Default response from IBM API
    defaultResponse: {
        "usage": {
            "text_units": 1,
            "text_characters": 426,
            "features": 3
        },
        "sentiment": {
            "document": {
                "score": 0.840172,
                "label": "positive"
            }
        },
        "language": "en",
        "keywords": [
            {
                "text": "Last week",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.827747,
                "emotion": {
                    "sadness": 0.072654,
                    "joy": 0.800926,
                    "fear": 0.02566,
                    "disgust": 0.028646,
                    "anger": 0.012629
                },
                "count": 1
            },
            {
                "text": "battery life",
                "sentiment": {
                    "score": 0.845702,
                    "label": "positive"
                },
                "relevance": 0.746086,
                "emotion": {
                    "sadness": 0.086205,
                    "joy": 0.368977,
                    "fear": 0.017633,
                    "disgust": 0.092904,
                    "anger": 0.015555
                },
                "count": 1
            },
            {
                "text": "tech world",
                "sentiment": {
                    "score": 0.778003,
                    "label": "positive"
                },
                "relevance": 0.700537,
                "emotion": {
                    "sadness": 0.241523,
                    "joy": 0.686821,
                    "fear": 0.080926,
                    "disgust": 0.015984,
                    "anger": 0.02062
                },
                "count": 1
            },
            {
                "text": "own flagship device",
                "sentiment": {
                    "score": 0.890997,
                    "label": "positive"
                },
                "relevance": 0.650135,
                "emotion": {
                    "sadness": 0.173689,
                    "joy": 0.506591,
                    "fear": 0.049911,
                    "disgust": 0.008473,
                    "anger": 0.014931
                },
                "count": 1
            },
            {
                "text": "improved camera",
                "sentiment": {
                    "score": 0.845702,
                    "label": "positive"
                },
                "relevance": 0.649582,
                "emotion": {
                    "sadness": 0.086205,
                    "joy": 0.368977,
                    "fear": 0.017633,
                    "disgust": 0.092904,
                    "anger": 0.015555
                },
                "count": 1
            },
            {
                "text": "San Francisco",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.605651,
                "emotion": {
                    "sadness": 0.072654,
                    "joy": 0.800926,
                    "fear": 0.02566,
                    "disgust": 0.028646,
                    "anger": 0.012629
                },
                "count": 1
            },
            {
                "text": "Samsung",
                "sentiment": {
                    "score": 0.890997,
                    "label": "positive"
                },
                "relevance": 0.601022,
                "emotion": {
                    "sadness": 0.173689,
                    "joy": 0.506591,
                    "fear": 0.049911,
                    "disgust": 0.008473,
                    "anger": 0.014931
                },
                "count": 1
            },
            {
                "text": "fans",
                "sentiment": {
                    "score": 0.845702,
                    "label": "positive"
                },
                "relevance": 0.566005,
                "emotion": {
                    "sadness": 0.086205,
                    "joy": 0.368977,
                    "fear": 0.017633,
                    "disgust": 0.092904,
                    "anger": 0.015555
                },
                "count": 1
            },
            {
                "text": "new iPhone",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.559834,
                "emotion": {
                    "sadness": 0.072654,
                    "joy": 0.800926,
                    "fear": 0.02566,
                    "disgust": 0.028646,
                    "anger": 0.012629
                },
                "count": 1
            },
            {
                "text": "Apple",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.54227,
                "emotion": {
                    "sadness": 0.072654,
                    "joy": 0.800926,
                    "fear": 0.02566,
                    "disgust": 0.028646,
                    "anger": 0.012629
                },
                "count": 1
            }
        ],
        "entities": [
            {
                "type": "Date",
                "text": "Last week",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.954265,
                "emotion": {
                    "sadness": 0.072654,
                    "joy": 0.800926,
                    "fear": 0.02566,
                    "disgust": 0.028646,
                    "anger": 0.012629
                },
                "count": 1,
                "confidence": 0.640002
            },
            {
                "type": "Organization",
                "text": "Apple",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.888344,
                "emotion": {
                    "sadness": 0.072654,
                    "joy": 0.800926,
                    "fear": 0.02566,
                    "disgust": 0.028646,
                    "anger": 0.012629
                },
                "count": 1,
                "confidence": 0.941689
            },
            {
                "type": "Location",
                "text": "San Francisco",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.857627,
                "emotion": {
                    "sadness": 0.072654,
                    "joy": 0.800926,
                    "fear": 0.02566,
                    "disgust": 0.028646,
                    "anger": 0.012629
                },
                "count": 1,
                "confidence": 0.984441
            },
            {
                "type": "Organization",
                "text": "Samsung",
                "sentiment": {
                    "score": 0.890997,
                    "label": "positive"
                },
                "relevance": 0.567501,
                "emotion": {
                    "sadness": 0.173688,
                    "joy": 0.506591,
                    "fear": 0.049911,
                    "disgust": 0.008473,
                    "anger": 0.014931
                },
                "disambiguation": {
                    "name": "Samsung",
                    "dbpedia_resource": "http://dbpedia.org/resource/Samsung"
                },
                "count": 1,
                "confidence": 0.979708
            },
            {
                "type": "JobTitle",
                "text": "investors",
                "sentiment": {
                    "score": 0.778003,
                    "label": "positive"
                },
                "relevance": 0.13073,
                "emotion": {
                    "sadness": 0.241523,
                    "joy": 0.686821,
                    "fear": 0.080926,
                    "disgust": 0.015984,
                    "anger": 0.02062
                },
                "count": 1,
                "confidence": 0.791472
            }
        ]
    }
}; 