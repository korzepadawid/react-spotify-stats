import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { getPathname } from '../../utils';
import useAppState from '../../hooks/useAppState';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setTimeRange } from '../../actions';

const { Item } = Menu;

const StyledMenu = styled(Menu)`
  background-color: transparent;
  margin-top: 20px;
  border: none;
  width: 100%;
`;

const StyledItem = styled(Item)`
  font-weight: 600;

  &.ant-menu-item {
    margin: 0 20px 0 0 !important;

    &-selected,
    &:hover {
      color: ${({ theme }) => theme.primary}!important;
      border-bottom-color: ${({ theme }) => theme.primary}!important;
    }
  }
`;

const items = [
  { key: 'short_term', label: '1 Month' },
  { key: 'medium_term', label: '6 Months' },
  { key: 'long_term', label: 'All the time' },
];

const TimeRangeMenu = () => {
  const key = getPathname();
  const { timeRange } = useAppState();
  const appDispatch = useAppDispatch();

  const current = timeRange[key as keyof typeof timeRange];

  const handleChange = (e: MenuInfo) => {
    const value = e.key.toString();
    appDispatch(setTimeRange(key, value));
  };

  return (
    <StyledMenu onClick={handleChange} selectedKeys={[current]} mode="horizontal">
      {items.map(item => (
        <StyledItem key={item.key}>{item.label}</StyledItem>
      ))}
    </StyledMenu>
  );
};

export default TimeRangeMenu;
