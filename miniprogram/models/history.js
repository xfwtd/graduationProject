class HistoryModel {
    key = 'q';
    maxLength = 10; //历史记录长度
    getHistory(keyword) {
       return wx.getStorageSync(this.key)||[]
    }

    addHistory(keyword) {
        let words = this.getHistory();
        const has = words.includes(keyword)
        if(!has) {

            const length = words.length
            if(length >= this.maxLength){
                words.pop()
            }
            words.unshift(keyword)
            wx.setStorageSync(this.key, words)
        }
       
    }
}

export {HistoryModel}