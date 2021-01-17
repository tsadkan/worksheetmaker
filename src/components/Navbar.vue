<template lang="html">
  <b-navbar>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/work-sheets' }">
          My worksheets
      </b-navbar-item>
    </template>
    <template #end>
        <b-navbar-item tag="div">
            <b-navbar-dropdown label="Account">
                <b-navbar-item href="#">
                    Login
                </b-navbar-item>
            </b-navbar-dropdown>
        </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: 'navbar',
};
</script>
