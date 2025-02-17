import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";
import Home from "@/views/Home/index.vue";
export const configRoutes = {
  path: "/config",
  name: "Config",
  component: () => import("@/views/Config/index.vue"),
  children: [
    {
      path: "",
      redirect: "/config/person",
    },
    {
      path: "/config/person",
      name: "PersonConfig",
      component: () => import("@/views/Config/Person/PersonConfig.vue"),
      meta: {
        title: "人员配置",
        icon: "person",
      },
      children: [
        {
          path: "",
          redirect: "/config/person/all",
        },
        {
          path: "/config/person/all",
          name: "AllPersonConfig",
          component: () => import("@/views/Config/Person/PersonAll.vue"),
          meta: {
            title: "人员名单",
            icon: "all",
          },
        },
        {
          path: "/config/person/already",
          name: "AlreadyPerson",
          component: () => import("@/views/Config/Person/PersonAlready.vue"),
          meta: {
            title: "中奖名单人员",
            icon: "already",
          },
        },
        // {
        //     path:'other',
        //     name:'OtherPersonConfig',
        //     component:()=>import('@/views/Config/Person/OtherPersonConfig.vue'),
        //     meta:{
        //         title:'其他配置',
        //         icon:'other'
        //     }
        // }
      ],
    },
    {
      path: "/config/prize",
      name: "PrizeConfig",
      component: () => import("@/views/Config/Prize/PrizeConfig.vue"),
      meta: {
        title: "奖品配置",
        icon: "prize",
      },
    },
    {
      path: "/config/global",
      name: "GlobalConfig",
      redirect: "/config/global/all",
      meta: {
        title: "全局配置",
        icon: "global",
      },
      children: [
        {
          path: "/config/global/face",
          name: "FaceConfig",
          component: () => import("@/views/Config/Global/FaceConfig.vue"),
          meta: {
            title: "界面配置",
            icon: "face",
          },
        },
        {
          path: "/config/global/image",
          name: "ImageConfig",
          component: () => import("@/views/Config/Global/ImageConfig.vue"),
          meta: {
            title: "图片列表",
            icon: "image",
          },
        },
        {
          path: "/config/global/music",
          name: "MusicConfig",
          component: () => import("@/views/Config/Global/MusicConfig.vue"),
          meta: {
            title: "音乐列表",
            icon: "music",
          },
        },
      ],
    },
    {
      path: "/config/readme",
      name: "Readme",
      component: () => import("@/views/Config/Readme/index.vue"),
      meta: {
        title: "操作说明",
        icon: "readme",
      },
    },
  ],
};
const routes = [
  {
    path: "",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/demo",
        name: "Demo",
        component: () => import("@/views/Demo/index.vue"),
      },
      configRoutes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
