<template>
<div>
  <div>
      <div class="d-flex">
        <select class="form-control" v-model="selectedCity">
          <option id="select-option" value="" disabled>Choose City</option>
          <option id="select-option" v-for='(city, index) in cityList' :key='index'>{{city}}</option>
        </select>
        <input class="form-control" v-model="searchText" placeholder="Keyword"/>
      </div>
      <hr>
      <not-found v-show="filteredJobs.length == 0"/>
      <div id="job-row" class="d-flex p-2" v-for='(job, index) in filteredJobs' :key='index' @click="navigateToJobDetail(job.jobId)">
          <img class="mr-3" :src="job.imageUrl" alt="Generic placeholder image" height="100" width="100">
          <div class="media-body">
              <h3 class="mt-0">{{job.positionName}}</h3>
              <h4 class="mt-0">{{job.companyName}}</h4>
              <h5 class="mt-0">{{job.cityName}}</h5>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import { jobListData } from "../data/jobListData";
import { cityList } from "../data/cityList";
import NotFound from "./common/NotFound.vue";

export default {
  data() {
    return {
      jobList: jobListData.result.items,
      cityList: cityList,
      searchText: "",
      selectedCity: ""
    };
  },
  components: {
    notFound: NotFound
  },
  computed: {
    filteredJobs() {
      return this.jobList.filter(job => {
        let cityResult = job.cityName.match(this.selectedCity);
        let textResult =
          job.positionName.match(this.searchText) ||
          job.companyName.match(this.searchText);
        return cityResult && textResult;
      });
    }
  },
  methods: {
    navigateToJobDetail(id) {
      this.$router.push({ path: "/jobdetail/" + id });
    }
  }
};
</script>
