
import { Commit, Module } from 'vuex';
import server from '../../services/server'
import { AxiosError, AxiosResponse } from 'axios';

 
interface EnterprenuerState {
  moduleAValue: number;
  enterprenuer: Array<any>;
}

const Enterprenuer: Module<EnterprenuerState, any> = {
  state: () => ({
    moduleAValue: 0,
    enterprenuer:[]
  }),
  actions:{
    incremeant({ commit }: { commit: Commit }){
        commit('incrementModuleA');
    },
    signUpNewEnterprenuer({commit}: {commit:Commit}, payLoad : any){
        return new Promise( (resolve , reject ) => {
           server().post('/enterpreneur/auth/register', payLoad)
           .then((response : AxiosResponse) => resolve(response))
            .catch((err:AxiosError) => reject(err))
        })
    },
    loginEnterprenuer({commit}: {commit:Commit}, payLoad : any){
      return new Promise( (resolve , reject ) => {
         server().post('/enterpreneur/auth/login', payLoad)
         .then((response : AxiosResponse) => resolve(response))
          .catch((err:AxiosError) => reject(err))
      })
  },
    updateProfileInformations({commit}: {commit:Commit}, payLoad : any){
        return new Promise((resolve , reject ) => {
          server().put('/enterpreneur/roles/updateInformations', payLoad)
           .then((response: AxiosResponse) => resolve(response))
            .catch((err:AxiosError) => reject(err))
        })
    },
    getLoggedEnterprenuerProfile({commit}: {commit:Commit}){
      return new Promise((resolve , reject ) => {
        server().get('/enterpreneur/roles/profile')
            .then((response: AxiosResponse) => {
              resolve(response)
              commit('updateProfileState', response.data.data);
         })
             .catch((err:AxiosError) => reject(err))
      })
    }
  },
  mutations: {
    incrementModuleA(state: EnterprenuerState) {
      state.moduleAValue++;
      console.log(state.moduleAValue)
    },
    updateProfileState(state: EnterprenuerState,data){
      state.enterprenuer = data
    }
    
  },
  getters:{
     getEnteprenuer : state => state.enterprenuer
  }
};

export default Enterprenuer;
