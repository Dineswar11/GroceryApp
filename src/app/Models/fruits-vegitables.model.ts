export interface fruitsvegitablesArr{
    name:string
    sku:number
    active:boolean
    quantity:number
    url:string,
    url1:string,
    bundle:boolean
    sale:boolean
    price:number
    sale_price:number
    variable:boolean
    description:string
    meta_title:number
    meta_description:number
    slug:string
    benifits:string,
    storage_uses:string
    type:string
    stock_tracking:boolean
    currency:string
    delivery:string
    tax_class:string
    date_created:string
    stock_status:number
    date_updated:string
    id:string
}

export class FruitsClass {
    constructor(
        public name: string,
        public sku: number,
        public active: boolean,
        public quantity: number,
        public url: string,
        public url1: string,
        public bundle: boolean,
        public sale: boolean,
        public price: number,
        public sale_price: number,
        public variable: boolean,
        public description: string,
        public meta_title: number,
        public meta_description: number,
        public slug: string,
        public benifits: string,
        public storage_uses:string,
        public type: string,
        public stock_tracking: boolean,
        public currency: string,
        public delivery: string,
        public tax_class: string,
        public date_created: string,
        public stock_status: number,
        public date_updated: string,
        public id: string,
    ) { }
}