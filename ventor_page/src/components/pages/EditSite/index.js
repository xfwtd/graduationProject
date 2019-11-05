import editSite_cmp from "@/components/common/SetSite/index.vue"
export default {
    data() {
        return {
            form:{} //父传子
        }
    },
    components:{
        editSite_cmp
    },
    created() {
        console.log("哈哈哈",this.$route.params)
        this.$route.params.opt = true;
        this.form=this.$route.params
    },
}