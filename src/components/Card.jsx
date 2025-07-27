import { useState } from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
function Card({ header, content }) {
    const [showJSON, setShowJSON] = useState(false);
    
    return (
        <div className={`card bg-card-gray border border-card-border rounded-[25px] max-h-[600px] overflow-y-auto scrollbar-hide py-2 px-1`}>
            <div className="flex flex-row justify-between items-center">
                <h2 className="pl-2">{header.charAt(0).toUpperCase() + header.slice(1)}</h2>
                <button 
                    className="bg-button-gray border border-card-border rounded-full p-2 text-button-text hover:bg-gray-200 transition-colors" 
                    onClick={() => setShowJSON(!showJSON)}
                    aria-label={showJSON ? "Collapse" : "Expand"}
                >
                    <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${showJSON ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
                {header === 'sentiment' && showJSON && 
                <div>
                    <p className="px-2">Label: {content.document.label}</p>
                    <div className="flex flex-column justify-center items-center">
                        <Gauge value={(1+content.document.score)*50}
                            min={0}
                            max={100}
                            startAngle={-110}
                            endAngle={110}
                            width={250}
                            height={250}
                            sx={(theme) => ({
                                [`& .${gaugeClasses.valueText}`]: {
                                  fontSize: 30,
                                  fill: '#ffffff',
                                  color: '#ffffff',
                                },
                                [`& .${gaugeClasses.valueArc}`]: {
                                  fill: '#8b5cf6',
                                },
                                [`& .${gaugeClasses.referenceArc}`]: {
                                  fill: theme.palette.text.disabled,
                                },
                              })}
                        />      
                    </div>
                </div>
                }
            {showJSON && header !== 'sentiment' && <pre className="whitespace-pre-wrap p-2">{JSON.stringify(content, null, 2)}</pre>}
        </div>
    )
}

export default Card;


