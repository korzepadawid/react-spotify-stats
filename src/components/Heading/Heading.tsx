import styled from 'styled-components';

interface Props {
  small?: boolean;
}

const Heading = styled.h1<Props>`
  font-weight: 600;
  color: ${({ theme }) => theme.grey.dark};
  font-size: ${({ small }) => (small ? '1.6rem' : '3.6rem')};
  margin: ${({ small }) => (small ? '0' : '30px 0 0 0')};
`;

export default Heading;
