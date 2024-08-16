
const postData = async (user) => {
    let req = await fetch("http://localhost:8090/user/login", {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
    })
    let res = await req.json()
    console.log(res);

    document.cookie=`id=${res.User._id}`

}


const handleData = (e) => {
    e.preventDefault();
    let data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    postData(data)

}


document.getElementById("userData").addEventListener("submit", handleData
)