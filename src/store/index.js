import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packets:[],
    isBadge:false,
    
  },
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
