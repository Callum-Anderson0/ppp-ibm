import Card from './Card';

function CardHolder({items}) {
    const keys = Object.keys(items);
    
    // Create 3 columns
    const column1 = [];
    const column2 = [];
    const column3 = [];
    
    // Distribute items across columns
    keys.forEach((key, index) => {
        const card = <Card key={index} header={key} content={items[key]} />;
        
        if (index % 3 === 0) {
            column1.push(card);
        } else if (index % 3 === 1) {
            column2.push(card);
        } else {
            column3.push(card);
        }
    });
    
    return (
        <div className="flex gap-2 w-2/3 mx-auto">
            <div className="flex-1 flex flex-col gap-2">
                {column1}
            </div>
            <div className="flex-1 flex flex-col gap-2">
                {column2}
            </div>
            <div className="flex-1 flex flex-col gap-2">
                {column3}
            </div>
        </div>
    );
}

export default CardHolder;