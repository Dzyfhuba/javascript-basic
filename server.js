// console.log("Hello World!");

// const body = document.querySelector('table tbody');
// console.log(body);

// const bodyj = $('table tbody');
// console.log(bodyj);

// $.ajax({
//     url: "https://jsbasic.hafidzubaidillah.com/messages",
//     success: (result) => {
//         console.log(result)
//         const data = result.map(item => {
//             return {
//                 name: item.name,
//                 message: item.message,
//             }
//         })
//         console.log(data)
//         data.forEach(element => {
//             //bodyj.append('<tr> <td>'+element.name+'</td> <td>'+element.message+'</td> </tr>');
//             bodyj.append(`
//             <tr>
//             <td>${element.name}</td> 
//             <td>${element.message}</td> 
//             </tr>`);
//         });
//     }
// })

(async () =>{
    const form = document.querySelector('form');
    form.addEventListener("submit", async e =>{
        e.preventDefault();
        const name = document.querySelector('[name="name"]').value
        const pesan = document.querySelector('[name="pesan"]').value
        console.log(name, pesan);
        const kirim = {
            name: name,
            message: pesan,
        }

        console.log(kirim)
        const button = document.querySelector('button[type="submit"]')
        button.innerHTML = 'Tunggu Sebentar';
        const response = await axios.post('https://jsbasic.hafidzubaidillah.com/messages',kirim)
        button.innerHTML = 'submits'
        const sukses = document.querySelector('.sukses')
        sukses.style.display = 'inline'
        setTimeout(() => {
            sukses.style.display = 'none'
        }, 3000);
        console.log(response)
    })

})()