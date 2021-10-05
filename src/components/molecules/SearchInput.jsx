import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input type="text" placeholder="input " />
      <SButtonWrapper>
        <PrimaryButton>search</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
