let moment = require("moment");
moment.locale('zh-cn')
export default {
    data() {
        return {
            activeName: 'first',
            //   businessHours:[],
            businessStartHours: "8:00",
            businessEndHours: "21:00",
            orderData: [
                {
                    day: "周一",
                    month: "9月11日",
                    order: [
                        {
                            siteName: "1号场",
                            priceData: [
                                {
                                    starTime: "08:00",
                                    endTime: "09:00",
                                    state: 0,
                                    price: "38"
                                },
                                {
                                    starTime: "09:00",
                                    endTime: "10:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "10:00",
                                    endTime: "11:00",
                                    state: 2,
                                    price: "38"
                                },
                                {
                                    starTime: "11:00",
                                    endTime: "12:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "12:00",
                                    endTime: "13:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "13:00",
                                    endTime: "14:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "14:00",
                                    endTime: "15:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "15:00",
                                    endTime: "16:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "16:00",
                                    endTime: "17:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "17:00",
                                    endTime: "18:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "18:00",
                                    endTime: "19:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "19:00",
                                    endTime: "20:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "20:00",
                                    endTime: "21:00",
                                    state: 2,
                                    price: "38"
                                },
                            ]
                        },
                        {
                            siteName: "2号场",
                            priceData: [
                                {
                                    starTime: "08:00",
                                    endTime: "09:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "09:00",
                                    endTime: "10:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "10:00",
                                    endTime: "11:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "11:00",
                                    endTime: "12:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "12:00",
                                    endTime: "13:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "13:00",
                                    endTime: "14:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "14:00",
                                    endTime: "15:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "15:00",
                                    endTime: "16:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "16:00",
                                    endTime: "17:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "17:00",
                                    endTime: "18:00",
                                    state: 3,
                                    price: "38"
                                },
                                {
                                    starTime: "18:00",
                                    endTime: "19:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "19:00",
                                    endTime: "20:00",
                                    state: 1,
                                    price: "38"
                                },
                                {
                                    starTime: "20:00",
                                    endTime: "21:00",
                                    state: 1,
                                    price: "38"
                                },
                            ]
                        },

                    ]


                },
                {
                    day: "周二",
                    month: "9月12日",
                }
            ]
        };
    },
    computed: {
        businessHours: function () {

            let arr = []
            let end = parseInt(this.businessEndHours);
            let sta = parseInt(this.businessStartHours);
            console.log("Sta", sta)
            console.log("end", end)

            let dif = end - sta;
            for (let i = 0; i <= dif; i++) {
                let time = sta + i;
                time < 10 ? time = '0' + time : time;
                time = time + ":00"
                console.log(time)
                arr.push(time)
            }
            return arr;
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
            console.log(moment(Date.now()).format('MM月DD日'))
        },
        handleCommand(command) {
            this.$message('click on item ' + command);
        },
        // setBusinessHours (){
        //     let arr = []
        //     let sta = parseInt(this.businessEndHours);
        //     let end = parseInt(this.businessStartHours);
        //     let dif = end - sta;
        //     for (let i = 0; i < dif; i++) {
        //         let time = star + i;
        //         time<10?time='0'+time:time;
        //         time = time+":00"
        //         arr.push[time]
        //       }
        //      this.businessHours = JSON.parse(JSON.stringify(arr))
        //      console.log(this.businessHours)
        // } 
    },
    created() {
        //   this.setBusinessHours();
    },
}
