import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packets:[],
    isBadge:false,
  },
  BabyMebel:[
    {
      id: 1,
      img: "1.jpg",
      title: "Donya idishlarni yuvish uchun gel",
      price: "1 990",
      currency: "So'm",
    },
    {
      id: 2,
      img: "2.jpg",
      title: "Donya idishlarni yuvish uchun jel, limon",
      price: "4 090",
      currency: "So'm",
    },
    {
      id: 3,
      img: "3.jpg",
      title: "Chistin universal sanitariya-gigiyena",
      price: "13 500",
      currency: "So'm",
    },
    {
      id: 4,
      img: "4.jpg",
      title: "Chistin universal sanitariya-gigiyena",
      price: "13 500",
      currency: "So'm",
    },
    {
      id: 5,
      img: "5.jpg",
      title: "Chistin universal sanitariya-gigiyena",
      price: "13 500",
      currency: "So'm",
    },
    {
      type: "babymebel",
      id: 6,
      img: "6.jpg",
      title: "Chistin universal sanitariya-gigiyena",
      price: "13 500",
      currency: "So'm",
    },
  ],
  Kanstovar:[
    {
      type: "konstavar",
      id: 1,
      img: "1.jpg",
      title: "Donya idishlarni yuvish uchun gel",
      price: "1 990",
      currency: "So'm",
    },
    {
      id: 2,
      img: "2.jpg",
      title: "Donya idishlarni yuvish uchun jel, limon",
      price: "4 090",
      currency: "So'm",
    },
    {
      id: 3,
      img: "3.jpg",
      title: "Chistin universal sanitariya-gigiyena",
      price: "13 500",
      currency: "So'm",
    },
    {
      id: 4,
      img: "4.jpg",
      title: "Chistin universal sanitariya-gigiyena",
      price: "13 500",
      currency: "So'm",
    },
    {
      id: 5,
      img: "5.jpg",
      title: "Chistin universal sanitariya-gigiyena",
      price: "13 500",
      currency: "So'm",
    },
    {
      id: 6,
      img: "6.jpg",
      title: "Chistin universal sanitariya-gigiyena",
      price: "13 500",
      currency: "So'm",
    },
  ],
  
  // actions: {
  //   SearchProduct( ){
  //     this.$store.dispatch('', payload);
  //   }

  // },
  getters:{
    getPackets:state=>state.packets.length,
  },
  mutations: {
    addPacket(state,packet){  //packet is an object
      state.packets.push(packet);
    },
    deleteProductFromPacket(state,packet){  //packet is an object
      state.packets.splice(state.packets.indexOf(packet),1);
    }
  },
  actions: {
    productAddPacket(context,packet){
      context.commit('addPacket',packet)
    },
    deleteProductFromPacket(context,packet){
      context.commit('deleteProductFromPacket',packet)
    }
  },
})
