import { Popover as PopoverA, PopoverProps as PopoverPropsA } from "antd";
type PopoverProp = PopoverPropsA;
export const Popover = (props: PopoverProp) => {
  return <PopoverA {...props} />;
};
