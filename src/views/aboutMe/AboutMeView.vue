<script setup>
import {ref} from 'vue'
import {useUser} from "../../stores/user.js";
import router from "../../router/index.js";
import {useGlobalSettings} from "@/stores/globalSettings.js";
import AdditionallyData from "@/views/aboutMe/AdditionallyData.vue";
import BasicInformation from "@/views/aboutMe/BasicInformation.vue";
import ContactsView from "@/views/aboutMe/ContactsView.vue";
import DataForCalculations from "@/views/aboutMe/DataForCalculations.vue";
import EducationView from "@/views/aboutMe/EducationView.vue";
import QualificationDocuments from "@/views/aboutMe/QualificationDocuments.vue";
import TypeOfJobs from "@/views/aboutMe/TypeOfJobs.vue";
import ExperienceView from "@/views/aboutMe/ExperienceView.vue";
const user=useUser()
const global=useGlobalSettings()
function openVacancy(){
  alert("Страница вакансии")
}
function openObjects(){
  alert("Страница объектов")
}
function openFavorite(){

}
function openNotification(){

}
function openUserInfo(){

}
function back(){

}
async function toDocuments(){
  await router.push({name: "documents"})
  global.currentRoute = "documents"
}
</script>
<template>
  <div class="about-me">
    <div class="header-content">
      <div class="left-button-group">
        <button
            class="button-item"
            @click="openVacancy"
        >
          <img src="@/assets/images/vacancy.png" alt="Вакансии">
          <span>Вакансии</span>
        </button>
        <button
            class="button-item"
            @click="openObjects"
        >
          <img src="@/assets/images/building.png" alt="Объекты">
          <span>Объекты</span>
        </button>
      </div>
      <div class="right-button-group">
        <button
            class="button-item"
            @click="openFavorite"
        >
          <img src="@/assets/images/heart.png" alt="Избранное">
          <span>Избранное</span>
        </button>
        <button
            class="button-item"
            @click="openNotification"
        >
          <img src="@/assets/images/notification.png" alt="Уведомления">
          <span>Уведомления</span>
        </button>
        <button
            class="button-item"
            @click="openUserInfo"
        >
          <span class="user-img">
             <img v-if="!!user.userProfileImage" :src="user.userProfileImage" alt="Профиль">
            <span v-else class="abbr">{{user.userAbbr}}</span>
          </span>
          <span>Профиль</span>
        </button>
      </div>
    </div>
    <div class="main-user-content">
      <div class="title-content">
        <button @click="back">
          <img src="@/assets/images/arrow-left.png" alt="назад">
          Назад
        </button>
        <div class="title">
          Заполнить профиль
        </div>
      </div>
      <div class="tabs">
        <div class="tabs-content">
          <div class="tabs-content-head">
            <div class="tab-title">
              {{user.tabTitle}}
            </div>
            <div class="progress">
              <div class="step">
                Шаг {{user.tabId + 1}}
              </div>
              <div class="progress-line">
                <div
                    class="current-line"
                    :style="{'width':user.widthLine+'px'}"
                ></div>
              </div>
              <div class="all-step">
                из 8
              </div>
            </div>
          </div>
          <div class="tabs-content-body">
            <basic-information v-if="user.tabId === 0"/>
            <qualification-documents v-if="user.tabId === 1"/>
            <experience-view v-if="user.tabId === 2"/>
            <education-view v-if="user.tabId === 3"/>
            <contacts-view v-if="user.tabId === 4"/>
            <data-for-calculations v-if="user.tabId === 5"/>
            <type-of-jobs v-if="user.tabId === 6"/>
            <additionally-data v-if="user.tabId === 7"/>
          </div>
        </div>
        <div class="tabs-menu">
          <div class="tabs-menu-list">
            <div
                class="tabs-menu-item"
                :class="{'active': user.tabId===0}"
                @click="user.handleClickTab(0,'Основная информация')"
            >
              Основная информация
            </div>
            <div
                class="tabs-menu-item"
                :class="{'active': user.tabId===1}"
                @click="user.handleClickTab(1,'Квалификационные документы')"
            >
              Квалификационные документы
            </div>
            <div
                class="tabs-menu-item"
                :class="{'active': user.tabId===2}"
                @click="user.handleClickTab(2,'Опыт работы')"
            >
              Опыт работы
            </div>
            <div
                class="tabs-menu-item"
                :class="{'active': user.tabId===3}"
                @click="user.handleClickTab(3,'Образование')"
            >
              Образование
            </div>
            <div
                class="tabs-menu-item"
                :class="{'active': user.tabId===4}"
                @click="user.handleClickTab(4,'Контакты')"
            >
              Контакты
            </div>
            <div
                class="tabs-menu-item"
                :class="{'active': user.tabId===5}"
                @click="user.handleClickTab(5,'Данные для расчетов')"
            >
              Данные для расчетов
            </div>
            <div
                class="tabs-menu-item"
                :class="{'active': user.tabId===6}"
                @click="user.handleClickTab(6,'Виды работ')"
            >
              Виды работ
            </div>
            <div
                class="tabs-menu-item"
                :class="{'active': user.tabId===7}"
                @click="user.handleClickTab(7,'Дополнительные данные')"
            >
              Дополнительные данные
            </div>
          </div>
          <div class="tabs-warning-info">
            <img src="@/assets/images/documents.png" alt="Документы">
            <span>
              Заполните раздел <span class="fw-600 pointer" @click="toDocuments">Документы,</span>
              это позволит вам отправить их работодателю одним кликом
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fw-600{
  font-weight: 600;
}
.pointer{
  cursor: pointer;
}
.about-me{
  width: 100%;
  height: 100%;
}
.header-content{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 24px 30px;
  border-bottom: 1px solid #E6E6E6;
  button{
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor:pointer;
    &:hover{
      transition: all 0.3s;
      opacity: 0.8;
    }
  }
  .left-button-group{
    display: flex;
    align-items: center;
    button{
      font-size: 20px;
      font-weight: 500;
      color: rgba(0,0,0,0.87);
      margin-right: 24px;
      &>img{
        width: 20px;
        margin-right: 8px;
      }
      span{
        line-height: 1;
      }
    }
  }
  .right-button-group{
    display: flex;
    align-items: center;
    button{
      font-size: 14px;
      font-weight: 600;
      margin-left: 24px;
      color: #5F5F5F;
      &>img{
        width: 28px;
        margin-right: 8px;
      }
      span{
        line-height: 1;
      }
      .user-img{
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        background: #fff;
        border: 1px solid #E6E6E6;
        border-radius: 50px;
        .abbr{
          font-size: 20px;
          line-height: 1.2;
          color: rgba(0,0,0,0.6);
        }
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50px;
        }
      }
    }
  }
}
.main-user-content{
  padding: 24px;
  box-sizing: border-box;
  .title-content{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    button{
      padding: 14px 16px;
      font-size: 16px;
      font-weight: 600;
      line-height: 1;
      background: #fff;
      color: #5F5F5F;
      border: 1px solid #E6E6E6;
      border-radius: 4px;
      margin-right: 16px;
      cursor: pointer;
      &:hover{
        background: #E6E6E6;
        transition: all 0.3s;
      }
      img{
        margin-right: 10px;
      }
    }
    .title{
      font-size: 32px;
      font-weight: 700;
      line-height: 1.25;
    }
  }
}
.tabs{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  .tabs-content{
    width: 100%;
    background: #fff;
    margin-right: 24px;
    border-radius: 8px;
    box-sizing: border-box;
  }
  .tabs-menu{
    width: 380px;
    box-sizing: border-box;
    .tabs-menu-list{
      width: 380px;
      background: #fff;
      margin-bottom: 24px;
      border-radius: 8px;
      padding: 24px;
      box-sizing: border-box;
      .tabs-menu-item{
        cursor: pointer;
        padding: 11px 16px;
        box-sizing: border-box;
        border-radius: 4px;
        font-size: 16px;
        line-height: 1.1;
        margin-bottom: 4px;
        transition: all .3s;
        &.active{
          background: #5F5F5F;
          color: #fff;
          transition: all .3s;
        }
        &:hover{
          background: #5F5F5F88;
          color: #fff;
          transition: all .3s;
        }
      }
    }
    .tabs-warning-info{
      width: 100%;
      background: #fff;
      border-radius: 8px;
      padding: 24px;
      font-size: 16px;
      font-width: 400;
      line-height: 1.5;
      text-align: center;
      width: 100%;
      color: rgba(0,0,0,0.6);
      box-sizing: border-box;
      img{
        display: block;
        text-align: center;
        margin: auto;
        margin-bottom: 20px;
      }
    }
  }
  .tabs-content-body{
    padding: 24px;
    box-sizing: border-box;
  }
}


.tabs-content-head{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #E6E6E6;
  .tab-title{
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    color: rgba(0,0,0,0.87);
  }
  .progress{
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    .step{
      color: rgba(0,0,0,0.87);
      margin-right: 8px;
    }
    .progress-line{
      position: relative;
      width: 240px;
      height: 5px;
      background: #40FB48;
      border-radius: 5px;
    }
    .current-line{
      position: absolute;
      height: 5px;
      background: #309D5B;
      border-radius: 5px;
    }
    .all-step{
      color: rgba(0,0,0,0.6);
      margin-left: 8px;
    }
  }
}
</style>