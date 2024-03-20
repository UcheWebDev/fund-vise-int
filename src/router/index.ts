import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { requiresAuthGuard } from '@/middlewares/router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "home" */ '../views/SignUp.vue')
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import(/* webpackChunkName: "home" */ '../views/LogIn.vue')
  },
  {
    path: '/investor-login',
    name: 'InvestorLoginView',
    component: () => import(/* webpackChunkName: "home" */ '../views/InvestorLoginView.vue')
  },

  // Entrepreneur Routes
  {
    path: '/entrepreneur',
    name: 'EntrepreneurView',
    component: () => import('../views/entrepreneur/EntrepreneurView.vue'),
    children: [
      {
        path: '',
        name: 'EntrepreneurDashboard',
        component: () => import('../views/entrepreneur/EntrepreneurDashboard.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'signup',
        name: 'EntrepreneurSignup',
        component: () => import('../views/entrepreneur/EntrepreneurSignup.vue'),
      },
      {
        path: 'login',
        name: 'EntrepreneurLogin',
        component: () => import('../views/entrepreneur/EntrepreneurLogin.vue'),
      },
      {
        path: 'get-started',
        name: 'GetStarted',
        component: () => import('../views/entrepreneur/GetStarted.vue'),
      },
      {
        path: 'funds',
        name: 'LiveFunds',
        component: () => import('../views/entrepreneur/LiveFunds.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'viewFunds/:id',
        name: 'EnterprenuerViewFund',
        component: () => import('../views/entrepreneur/enterprenuerViewFund.vue'),
      },
      {
        path: 'campaign/:id',
        name: 'FoodApp',
        component: () => import('../views/entrepreneur/FoodApp.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'campaigns',
        name: 'MyCampaigns',
        component: () => import('../views/entrepreneur/MyCampaigns.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'saved',
        name: 'SavedCampaigns',
        component: () => import('../views/entrepreneur/SavedCampaigns.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'savedFunds',
        name: 'SavedFunds',
        component: () => import('../views/entrepreneur/SavedFunds.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'care',
        name: 'CareApp',
        component: () => import('../views/entrepreneur/CareApp.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'empty-my-campaigns',
        name: 'EmptyMyCampaigns',
        component: () => import('../views/entrepreneur/EmptyMyCampaigns.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'empty-saved-campaigns',
        name: 'EmptySavedCampaigns',
        component: () => import('../views/entrepreneur/EmptySavedCampaigns.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'add-campaign',
        name: 'AddCampaign',
        component: () => import('../views/entrepreneur/AddCampaign.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'messages',
        name: 'MessagingView',
        component: () => import('../views/entrepreneur/MessagingView.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'investment',
        name: 'InvestmentView',
        component: () => import('../views/entrepreneur/InvestmentView.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'business',
        name: 'BusinessView',
        component: () => import('../views/entrepreneur/BusinessView.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'team',
        name: 'TeamView',
        component: () => import('../views/entrepreneur/TeamView.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'network',
        name: 'ConnectNetwork',
        component: () => import('../views/entrepreneur/ConnectNetwork.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'investors',
        name: 'ConnectInvestors',
        component: () => import('../views/entrepreneur/ConnectInvestors.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'conect',
        name: 'ConnectEntrepreneurs',
        component: () => import('../views/entrepreneur/ConnectEntrepreneurs.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'profile',
        name: 'ConnectProfile',
        component: () => import('../views/entrepreneur/MyProfile.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'empty-campaign',
        name: 'NoCampaign',
        component: () => import('../views/entrepreneur/NoCampaign.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'join-team',
        name: 'JoinTeamEntrepreneur',
        component: () => import('../views/entrepreneur/JoinTeam.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'live-listing',
        name: 'LiveListing',
        component: () => import('../views/entrepreneur/LiveListing.vue'),
        meta: { requiresAuth: true }
      },
      
    ]
  },

  // Investor Routes
  {
    path: '/investor',
    name: 'InvestorInvestorView',
    component: () => import('../views/investor/InvestorView.vue'),
    children: [
      {
        path: '',
        name: 'InvestorInvestorDashboard',
        component: () => import('../views/investor/InvestorDashboard.vue'),
      },
      {
        path: 'signup',
        name: 'InvestorSignup',
        component: () => import('../views/investor/InvestorSignup.vue'),
      },
      {
        path: 'login',
        name: 'InvestorLogin',
        component: () => import('../views/InvestorLoginView.vue'),
      },
      {
        path: 'get-started',
        name: 'InvestorGetStarted',
        component: () => import('../views/investor/GetStarted.vue'),
      },
      {
        path: 'funds',
        name: 'InvestorLiveFunds',
        component: () => import('../views/investor/LiveFunds.vue'),
      },
      {
        path: 'funds/:id',
        name: 'InvestorFundPage',
        component: () => import('../views/investor/CareApp.vue'),
      },
      {
        path: 'viewFunds/:id',
        name: 'InvestorViewFund',
        component: () => import('../views/investor/investorViewFund.vue'),
      },
      {
        path: 'listing/:id',
        name: 'InvestorCareApp',
        component: () => import('../views/investor/CareApp.vue'),
      },
      {
        path: 'viewProfile',
        name: 'viewProfileApp',
        component: () => import('../views/viewProfileApp.vue'),
      },
      {
        path: 'saved',
        name: 'InvestorSavedCampaigns',
        component: () => import('../views/investor/SavedCampaigns.vue'),
      },
      {
        path: 'empty-campaign',
        name: 'InvestorNoCampaign',
        component: () => import('../views/investor/NoCampaign.vue'),
      },
      {
        path: 'empty-saved-campaigns',
        name: 'InvestorEmptySavedCampaigns',
        component: () => import('../views/investor/EmptySavedCampaigns.vue'),
      },
      {
        path: 'empty-my-campaigns',
        name: 'InvestorEmptyMyCampaigns',
        component: () => import('../views/investor/EmptyMyCampaigns.vue'),
      },
      {
        path: 'food',
        name: 'InvestorFoodApp',
        component: () => import('../views/investor/FoodApp.vue'),
      },
      {
        path: 'add-funds',
        name: 'InvestorAddCampaign',
        component: () => import('../views/investor/AddCampaign.vue'),
      },
      {
        path: 'campaigns',
        name: 'InvestorMyCampaigns',
        component: () => import('../views/investor/MyCampaigns.vue'),
      },
      {
        path: 'network',
        name: 'InvestorConnectNetwork',
        component: () => import('../views/investor/ConnectNetwork.vue'),
      },
      {
        path: 'investors',
        name: 'InvestorsConnect',
        component: () => import('../views/investor/ConnectInvestors.vue'),
      },
      {
        path: 'conect',
        name: 'InvestorsConnectEntrepreneurs',
        component: () => import('../views/investor/ConnectEntrepreneurs.vue'),
      },
      {
        path: 'profile',
        name: 'InvestorProfile',
        component: () => import('../views/investor/ConnectProfile.vue'),
      },
      {
        path: 'messages',
        name: 'InvestorMessagingView',
        component: () => import('../views/investor/MessagingView.vue'),
      },
      {
        path: 'team',
        name: 'JoinTeam',
        component: () => import('../views/investor/JoinTeam.vue'),
      },
      {
        path: 'add-funds',
        name: 'AddFund',
        component: () => import('../views/investor/AddFund.vue'),
      },
      {
        path: 'about-funds',
        name: 'AboutFunds',
        component: () => import('../views/investor/AboutFunds.vue'),
      },
      {
        path: 'live-listing',
        name: 'InvestorLiveListing',
        component: () => import('../views/investor/LiveListing.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    requiresAuthGuard(to, from, next)
  } else {
    next()
  }
})

export default router
