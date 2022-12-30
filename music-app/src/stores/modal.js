import {defineStore} from  "pinia";

export default defineStore(
    'modal', {
      state: () => ({
        isOpen: false,
      }),
      getters:{
        hiddenClass(state){
            return !state.isOpen ? 'hidden' : "";
        }
      }
    },
    'User',{
        state :()=>({
            isLogged: false,
            
        }),
        getters:{
            checkLogged(state){
              let local = localStorage.getItem('user')
            }
        }
    }
);