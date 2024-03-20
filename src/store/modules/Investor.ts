
import { Commit, Module } from 'vuex';
import server from '../../services/server'
import { AxiosError, AxiosResponse } from 'axios';


interface InvestorState {
    investor: Array<any>;
}

const Investor: Module<InvestorState, any> = {
    state: () => ({
        investor: []
    }),
    actions: {
        signUpNewInvestor({ commit }: { commit: Commit }, payLoad: any) {
            return new Promise((resolve, reject) => {
                server().post('/investors/auth/register', payLoad)
                    .then((response: AxiosResponse) => resolve(response))
                    .catch((err: AxiosError) => reject(err))
            })
        },
        loginInvestor({ commit }: { commit: Commit }, payLoad: any) {
            return new Promise((resolve, reject) => {
                server().post('/investors/auth/login', payLoad)
                    .then((response: AxiosResponse) => resolve(response))
                    .catch((err: AxiosError) => reject(err))
            })
        },
        updateInvestorProfileInformations({ commit }: { commit: Commit }, payLoad: any) {
            return new Promise((resolve, reject) => {
                server().put('/investors/roles/updateInformations', payLoad)
                    .then((response: AxiosResponse) => resolve(response))
                    .catch((err: AxiosError) => reject(err))
            })
        },
        getLoggedInvestorProfile({ commit }: { commit: Commit }) {
            return new Promise((resolve, reject) => {
                server().get('/investors/roles/profile')
                    .then((response: AxiosResponse) => {
                        resolve(response)
                        commit('updateProfileState', response.data.data);
                    })
                    .catch((err: AxiosError) => reject(err))
            })
        }
    },
    mutations: {
        updateProfileState(state: InvestorState, data) {
            state.investor = data
        }

    },
    getters: {
        getInvestor: state => state.investor
    }
};

export default Investor;
