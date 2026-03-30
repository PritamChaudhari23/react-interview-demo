import React, { useState } from 'react';
import './DragAndDrop.css';
const DragAndDrop = () => {
    const [draggedItem, setDraggedItem] = useState(null);
    const [destinationItems, setDestinationItems] = useState([]);
    const onDragStart = (e, item) => {
        setDraggedItem(item);
    };
    const onDrop = (e) => {
        e.preventDefault();
        if (draggedItem) {
            setDestinationItems([...destinationItems, draggedItem]);
            setDraggedItem(null); // Clear the dragged item
        }
    };
    const onDragOver = (e) => {
        e.preventDefault(); // Necessary to allow a drop
    };
    return (
        <div className="drag-and-drop-container">
            <div className="source-container">
                <div
                    className="draggable-item"
                    draggable
                    onDragStart={(e) => onDragStart(e, 'Item 1')}
                >
                    Item 1
                </div>
                <div
                    className="draggable-item"
                    draggable
                    onDragStart={(e) => onDragStart(e, 'Item 2')}
                >
                    Item 2
                </div>
                <div
                    className="draggable-item"
                    draggable
                    onDragStart={(e) => onDragStart(e, 'Item 3')}
                >
                    Item 3
                </div>
            </div>
            <div
                className="destination-container"
                onDrop={onDrop}
                onDragOver={onDragOver}
            >
                {destinationItems.map((item, index) => (
                    <div key={index} className="dropped-item">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default DragAndDrop;
