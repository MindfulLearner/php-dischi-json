const { createApp } = Vue; 

createApp (
    {
        data() {
            return {
                dischi: []

            };
        },
        methods: {
            chiamataInformazioni() {
                axios.get('http://192.168.1.101:8080/back-end/api.php')
                    .then(response => {
                        console.log(response.data);
                        this.dischi = response.data;
                        this.dischi.forEach((disco, i) => {
            disco.switch = false;
        });
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.error('errore', error);
                    });
            },
            vediInfo(i) {
                console.log(this.dischi[i]);
                    this.dischi[i].switch = true;
                /* json -> api.php -> main.js with axios -> index.html showing*/
            }
        }
    }
).mount('#app');
