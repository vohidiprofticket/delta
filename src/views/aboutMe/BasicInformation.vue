<script setup>
import {useUser} from "@/stores/user.js";
import {reactive} from "vue";
const user=useUser()
const readinessToComeoptions=reactive([
  {value:1, label:"Готов"},
  {value:2, label:"Не готов"},
])
const citizenshipOptions=reactive([
  {value:1, label:"Россия"},
  {value:2, label:"ОАЭ"},
])
const statusOptions=reactive([
  {value:1, label:"В активном посике"},
  {value:2, label:"Иное"},
])
function selectInput (event)  {
  let reader=new FileReader();
  reader.onloadend=function (){
    let img=reader.result
    user.userProfileImage=img
  }
  reader.readAsDataURL(event.target.files[0]);
}
</script>
<template>
  <div class="basic-information">
    <div class="profile-image">
      <div class="current-profile-image">
        <img
            v-if="user.userProfileImage"
            :src="user.userProfileImage"
            alt="Профиль"
        >
        <span v-else>
          {{user.userAbbr}}
        </span>
      </div>
      <div class="upload">
        <div class="info">
          Перетащите или выберите фото на компьютере
        </div>
        <div class="button-upload">
          <img src="@/assets/images/upload.png" alt="Выбрать файл">
          <span>
              Выбрать файл
          </span>
        </div>
        <input type="file" class="input-hidden"  @change="selectInput">
      </div>
    </div>

    <div class="form">
      <div class="form-column-2">
        <div class="input-wrapper mr-25">
          <div class="title">
            Фамилия <span class="danger">*</span>
          </div>
          <el-input
              v-model="user.userinfo.lastName"
              placeholder="Фамилия"
              style="width: 100%"
          />
        </div>
        <div class="input-wrapper">
          <div class="title">
            Имя <span class="danger">*</span>
          </div>
          <el-input
              v-model="user.userinfo.firstName"
              placeholder="Имя"
              style="width: 100%"
          />
        </div>
      </div>
      <div class="form-column-1">
        <div class="input-wrapper">
          <div class="title">
            Статус <span class="danger">*</span>
          </div>
          <el-select
              v-model="user.userinfo.status"
              placeholder="Статус"
              style="width: 100%"
          >
            <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="form-column-1">
        <div class="input-wrapper">
          <div class="title">
            Дата рождения <span class="danger">*</span>
          </div>
          <el-date-picker
              v-model="user.userinfo.birthday"
              type="date"
              placeholder="Дата рождения"
              style="width: 100%"
          />
        </div>
      </div>
      <div class="form-column-1">
        <div class="input-wrapper">
          <div class="title">
            Гражданство <span class="danger">*</span>
          </div>
          <el-select
              v-model="user.userinfo.citizenship"
              placeholder="Гражданство"
              style="width: 100%"
          >
            <el-option
                v-for="item in citizenshipOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="form-column-1">
        <div class="input-wrapper">
          <div class="title">
            Готовность приехать <span class="danger">*</span>
          </div>
          <el-select
              v-model="user.userinfo.readinessToCome"
              placeholder="Готовность приехать"
              style="width: 100%"
          >
            <el-option
                v-for="item in readinessToComeoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>

        </div>
      </div>

    </div>
    <div class="button-prev-next">
      <button class="next danger">
         Следующий шаг →
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form{
  margin-top: 16px;
  margin-bottom: 24px;
  .form-column-2{
    display: flex;
    align-items: start;
    justify-content: space-between;
    .mr-25{
      margin-right: 25px;
    }
  }
  .input-wrapper{
    width: 100%;
    margin-bottom: 15px;
    .title{
      font-size: 14px;
      font-weight: 400;
      line-height: 1.2;
      color: #5F5F5F;
      margin-bottom: 4px;
      .danger{
        color: #FF381E;
      }
    }
  }
}
.basic-information{
  .profile-image{
    width: 100%;
    margin: auto;
    .current-profile-image{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 64px;
      font-weight: 600;
      line-height: 1;
      color: rgba(0,0,0,0.6);
      width: 160px;
      height: 160px;
      border-radius: 160px;
      border: 1px solid #E6E6E6;
      background: #F9F9F9;
      margin: auto;
      margin-bottom: 24px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 160px;
      }
    }
    .upload{
      width: 420px;
      padding: 14px 34px;
      border: 1px dashed #E6E6E6;
      border-radius: 8px;
      margin: auto;
      cursor: pointer;
      position: relative;
      .input-hidden{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }
      .info{
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #5F5F5F;
        text-align: center;
        margin-bottom: 16px;
      }
      .button-upload{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        img{
          margin-right: 14px;
        }
        span{
          font-size: 14px;
          font-weight: 400;
          line-height: 1.2;
          color: #FF6600;
        }
      }
    }
  }
}
.button-prev-next{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button{
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    border: none;
    padding: 16px 20px;
    cursor: pointer;
    &:hover{
      opacity: 0.5;
      transition: all 0.3s;
    }
  }
  .danger{
    background: #FF6600;
    color: #fff;
  }
}
</style>