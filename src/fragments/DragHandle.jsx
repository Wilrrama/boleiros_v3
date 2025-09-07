import styled from "styled-components";
import { MdDragIndicator } from "react-icons/md";

const DragHandleWrapper = styled.div`
  cursor: grab;
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  margin-right: 10px;
  user-select: none;
  display: flex;
  align-items: center;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const DragHandle = (props) => {
  return (
    <DragHandleWrapper className="drag-handle" {...props}>
      <MdDragIndicator />
    </DragHandleWrapper>
  );
};
