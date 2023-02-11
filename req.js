console.log(5);

const test = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let obj = {
                name: 'hr',
                age: 22
            }
            resolve(obj);
        }, 2000);
    })
}

export default async () => {
    return await test();
}

