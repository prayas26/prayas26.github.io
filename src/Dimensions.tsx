import React from 'react';
import ContainerDimensions from 'react-container-dimensions';

type MyProps = {
  largeView: () => any;
  smallView: () => any;
  breakpoint?: number;
};

export default function RenderForDimension({
  breakpoint = 480,
  largeView,
  smallView
}: MyProps) {
  return (
    <ContainerDimensions>
      {({ width }) => {
        return width > breakpoint ? largeView() : smallView();
      }}
    </ContainerDimensions>
  );
}
