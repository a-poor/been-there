
export type UserID = number; // TODO: Update me?

export interface IUser {
    id: UserID;
    username: string;
    // ...
}

export type PlaceID = number; // TODO: Update me?

export type Placekey = string; // TODO: Update me?

export interface IPlace {
    id: PlaceID;
    name: string;
    location?: Placekey;
    description?: string;
    beenThere?: boolean;
    interestLevel?: number; // or priority? Out of 5? 10? (before going)
    rating?: number; // Out of 5? 10? (after going)
    wouldGoAgain?: boolean; // If already visited
    // ...
}

export type PlaceVisitID = number; // TODO: Update me?

export interface IPlaceVisit { // TODO: Update me?
    id: PlaceVisitID;
    place: PlaceID;
    // ...
}

