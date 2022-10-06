console.log("Hello World!");

const body = document.querySelector('table tbody');
console.log(body);

const bodyj = $('table tbody');
console.log(bodyj);

$.ajax({
    url: "http://192.168.1.100:3333/messages",
    success: (result) => {
        console.log(result)
        const data = result.map(item => {
            return {
                name: item.name,
                message: item.message,
            }
        })
        console.log(data)
        
    }
})