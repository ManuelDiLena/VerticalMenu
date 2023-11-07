import { useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "../types/types";
import { classNames } from '../util/classes';
import { VscMenu } from 'react-icons/vsc';

import SideBarMenuItemView from "./SideBarMenuItemView";
import SideBarMenuCardView from "./SideBarMenuCardView";

interface SideBarMenuProps {
    items: SideBarMenuItem[];
    card: SideBarMenuCard;
}

export function SideBarMenu({ items, card}: SideBarMenuProps) {

    const [isOpen, setIsOpen] = useState<boolean>(true);

    // Function to open or close the menu
    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={classNames('sideBarMenu', isOpen ? 'expanded' : 'collapsed')}>
            <div className='menuBtn'>
                <button className='hamburgerBtn' onClick={handleClick}>
                    <VscMenu />
                </button>
            </div>
            <SideBarMenuCardView card={card} isOpen={isOpen} />
            {
                items.map(item => (
                    <SideBarMenuItemView 
                        key={item.id} 
                        item={item}
                        isOpen={isOpen}
                    />
                ))
            }
        </div>
    );
}