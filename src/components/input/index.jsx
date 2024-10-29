import { Icon, InputField, InputWrapper } from "./style";

// eslint-disable-next-line react/prop-types
export const Input = ({ icon, ...rest }) => {
  return (
    <InputWrapper>
      {icon && <Icon>{icon}</Icon>}
      <InputField {...rest} />
    </InputWrapper>
  );
};
