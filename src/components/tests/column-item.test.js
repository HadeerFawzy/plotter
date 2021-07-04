import React from "react";
import { shallow } from "enzyme";
import ColumnItem from "components/plotter/column-item";
import { findByTestAtrr, checkProps } from "utils/test-helper-functions";

const setUp = (props = {}) => {
  const component = shallow(<ColumnItem {...props} />);
  return component;
};

describe("ColumnItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        column: {
            name: "Column Name",
            function: "Function Type Name",
          },
        setDroppedCol: jest.fn(),
      };
      const propsErr = checkProps(ColumnItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
  
    let wrapper;
    beforeEach(() => {
      const props = {
        column: {
          name: "Column Name",
          function: "Function Type Name",
        },
        setDroppedCol: jest.fn(),
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "columnItem");
      expect(component.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestAtrr(wrapper, "columnItem");
      expect(component.length).toBe(0);
    });
  });
});
