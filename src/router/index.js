import { createRouter, createWebHistory } from 'vue-router'
import vContactList from '@/components/contacts/v-contact-list'
import vContactInfo from '@/components/contacts/v-contact-info'
import vUserList from '@/components/chat/v-user-list'
import vUserChat from '@/components/chat/v-user-chat'
import vSettings from "@/views/v-settings";

const routes = [
  {
    path: '/',
    name: 'home',
    component: vContactList
  },
  {
    path: '/contact',
    name: 'contact',
    component: vContactInfo
  },
  {
    path: '/chats',
    name: 'chats',
    component: vUserList
  },
  {
    path: '/chat',
    name: 'chat',
    component: vUserChat,
    props: true
  },
  {
    path: '/settings',
    name: 'settings',
    component: vSettings
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
