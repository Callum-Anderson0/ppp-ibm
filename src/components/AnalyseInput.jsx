import { useState, useEffect, useRef } from 'react';
import { featurePresets } from '../featurePresets.js';
import { defaults } from '../defaults.js';

function AnalyseInput({ onResult, onError, onInputText }) {
    const [text, setText] = useState(defaults.defaultText);
    const [selectedLevel, setSelectedLevel] = useState('default');
    const [loading, setLoading] = useState(true);
    const textareaRef = useRef(null);

    // Function to handle textarea auto-resize
    const handleTextChange = (e) => {
        const value = e.target.value;
        setText(value);
        
        // Auto-resize the textarea
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px'; // Max height of 200px
    };

    // Set initial height based on placeholder text
    useEffect(() => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.style.height = 'auto';
            textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
        }
    }, []);

    function handleClick() {
        onInputText(text); // Pass the input text up
        callIBM(text, featurePresets[selectedLevel]);
    }

    async function callIBM(inputText, featuresToUse) {
        setLoading(true);
        onResult(null);
        try {
            const response = await fetch("http://localhost:5000/analyse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    text: inputText,
                    features: featuresToUse
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                onError(errorData.error || 'Server error occurred');
                return;
            }

            const data = await response.json();
            onResult(data);
            setLoading(false);
        } catch (error) {
            onError('Network error: ' + error.message);
            setLoading(false);
        }
    }

    return (
        <div className="fixed bottom-4 left-0 right-0 bg-card-gray border border-card-border p-2 px-2 mt-2 mx-auto w-2/3 rounded-[25px] flex flex-col gap-2">
            <textarea 
                ref={textareaRef}
                className='bg-card-gray resize-none overflow-y-auto  min-h-[40px] max-h-[200px] border-none outline-none pl-2 pr-[2px] scrollbar-hide'
                value={text} 
                onChange={handleTextChange} 
                placeholder="Enter text to analyse..."
                rows="1"
            />
            <div className='flex flex-row justify-between'>
                <select 
                    value={selectedLevel} 
                    className='bg-card-gray ml-[4px] rounded-[25px] border-card-border'
                    onChange={(e) => setSelectedLevel(e.target.value)}
                >
                    <option value="default" > Default</option>
                    <option value="advanced"> Advanced</option>
                    <option value="full"> Full</option>
                </select>
                
                <button onClick={handleClick} className='bg-button-gray border border-card-border rounded-full p-2 px-4 text-button-text'>
                    {!loading ? 'Analyse' : 'Analyzing...'}
                </button>
            </div>
        </div>
    )
}

export default AnalyseInput; 