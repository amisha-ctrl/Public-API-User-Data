class UserData{
    constructor(){
        this.base_url = `https://jsonplaceholder.typicode.com/users`
        this.container = document.getElementById("container");
        this.reloadBtn = document.getElementById("reload");
        this.reloadBtn.addEventListener("click",()=>this.getData());
    }
    getData(){
        this.container.innerHTML = "<p>Loading data...</p>";
        fetch(this.base_url,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response=>{
            if(!response.ok){
                throw new Error("Failed to fetch data")
            }
            return response.json();
        })
        .then(data=>{
            if (!Array.isArray(data)) {
                throw new Error("Data is not an array");
            }
            this.container.innerHTML="";
            data.forEach(userInfo => {
                const card = document.createElement("div");
                card.classList.add("user-card");
                card.innerHTML=`
                    <h3>${userInfo.name}</h3>
                    <p><strong style="color:#0c5f39">Email: </strong>${userInfo.email}</p>
                    <p>
                        <strong style="color:#0c5f39">Address: </strong>${userInfo.address.street}, ${userInfo.address.suite}, ${userInfo.address.city}, ${userInfo.address.zipcode}
                    </p>
                `;
                this.container.appendChild(card);
            });
        })
        .catch(error=>{
            this.container.innerHTML=`<p style="color:red;">Error: ${error.message}</p>`;
        })
    }
}
const getUserData = new UserData();
getUserData.getData();