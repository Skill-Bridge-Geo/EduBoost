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