console.log("This is my script")

let results = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "satishpanduru24575879",
    "email": "satishpanduru24575879@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitbtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("clicked!")
    resultscont.innerHTML =`<img width="30px" src="loading.svg" alt="">`

    let key = "ema_live_5qKmgJcrOrpuiP4Rw2XYboE1eUvdU3rmHMJrPG83"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let results = await res.json()

    let str = ``
    for (key of Object.keys(results)) {
        if(results[key] !=="" && results[key] !== " ")
        str = str + `<div>${key}: ${results[key]}</div>`
    }

    console.log(results)
    resultscont.innerHTML = str
})




