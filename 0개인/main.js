//vue instance
//설치한 vue를 가져옴.
import Vue from 'vue';
import NCBHome from './vueFile/NCBHome';

//el역활을 함(vue가 통제할 div 태그id)
new Vue(NCBHome).$mount('#root');

//main.js가 수정 또는 추가될 때마다 다시 빌드해줘야 함