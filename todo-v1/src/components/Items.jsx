import React from 'react'
import TodoItems from './TodoItems';

const Items = ({ Items, onDeleteClick }) => {
    return (
        <div>
            {Items.map((item) => (

                <TodoItems
                key = {item.ItemsName}
                    Name={item.ItemsName}
                    Date={item.Date}
                    onDeleteClick={onDeleteClick}>
                </TodoItems>
            ))}

        </div>
    )
}

export default Items;
