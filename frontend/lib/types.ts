export interface PropertyDataType {
  bed: number,
  bathroom: number,
  area: {
    width: number,
    breadth: number,
    units: string,
  }
}
export interface PropertyType {
  img: string,
  name: string,
  address: string,
  data: PropertyDataType
}

/*
"img": "https://imageproperty.com.au/app/uploads/2020/08/buying-two-1024x683.jpg",
    "name": "Bankaidgdfgdfgdf",
    "address": "Jaipur",
    "data": {
        "bed": 3,
        "bathroom": 2,
        "area": {
            "width": 5,
            "breadth": 7,
            "units": "meter"
        }
    }
 * */
