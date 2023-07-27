new Vue({
    el: "#desafio",
    data: {
        name: "Elton",
        idade: 25,
        // idade3vzs: 25 * 3,
        img: "https://media.licdn.com/dms/image/D4D03AQGIWcNh8aRbOw/profile-displayphoto-shrink_800_800/0/1678649364164?e=1695859200&v=beta&t=laDpyQEj4ON7-VFN6GWxvH6LWB-Ab4mHZUz5O6xBJ5Q",
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        numeroRandomico() {
            return Math.random(1)
        },
    }
})
