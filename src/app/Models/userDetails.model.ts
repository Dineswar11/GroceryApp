export class generalDetails {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public birthday: string
    ) { }
}

export class contactDetails {
    constructor(
        public twitter: string,
        public linkedin: string,
        public facebook: string,
        public instagram: string
    ) { }
}

export class shippingDetails {
    constructor(
        public name: string,
        public pincode: number,
        public line1: string,
        public line2: string,
        public landmark: string,
        public town: string,
        public state: string
    ) { }
}

export class paymentDetails {
    constructor(
        public cardnumber : string,
        public name : string,
        public expirydate : string,
        public cvc : string
    ) { }
}