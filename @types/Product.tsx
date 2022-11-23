export type TProduct = {
    product: {
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
        slug: {
            current: string;
            _type: string;
        };
        price: number;
    }
}