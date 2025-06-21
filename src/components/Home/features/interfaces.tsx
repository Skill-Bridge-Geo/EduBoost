export interface Cart{
    id: number;
    title: string;
    instructor: string;
    text: string;
    rate: number;
    reviews: string;
    oldPrice: string;
    newPrice: string;
    discount: number;
    imgURL: string;
    category: string;
    isTrending: boolean;
}

export interface Instructor{
    id: number;
    name: string;
    position: string;
    imgURL: string;
}

export interface Cart1{
    _id: string;
    title: string;
    instructor: string;
    description: string;
    rating: number;
    reviewCount: number;
    priceOriginal: number;
    priceDiscounted: number;
    discountPercent: number;
    imageUrl: string;
    __v: number;
    tag: string;
    studioName: string;
    createdAt: string;
    updatedAt: string;
}