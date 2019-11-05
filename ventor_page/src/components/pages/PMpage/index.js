export default {
  data() {
    return {
      startTime: '',        //时间控制器-开始时间
      endTime: '',        //时间控制器-结束时间
      tabIndex: 0,
      projectData: [
        {
          name: "羽毛球",
          project_id: "1",
          siteData: [
            {
              site_id: 'A25215402',
              site_name: '1号场',
            }, {
              site_id: 'A25215404',
              site_name: 'VIP场',
            }, {
              site_id: 'A25215401',
              site_name: 'VIP场',

            }, {
              site_id: 'A25215403',
              site_name: 'VIP场',
            }]
        },
        {
          name: "足球",
          project_id: "2 ",
          siteData: [
            {
              site_id: 'A25215402',
              site_name: '1号场',
            },
            {
              site_id: 'A25215404',
              site_name: 'VIP场',
            }]
        }
      ]
    };
  },
  methods: {
    //标签页
    handleClick(tab, event) {
      this.tabIndex = tab.index
    },
    editSite(index, row) {

      this.$router.push({
        name: "EditSite",
        params: {
          site_id: row.site_id,
          siteName: row.site_name,
          projectName: this.projectData[this.tabIndex].name,
          project_id: this.projectData[this.tabIndex].project_id,

        }
      })
    }
  },
  created: function () {
    this.activeName = this.projectData[0].project_id;
  },
}
