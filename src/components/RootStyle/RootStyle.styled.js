import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const RootStyle = createGlobalStyle`

body {
  background: linear-gradient(to bottom, #1c2748, #5d5959);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  margin: 0;
  overflow: hidden;

  color: white;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#root {
  
}
`;