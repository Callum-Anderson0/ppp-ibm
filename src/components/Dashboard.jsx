import { defaults } from '../defaults.js';
import CardHolder from './CardHolder';

function Dashboard({ result, error, inputText }) {
    // Use default response if no result
    const data = result || defaults.defaultResponse;
    const filteredData = data;
    const htmlText = handleHighlight(inputText, data.keywords);

    console.log(filteredData);
    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    function handleHighlight(text,keywords){
        keywords.forEach(keyword => {
            text = text.replaceAll(keyword.text, `<span style="color: #8b5cf6">${keyword.text}</span>`);
        });
        return text;
    }

    return (
        <div className="dashboard">
            <div className="bg-card-gray border border-card-border rounded-[25px] mx-auto w-2/3 pl-4 pr-2 py-[10px] my-2">
                {result !== null && (<p dangerouslySetInnerHTML={{ __html: htmlText }}></p>)}
                {result === null && (<p>Loading...</p>)}
            </div>          
            <CardHolder items={filteredData} />
        </div>
    );
}

export default Dashboard;