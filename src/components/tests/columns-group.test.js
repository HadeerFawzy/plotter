import React from "react";
import { shallow } from "enzyme";
import ColumnsGroup from "components/plotter/columns-group";
import { findByTestAtrr, checkProps } from "utils/test-helper-functions";

const setUp = (props = {}) => {
  const component = shallow(<ColumnsGroup {...props} />);
  return component;
};

describe("ColumnsGroup Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        columns: [
          {
            name: "Column Name",
            function: "Function Type Name",
          },
        ],
        title: "Test Columns Group Title",
        setDroppedCol: jest.fn(),
      };
      const propsErr = checkProps(ColumnsGroup, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        columns: [
          {
            name: "Column Name",
            function: "Function Type Name",
          },
        ],
        title: "Test Columns Group Title",
        setDroppedCol: jest.fn(),
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "columnsGroup");
      expect(component.length).toBe(1);
    });

    it("Should render a Typography", () => {
      const typography = findByTestAtrr(wrapper, "columnTypography");
      expect(typography.length).toBe(1);
    });

    it("Should render a Box", () => {
      const columnsBox = findByTestAtrr(wrapper, "columnsBox");
      expect(columnsBox.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestAtrr(wrapper, "ColumnsGroup");
      expect(component.length).toBe(0);
    });
  });
});
