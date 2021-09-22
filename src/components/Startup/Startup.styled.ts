import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

export const SvgIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Dark = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: #333;
`;
