<template id="header">
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <router-link class="navbar-brand" to="/">Home</router-link>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <b>Account</b>
          </template>
          <b-dropdown-item href="/profile">Profile</b-dropdown-item>
          <b-dropdown-item href="/">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
