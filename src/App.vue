<template>
  <v-app id="sandbox">
    <v-navigation-drawer v-model="primaryDrawer.model" clipped :permanent="primaryDrawer.type === 'permanent'" :temporary="primaryDrawer.type === 'temporary'" app overflow>
      <v-list nav>

        <v-list-item v-for="item in navBarItems" :key="item.title" :to="item.link">
          <v-list-item-icon> <v-icon>{{ item.icon }}</v-icon> </v-list-item-icon>
          <v-list-item-content> <v-list-item-title>{{ item.title }}</v-list-item-title> </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-subheader>OPTIONS</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Drawer</v-list-item-title>
            <v-radio-group v-model="primaryDrawer.type" column >
              <v-radio v-for="drawer in drawers" :key="drawer" :label="drawer" :value="drawer.toLowerCase()" primary/>
            </v-radio-group>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Theme</v-list-item-title>
            <v-switch v-model="$vuetify.theme.dark" primary label="Dark"/>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar clipped-left app>
      <v-app-bar-nav-icon v-if="primaryDrawer.type !== 'permanent'" @click.stop="primaryDrawer.model = !primaryDrawer.model"/>
      <v-toolbar-title> PadIMAC </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    navBarItems: [
      { title: 'Play', icon: 'mdi-music-note', link: '/' },
      { title: 'Configuration', icon: 'mdi-view-dashboard', link: '' },
      { title: 'help', icon: 'mdi-help-box', link: '/About' }
    ],
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: null,
      type: 'default (no property)'
    }
  })
}
</script>
