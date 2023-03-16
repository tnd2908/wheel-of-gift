import { DEFAULT_MESSAGE } from "../constant/message";

export const unluckyDraw = {
    option: DEFAULT_MESSAGE,
    quantity: 999,
    canEdit: false,
    canDelete: false,
}

export const data = [
    unluckyDraw,
    { 
        option: 'Nón', 
        quantity: 5,
        canEdit: true,
        canDelete: true,
    },
    { 
        option: 'Bút', 
        quantity: 2,
        canEdit: true,
        canDelete: true,
    },
    { 
        option: 'Áo mưa', 
        quantity: 7,
        canEdit: true,
        canDelete: true,
    },
    { 
        option: 'Ly nước', 
        quantity: 3,
        canEdit: true,
        canDelete: true,
    },
    { 
        option: 'iPhone 14', 
        quantity: 2,
        canEdit: true,
        canDelete: true,
    },
    {   
        option: 'Xe máy', 
        quantity: 1,
        canEdit: true,
        canDelete: true,
    },
];

export const ratioOptions = [
    { label: '0%', value: 0, key: 'ratio1' },
    { label: '10%', value: 10, key: 'ratio2' },
    { label: '20%', value: 20, key: 'ratio3' },
    { label: '30%', value: 30, key: 'ratio4' },
    { label: '40%', value: 40, key: 'ratio5' },
    { label: '50%', value: 50, key: 'ratio6' },
    { label: '60%', value: 60, key: 'ratio7' },
    { label: '70%', value: 70, key: 'ratio8' },
    { label: '80%', value: 80, key: 'ratio9' },
    { label: '90%', value: 90, key: 'ratio10' },
    { label: '100%', value: 100, key: 'ratio' },
];