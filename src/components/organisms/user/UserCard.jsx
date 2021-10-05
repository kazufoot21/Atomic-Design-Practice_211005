import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <SDl>
        <UserIconWithName img={user.img} name={user.name} />
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>co</dt>
        <dd>{user.company.name}</dd>
        <dt>web</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
