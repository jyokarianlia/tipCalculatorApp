const app = new Vue ({
    el: '#app',
    data: {
        bill: '',
        radio: '',
        pcustom: '',
        numPerson: '',
        tipAmoun: ''
    },
    methods: {
        reset() {
            this.bill = '';
            this.radio = '';
            this.pcustom = '';
            this.numPerson = '';
            this.tipAmoun = '';
        }
    },
    computed: {
        computedPorcent() {
            if (this.pcustom != '') {
                this.radio = '';
                return this.pcustom;
            } else {
                return this.radio;
            }
        },
        computedTipAmoun() {
            if (Number(this.numPerson) > 0 && Number(this.bill) > 0) {
                if (this.radio != '') {
                    switch (this.radio) {
                        case '5%':
                            this.tipAmoun = (this.bill * .05) / this.numPerson;
                            break;
                        case '10%':
                            this.tipAmoun = (this.bill * .1) / this.numPerson;
                            break;
                        case '15%':
                            this.tipAmoun = (this.bill * .15) / this.numPerson;
                            break;
                        case '25%':
                            this.tipAmoun = (this.bill * .25) / this.numPerson;
                            break;
                        default:
                            this.tipAmoun = (this.bill * .5) / this.numPerson;
                            break;
                    }
                } else if(this.pcustom != '') {
                    this.tipAmoun = (this.bill * (Number(this.pcustom) / 100)) / this.numPerson;
                }
                return this.tipAmoun.toFixed(2);
            } else {
                return '0.00';
            }
        },
        computedTotPerson() {
            if (this.tipAmoun != '') {
                return ((this.bill / this.numPerson) + this.tipAmoun).toFixed(2);
            } else {
                return '0.00';
            }
        },
        dinbloc() {
            if (Number(this.bill) > 0 && (this.radio != '' || Number(this.pcustom) > 0) && Number(this.numPerson) == '') {
                return true;
            } else {
                return false;
            }
        },
        disable() {
            if (Number(this.bill) > 0 && (this.radio != '' || Number(this.pcustom) > 0)) {
                return false;
            } else {
                return true;
            }
        }
    }
})