export type THome = {
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
                },
            ];
            name: string;
            price: number;
            slug: {
                current: string;
                _type: string;
            };
            _createdAt: string;
            _id: string;
            _rev: string;
            _type: string;
            _updatedAt: string;
        }
    ];
    bannerData: [
        {
            buttonText: string;
            desc: string;
            discount: string;
            image: {
                asset: {
                    _ref: string;
                    _type: string;
                }
                _key: string;
                _type: string;
            };
            largeText1: string;
            largeText2: string;
            midText: string;
            product: string;
            saleTime: string;
            smallText: string;
            _createdAt: string;
            _id: string;
            _rev: string;
            _type: string;
            _updatedAt: string
        }
    ]
}

export type TProduct = {
    details: string;
    image: [
        {
            asset: {
                _ref: string;
                _type: string;
            }
            _key: string;
            _type: string;
        },
    ];
    name: string;
    price: number;
    slug: {
        current: string;
        _type: string;
    };
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}