import {defineStore} from "pinia";

export const useUser=defineStore('useUserStore',{
    state:()=>({
        userProfileImage:'',///src/assets/images/vacancy.png
        userAbbr:'AB',
        tabTitle:'Основная информация',
        tabId:0,
        widthLine:30,
        userinfo:{
            firstName:"",
            lastName:"",
            status:"",
            birthday:"",
            citizenship:"",
            readinessToCome:null,
        },
    }),
    actions:{
        handleClickTab(id, title){
            this.tabTitle=title
            this.tabId=id
            this.widthLine=(id+1)*30
        }
    }
})