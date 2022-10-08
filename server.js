console.log("Hello World!");

const body = document.querySelector('table tbody');
console.log(body);

const bodyj = $('table tbody');
console.log(bodyj);

$.ajax({
    url: "https://jsbasic.hafidzubaidillah.com/messages",
    success: (result) => {
        console.log(result)
        const data = result.map(item => {
            return {
                name: item.name,
                message: item.message,
            }
        })
        console.log(data)
        data.forEach(element => {
            //bodyj.append('<tr> <td>'+element.name+'</td> <td>'+element.message+'</td> </tr>');
            bodyj.append(`
            <tr>
            <td>${element.name}</td> 
            <td>${element.message}</td> 
            </tr>`);
        });
    }
})