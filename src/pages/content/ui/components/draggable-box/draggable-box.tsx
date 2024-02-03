import Draggable, { DraggableProps } from 'react-draggable';

import { ROOT_ID } from '../../constants/element-ids';

const root = ROOT_ID.replace(/-/g, '_');

export default function DraggableBox({ children, ...props }: Partial<DraggableProps>) {
  return (
    <Draggable handle={`.${root}_sample_tools_handle`} {...props}>
      {children}
    </Draggable>
  );
}

DraggableBox.handlerClassName = `${root}_sample_tools_handle`;
