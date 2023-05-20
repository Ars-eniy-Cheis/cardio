import React from 'react';
import '../../../styles/SidebarMenu.css'; // Подразумевается, что у вас есть соответствующий файл CSS

function SidebarMenu(props) {
    const { activeItemId, onItemSelect, items, onLogout } = props;

    return (
        <div className="sidebar-menu">
            <div className="menu-items">
                {items.map(item => (
                    <div 
                        key={item.itemId} 
                        className={`menu-item ${activeItemId === item.itemId ? 'active' : ''}`}
                        onClick={() => onItemSelect(item.itemId)}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
            <button className="logout-button" onClick={onLogout}>Выход</button>
        </div>
    );
}

export default SidebarMenu;