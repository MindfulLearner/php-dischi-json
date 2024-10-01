const { createApp } = Vue; 

createApp (
    {
        data() {
            return {
                dischi : [
                    {
                        immagine: "https://wallpapers.com/images/hd/goku-swag-x8n3x3lj99y7fv2c.jpg",
                        titolo: "Swag Power",
                        artista: "Goku Flex",
                        anno: "2024"
                    },
                    {
                        immagine: "https://wallpapers.com/images/hd/goku-swag-37qx8pvxlj2476ki.jpg",
                        titolo: "Saiyan Style",
                        artista: "Super Saiyan",
                        anno: "2023"
                    },
                    {
                        immagine: "https://media.tenor.com/PbrO7LFcl8UAAAAe/swag.png",
                        titolo: "Ultra Drip",
                        artista: "Vegeta Blue",
                        anno: "2025"
                    },
                    {
                        immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmaHEbe-WmwexqM7FEI5B9Yz5wTY4XOnS42A&s",
                        titolo: "Fusion Beats",
                        artista: "Gotenks",
                        anno: "2021"
                    },
                    {
                        immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTB6AdZpKDdrz7BUSZ_plOCt_LxmnmK9z4A&s",
                        titolo: "Kamehameha Rave",
                        artista: "Master Roshi",
                        anno: "2022"
                    },
                    {
                        immagine: "https://www.memecreator.org/static/images/memes/2938989.jpg",
                        titolo: "Meme Supreme",
                        artista: "Krillin",
                        anno: "2020"
                    }
                ]

            };
        },
                methods: {
                    chiamataInformazioni() {
                        axios.get('https://api.example.com/data')
                            .then(response => {
                                console.log(response.data);
                            })
                            .catch(error => {
                                console.error('errore', error);
                            });
                    }
                }
        }
).mount('#app');
