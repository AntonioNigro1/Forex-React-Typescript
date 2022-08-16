import { useState } from 'react';
import Register from './Register/Register';

export default function LayoutController() {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [loadComponent, setLoadComponent] = useState<React.FunctionComponent>()
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>, loadComponent: React.FunctionComponent) => {
    setIsShown(isShown => !isShown);
    setLoadComponent(loadComponent);

  }
  return (
    <>
      {isShown && <loadComponent />}
    </>
  )
}