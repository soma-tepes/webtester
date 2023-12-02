import { useState } from 'react';

export function useCustomState() {
    const [menuData, setmenuData] = useState({ A: false, B: false });
    const [rangeTime, setRangeTime] = useState(null);
    const [isHovering, setIsHovering] = useState(null)

    // Puedes agregar aquí cualquier lógica adicional relacionada con estos estados

    return { menuData, setmenuData, rangeTime, setRangeTime ,isHovering, setIsHovering};
}
