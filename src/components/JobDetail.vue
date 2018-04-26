<template>
    <div class="container">
        <table class="table table-borderless">
            <tbody>
                <tr>
                    <th scope="row">Company Name</th>
                    <td>{{jobDetail.companyName}}</td>
                </tr>
                <tr>
                    <th scope="row">Position</th>
                    <td>{{jobDetail.positionName}}</td>
                </tr>
                <tr>
                    <th scope="row">Address</th>
                    <td>{{jobDetail.address}}</td>
                </tr>
                <tr>
                    <th scope="row">Town</th>
                    <td>{{jobDetail.townName}}</td>
                </tr>
                <tr>
                    <th scope="row">City</th>
                    <td>{{jobDetail.cityName}}</td>
                </tr>
                <tr>
                    <th scope="row">Phone</th>
                    <td>{{jobDetail.contactPhone.countryCallingCode+"-"+jobDetail.contactPhone.areaCode+"-"+jobDetail.contactPhone.number}}</td>
                </tr>
            </tbody>
        </table>
        <button id="apply-job" @click="navigateToJobList" class="btn btn-outline-primary">Apply</button>
    </div>
</template>

<script>
import { getJobDetailById } from "../data/jobDetailData";

export default {
  data() {
    return {
      jobDetail: getJobDetailById(this.$route.params.id)
    };
  },
  components:{
  },
  methods: {
    navigateToJobList() {
      this.$router.push({ name: "jobList" });
    }
  },
  watch: {
    $route(to, from) {}
  }
};
</script>