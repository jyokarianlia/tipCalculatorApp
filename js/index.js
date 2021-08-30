const app = new Vue ({
    el: '#app',
    data: {
        bill: '',
        radio: '',
        pcustom: '',
        numPerson: '',
        tipAmoun: '',
        totPerson: ''
    },
    methods: {},
    computed: {
        porcent() {
            if (this.pcustom != '') {
                this.radio = '';
                return this.pcustom;
            } else {
                return this.radio;
            }
        }
    }
})