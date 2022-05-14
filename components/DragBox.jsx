import { useDraggable } from "@dnd-kit/core";
export const DragBox = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.text,
    data: {
      index: props.index,
      text: props.text,
    },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div style={style} {...listeners} {...attributes} ref={setNodeRef}>
      {props.children}
    </div>
  );
};
