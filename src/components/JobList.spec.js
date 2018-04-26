import { shallow } from "@vue/test-utils";
import JobList from "./JobList.vue";
import { jobListData } from "../data/jobListData";
import { cityList } from "../data/cityList";
import NotFound from "./common/NotFound.vue";

describe("Job List Component", () => {

  it("should render img for each job", () => {
    const itemCount = jobListData.result.items.length;
    const wrapper = shallow(JobList, {
      jobList: jobListData.result.items
    });
    expect(wrapper.findAll("img")).toHaveLength(itemCount);
  });

  it("show not found message when filtered job is null", () => {
    const itemCount = jobListData.result.items.length;
    const wrapper = shallow(JobList, {
      filteredJobs: null
    });
    expect(wrapper.isVisible(NotFound)).toBe(true);
  });

});
