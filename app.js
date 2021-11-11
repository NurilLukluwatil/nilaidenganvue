var app = new Vue ({
    el : '#app',
    data: {
        nama:" ",
        matematika : "",
        fisika: "",
        bindo: "",
        pkn: "",
        binggris: "",
        barab: "",
        biologi: "",
        agamaislam: "",
        it: "",
        kimia: "",


    },
    methods: {
        
        
    }, 
    computed: {
        rata:function () {
            return (parseFloat(this.matematika) + parseFloat(this.fisika) + parseFloat(this.bindo) + parseFloat(this.pkn)+ parseFloat(this.binggris) + parseFloat(this.barab)+ parseFloat(this.biologi) + parseFloat(this.agamaislam) + parseFloat(this.it) + parseFloat(this.kimia))/ 10; 
        },
        nama:function () {
            return(this.nama);
        },  
    }

})