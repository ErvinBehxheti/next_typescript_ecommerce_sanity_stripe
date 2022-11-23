export type TProductDetails = {
    product: {
        details: string;
        image: [
            {
                asset: {
                    _ref: string;
                    _type: string;
                }
                _key: string;
                _type: string;
            }
        ]
        name: string;
        price: number;
        slug: {
            _type: string;
            current: string;
        }
        _createdAt: string;
        _id: string;
        _rev: string;
        _type: string;
        _updatedAt: string;
        quantity: number;
    }
    products: [
        {
            details: string;
            image: [
                {
                    asset: {
                        _ref: string;
                        _type: string;
                    }
                    _key: string;
                    _type: string;
                }
            ]
            name: string;
            price: number;
            slug: {
                _type: string;
                current: string;
            }
            _createdAt: string;
            _id: string;
            _rev: string;
            _type: string;
            _updatedAt: string;
        }
    ]
}

export type TItem = { 
    image: [
        {
            asset: { 
                _ref: string; 
                _type: string; 
            }; 
            _key: string; 
            _type: string; 
        }
    ]; 
    name: string;
    slug: { 
        current: string; 
        _type: string; 
    }; 
    price: number; 
    _id: string 
}
