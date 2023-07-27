new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta: function () {
            alert('clicou')
        },
        eventKeyDown(e) {
            this.valor = e.target.value
        },
    },
})