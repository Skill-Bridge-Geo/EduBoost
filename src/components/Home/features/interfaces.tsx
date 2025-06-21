// export interface CartOld{
//     id: number;
//     title: string;
//     instructor: string;
//     text: string;
//     rate: number;
//     reviews: string;
//     oldPrice: string;
//     newPrice: string;
//     discount: number;
//     imgURL: string;
//     category: string;
//     isTrending: boolean;
// }

// export interface InstructorOld{
//     id: number;
//     name: string;
//     position: string;
//     imgURL: string;
// }

export interface Cart{
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
    category: string;
    isTrending: boolean;
}

export interface Instructor{
    _id: string;
    name: string;
    position: string;
    imageUrl: string;
    _v: number;
}