<template>
  <div id="app">
    <rbc-layout
      top-nav
      logo="https://i.ibb.co/5GFxj30/handcuffs-2.png"
      :router="true"
      :side-nav="sideNav"
      toggle="full"
      class="my-4"
    >
      <div class="container" slot="content">
        <div class="row">
          <div class="col-md-12">
            <transition name="fade" mode="out-in">
              <router-view />
            </transition>
          </div>
        </div>
      </div>
    </rbc-layout>
  </div>
</template>

<script>
import "rbc-wm-framework-vuejs/dist/wm/vendors/";
import "rbc-wm-framework-vuejs/dist/wm/";
import "rbc-wm-framework-vuejs/dist/wm/style-fa.css";
import "rbc-wm-framework-vuejs/dist/wm/components/style-fa.css";
import "rbc-wm-framework-vuejs/dist/wm/components/Core/style-fa.css";
import { Layout } from "rbc-wm-framework-vuejs/dist/wm/components";
export default {
  name: "App",
  components: {
    "rbc-layout": Layout
  },
  data() {
    return {
      sideNav: [
        {
          name: "Home",
          displayName: "Home",
          showInMenu: true,
          meta: {
            order: 0
          }
        },
        {
          name: "Assignment1",
          displayName: "Assignment 1",
          showInMenu: true,
          meta: {
            order: 1
          }
        },
        {
          name: "Assignment2",
          displayName: "Assignment 2",
          showInMenu: true,
          meta: {
            order: 2
          }
        },
        {
          name: "Assignment3",
          displayName: "Assignment 3",
          showInMenu: true,
          meta: {
            order: 3
          }
        },
        {
          name: "Assignment4",
          displayName: "Assignment 4",
          showInMenu: true,
          meta: {
            order: 4
          }
        }
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:300,400,400i,500,700|Roboto:300,400,400i,500,700");
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-grid.min.css");
@import "../style.css";
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.header-rule {
  width: 3.4375rem;
  border: 0;
  border-top: 4px solid #fedf01;
  text-align: left;
  margin: 2rem 0;
}
</style>
