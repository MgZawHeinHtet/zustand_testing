import { CartItem } from "./cartItem";


export type Cart= {
    cart : CartItem[];
    addItems : (product : CartItem)=>void;
    removeItems : (id : number)=>void
} 