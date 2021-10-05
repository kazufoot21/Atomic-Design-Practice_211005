import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `kazu-${val}`,
    img: "https://source.unsplash.com/brFsZ7qszSY",
    email: "12345.com",
    phone: "090-123-123",
    company: {
      name: "test-company"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>User page</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
