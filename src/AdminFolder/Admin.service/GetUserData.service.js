import { database } from "../../firebase";

export const getRandomString = (size = 50, chars) => {
    const result = [];
    const possibleCharacters = chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charSize = possibleCharacters.length;

    for (let i = 0; i < size; i++) {
      result.push(
        possibleCharacters.charAt(Math.floor(Math.random() * charSize))
      );
    }

    return result.join('');
  }

 


const ref = database.collection("Newsusers");

export const getnewUsers = (link) => {
    return new Promise(resolve => {
        let reference = ref;

        if (link) {
            reference = reference.where('creator_link', '==', link);
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
