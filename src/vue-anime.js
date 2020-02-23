'use strict'

import anime from 'animejs'

if (anime.default) {
  anime = anime.default
}

export default function install (Vue) {
  Vue.directive('anime', {
    bind: function bind (targets, binding) {
      var opts = Object.assign({}, binding.value, { targets: targets })
      anime(opts)
    }
  })
  Vue.prototype.$anime = anime
}
