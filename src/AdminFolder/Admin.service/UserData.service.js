import { database } from "../../firebase";

const ref = database.collection("users");

export const Userdata = ()=>{
    return new Promise(resolve => {
        let reference = ref;
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