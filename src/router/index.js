import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUpForm from '@/components/SignUpForm'
import Timelines from '@/components/TweetTimelines'
import post from '@/components/PostTweet'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signUp',
    name: 'SignUpForm',
    component: SignUpForm
  },
  {
    path: '/timelines',
    name: 'Timelines',
    component: Timelines
  },
  {
    path: '/post',
    name: 'PostTweet',
    component: post
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
