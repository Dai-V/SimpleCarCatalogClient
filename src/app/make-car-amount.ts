import { Car } from "./car"

export interface MakeCarAmount {
    makeID:number,
    name:string,
    carAmount:number
    cars:Car[]
}
