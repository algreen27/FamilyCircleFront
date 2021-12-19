import React, { useState, ReactElement } from "react";
import { RawNodeDatum, TreeNodeDatum } from "react-d3-tree/lib/types/common";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import AddFamilyMember from "../AddFamilyMember/AddFamilyMember";

const Tree = dynamic(() => import("react-d3-tree"), {
  ssr: false,
});

interface FamilyTreeProps {}

function FamilyTree({}: FamilyTreeProps): ReactElement {
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({
    name: "Root",
    children: [],
  });
  const [node, setNode] = useState<undefined | TreeNodeDatum>(undefined);
  const close = () => setNode(undefined);

  const handleSubmit = (name: string) => {
    const newTree = bfs(node.name, tree, name);

    if (newTree) {
      setTree(newTree);
    }
  };

  return (
    <div>
      <Box h="100vh" w="100vw">
        <Tree
          data={tree}
          onNodeClick={(datum) => setNode(datum)}
          translate={{ x: 600, y: 300 }}
        />
        <AddFamilyMember
          isOpen={Boolean(node)}
          onClose={close}
          onSubmit={handleSubmit}
        />
      </Box>
    </div>
  );
}

function bfs(
  name: string,
  tree: RawNodeDatum | RawNodeDatum[],
  newNodeName: string
) {
  const queue: RawNodeDatum[] = [];

  queue.unshift(tree as RawNodeDatum);

  while (queue.length > 0) {
    const currNode = queue.pop();

    if (currNode.name === name) {
      currNode.children.push({
        name: newNodeName,
        children: [],
      });
      return { ...tree };

    }
  
    const len = currNode.children.length;

    for (let i = 0; i < len; i++) {
    queue.push(currNode.children[i]);
    }
  }
}
export default FamilyTree;
