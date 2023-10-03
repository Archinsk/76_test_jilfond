<template>
  <div id="employee-view" class="view">
    <template v-if="employee">
      <router-link to="/">назад</router-link>
      <img src="images/default.jpg" alt="employee photo" />
      <div class="employee-info">
        <div>{{ employee.name }}</div>
        <div>email: {{ employee.email }}</div>
        <div>phone: 010-692-6593 x 09125</div>
        <div>О себе</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          dicta distinctio eius fugit ipsum nemo nisi rem. Ab alias animi
          aspernatur blanditiis dignissimos distinctio, doloremque dolores ex
          exercitationem maiores nemo neque nesciunt nisi odio perspiciatis
          placeat quod recusandae rerum sint tempora temporibus, tenetur
          voluptates! Atque culpa doloribus enim incidunt molestiae officiis
          quisquam! Ab alias corporis distinctio dolore eveniet facere ipsa
          ipsam laudantium mollitia neque, nulla numquam omnis pariatur
          provident quae qui ratione? Doloribus exercitationem quibusdam
          recusandae voluptatibus. Accusamus adipisci alias aliquam amet commodi
          doloribus eius enim facere ipsam libero minima officiis, porro
          praesentium quo veniam? Commodi non quibusdam reiciendis repellendus?
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "EmployeeView",
  computed: {
    employees() {
      return this.$store.state.employees;
    },
    activeEmployeeId() {
      return this.$store.state.activeEmployeeId;
    },
    employee() {
      if (this.employees.length) {
        return this.employees.find((item) => item.id === this.activeEmployeeId);
      }
      return null;
    },
  },
};
</script>
