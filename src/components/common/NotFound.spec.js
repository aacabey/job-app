import { mount } from "@vue/test-utils";
import NotFound from "./NotFound";

describe("Not Found Component", () => {
  const wrapper = mount(NotFound);
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain("<h2>Job Not Found!</h2>");
  });
});
