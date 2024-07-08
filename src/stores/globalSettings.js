import {defineStore} from "pinia";
import {useRoute, useRouter} from "vue-router";

export const useGlobalSettings = defineStore('', {
    state:()=>({
        currentRoute:"about-me"
    }),
    actions:{
    }
})