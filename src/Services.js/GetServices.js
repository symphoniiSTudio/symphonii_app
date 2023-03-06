import { database } from "../firebase";


const ref = database.collection("Service/animations/2DAnimated");
const explainervideo =  database.collection("Service/animations/explainervideo")
const motiongraphics =  database.collection("Service/animations/motiongraphics")

export const getServices = () => {
    return new Promise(resolve => {
        let reference = ref;
        reference.onSnapshot((queryuser) => {
            const items = [];
            queryuser.forEach((doc) => {
              const item = doc.data()
              item.id=doc.id
              items.push(item);
            });

            resolve(items);
            console.log(items)
        });
    });
}
export const getServicesexplainer = (id) => {
  return new Promise(resolve => {

      let reference = ref;
      if (id) {
        reference = reference.where("id", "==", id);
      } 
      reference.onSnapshot((queryuser) => {
          const items = [];
          queryuser.forEach((doc) => {
            const item = doc.data()
            item.id=doc.id
            items.push(item);
          });

          resolve(items);
          console.log(items)
      });
  });
}
export const getServicesmotion = () => {
  return new Promise(resolve => {
      let reference = motiongraphics;
      reference.onSnapshot((queryuser) => {
          const items = [];
          queryuser.forEach((doc) => {
            const item = doc.data()
            item.id=doc.id
            items.push(item);
          });

          resolve(items);
          console.log(items)
      });
  });
}

export const getUserById = (id) => {
    return new Promise((resolve) => {
      const userRef = database.doc(`users/${id}`);
      userRef.onSnapshot((doc) => {
        const user = doc.data();
        user.id = doc.id;
        resolve((user));
      });
    });
  };
  