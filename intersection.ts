// Intersection

// Although intersection and union types are similar, they are employed in completely diffirent ways
// an intersection types is type that merges several kinds into one.
// this allows you to combine many types to ceate a single type with all of the properties that you require

// An object of this type will have members from all of the types given. 
// The "&" operator is ussed to create the intersections type

type User ={
    id: number;
    name: string;
};

type Admin ={
    privileges : string [];
}

type SuperUser = User & Admin ;

 
const elevatedUser : SuperUser ={
    id:1,
    name: 'Mark',
    privileges : ['Start-database'],
}
