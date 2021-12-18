import ReactFamilyTree from 'react-family-tree';
import React, { useState, ReactElement } from 'react';
// import Tree from 'react-d3-tree/lib/Tree';
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import AddFamilyMember from '../AddFamilyMember/AddFamilyMember';


const Tree = dynamic(() => import('react-d3-tree'), {
    ssr: false,
});

interface FamilyTreeProps {
    
}

function FamilyTree({}: FamilyTreeProps): ReactElement {
    const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({
        name: 'Root',
        children: [],
    });
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);

    const handleSubmit = (name: string) => {}

    return (
        <div>
        <Box h="100vh" w="100vw">
          <Tree data={tree} onNodeClick={() => setIsOpen(true)} translate={{x: 600, y:300}}/>
        <AddFamilyMember isOpen={isOpen} onClose={close} onSubmit={handleSubmit}/>
    </Box>

        </div>
    )
}


export default FamilyTree





