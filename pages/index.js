import { Resizable } from "re-resizable";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import { DndContext } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";
import Drawer from "../components/Drawer";

const DropBox = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };
  useEffect(() => {
    props.setHover(
      isOver
        ? {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          }
        : null
    );
  }, [isOver, props]);

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};

const DragBox = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
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

export default function Home() {
  const [editor, setEditor] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !editor) {
      const ReactQuill = dynamic(() => import("./ReactQuill"));
      setEditor(<ReactQuill />);
    }
  }, [editor]);

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <DragBox>Drag me</DragBox>;

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }

  const dndTest = (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <DragBox>
          <Box
            sx={{
              width: 100,
              height: 100,
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.light",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </DragBox>
        {!isDropped ? draggableMarkup : null}
        <DropBox setHover={setHover}>
          {isDropped ? draggableMarkup : "Drop here"}
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "primary.dark",
              "&:hover": hover,
            }}
          />
        </DropBox>
      </DndContext>
    </>
  );

  return (
    <Drawer>
      <Resizable
        enable={{ top: false, right: true, left: true, bottom: false }}
      >
        {editor}
      </Resizable>
    </Drawer>
  );
}
