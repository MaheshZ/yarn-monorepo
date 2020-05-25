import React from 'react';
import {AppButton} from './index'
export default { title: 'AppButton' };

export const defaultButton = () => <AppButton >
    My AppButton </AppButton>

export const withEmoji = () => (
    <AppButton>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </AppButton>
  );

  export const withHTML = () => <AppButton >
   <span style={{backgroundColor:'#FFAAAA'}}> My AppButton </span></AppButton>
   