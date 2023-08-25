<template>
  <div class="info">
    <template>
      <template v-if="isSwitch">
        <ProjectC @DataClick="switchDataView"/>
      </template>
      <template v-else>
        <DataLogC @ProjectClick="switchProjectView" :macAddr="macAddr"/>
      </template>
    </template>
  </div>
</template>

<script>
import ProjectC from "../components/Project.vue";
import DataLogC from "../components/DataLog.vue";
export default {
  name: "InfoC",
  components: {
    ProjectC,
    DataLogC,
  },
  data() {
    return {
      isSwitch: true,
      macAddr:""
    };
  },
  methods: {
    switchDataView(macAddr){
        this.isSwitch = false
        this.macAddr = macAddr
    },
    switchProjectView(){
        this.isSwitch = true
    }
  },
};
</script>

<style>
</style>