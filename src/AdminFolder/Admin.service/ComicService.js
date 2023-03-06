import { database } from "../../firebase";

const ref = database.collection("Comic");

export const getProducts = (id) => {
    return new Promise(resolve => {
        let reference = ref;

        if (id) {
            reference = reference.where('id', '==', id);
        }

        reference.onSnapshot((queryproduct) => {
            const items = [];
            queryproduct.forEach((doc) => {
              const item = doc.data()
              item.id=doc.id
              items.push(item);
            });

            resolve(items);
        });
    });
}
export const getComics = (creator_link) => {
    return new Promise(resolve => {
        let reference = ref;        
        if ( creator_link) {
            reference = reference.where('creator_link', '==',creator_link);
        }    
        reference.onSnapshot((queryproduct) => {
            const items = [];
            queryproduct.forEach((doc) => {
              const item = doc.data()
              item.id=doc.id
              items.push(item);
            });

            resolve(items);
        });
    });
}