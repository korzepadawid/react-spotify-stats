import { Spin } from 'antd';
import styled from 'styled-components';

const Loader = styled(Spin)`
  width: 100%;
  margin-top: 80px;

  .ant-spin-dot-item {
    background-color: ${({ theme }) => theme.grey.main};
  }
`;

export default Loader;
