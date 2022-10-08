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
        const response = await axios.post('https://jsbasic.hafidzubaidillah.com/messages',kirim).then(res => {
            return res.data
        }).catch(error => 'gagal')
        if (response == 'gagal') {
            const failed = document.querySelector('.failed')
            failed.style.display = 'inline'
            setTimeout(() => {
                failed.style.display = 'none'
            }, 3000);

        } else {
            const sukses = document.querySelector('.sukses')
            sukses.style.display = 'inline'
            const tbody = document.querySelector('tbody')
            tbody.innerHTML = `<tr>
                <td>${response.name}</td> 
                <td>${response.message}</td> 
                </tr>` + tbody.innerHTML;

            setTimeout(() => {
                sukses.style.display = 'none'
            }, 3000);
        }
        button.innerHTML = 'submits'
        
        console.log(response)
    })

})()