export interface Image {
  id: number,
  isThumbnail: boolean,
  url: string
}

export interface CartProduct {
  id: number,
  pieces: number
  // name: string,
  // description: string,
  // price: number,
  // discount: number,
  // images: Image[]
}
export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  discount: number,
  images: Image[]
}