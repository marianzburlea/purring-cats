import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledLink = styled(Link)`
  color: #fff;
  background-color: #161718;
  text-decoration: none;
  height: 60px;
  line-height: 60px;
  padding: 0 2.5rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  &:hover {
    &::before {
      top: -100%;
    }
    &::after {
      top: 0;
    }
  }

  &::before,
  &::after {
    content: attr(data-label);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 250ms;
    display: flex;
    justify-content: center;
  }

  &::before {
    background-color: #161718;
    color: #fff;
  }

  &::after {
    background-color: #dea9ff;
    color: #000;
    top: 100%;
  }
`
