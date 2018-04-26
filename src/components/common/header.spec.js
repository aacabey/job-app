import { mount } from "@vue/test-utils";
import Header from "./Header";

describe("Header Component", () => {
  const wrapper = mount(Header);
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain("<h1>Job Application</h1>");
  });
});
