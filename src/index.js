import Area from './area/main.vue'

Area.install = Vue => Vue.component(Area.name, Area)

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Area