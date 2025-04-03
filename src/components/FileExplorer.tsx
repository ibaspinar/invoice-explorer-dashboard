
import { File, Folder, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

// Sample directory structure
const sampleFileSystem: FileNode[] = [
  {
    name: 'C:',
    type: 'folder',
    children: [
      {
        name: 'Users',
        type: 'folder',
        children: [
          {
            name: 'Admin',
            type: 'folder',
            children: [
              { name: 'Documents', type: 'folder', children: [
                { name: 'Invoice_2023.pdf', type: 'file' },
                { name: 'Invoice_2022.pdf', type: 'file' },
              ]},
              { name: 'Downloads', type: 'folder', children: [] },
            ]
          }
        ]
      },
      {
        name: 'Program Files',
        type: 'folder',
        children: [
          { name: 'Microsoft', type: 'folder', children: [] },
          { name: 'Adobe', type: 'folder', children: [] },
        ]
      },
      { name: 'Windows', type: 'folder', children: [] }
    ]
  },
  {
    name: 'D:',
    type: 'folder',
    children: [
      { name: 'Backups', type: 'folder', children: [
        { name: 'January', type: 'folder', children: [] },
        { name: 'February', type: 'folder', children: [] },
      ]},
      { name: 'Projects', type: 'folder', children: [] }
    ]
  }
];

interface TreeNodeProps {
  node: FileNode;
  level: number;
}

function TreeNode({ node, level }: TreeNodeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;
  
  const toggleOpen = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div 
        className={cn(
          "flex items-center py-1 hover:bg-gray-100 cursor-pointer",
          level === 0 ? "font-medium" : ""
        )}
        style={{ paddingLeft: `${level * 16}px` }}
        onClick={toggleOpen}
      >
        {hasChildren ? (
          isOpen ? <ChevronDown className="w-4 h-4 mr-1" /> : <ChevronRight className="w-4 h-4 mr-1" />
        ) : (
          <span className="w-4 h-4 mr-1"></span>
        )}
        
        {node.type === 'folder' ? (
          <Folder className="w-4 h-4 mr-2 text-blue-500" />
        ) : (
          <File className="w-4 h-4 mr-2 text-gray-500" />
        )}
        
        <span>{node.name}</span>
      </div>
      
      {isOpen && hasChildren && (
        <div>
          {node.children!.map((childNode, index) => (
            <TreeNode key={index} node={childNode} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileExplorer() {
  return (
    <div className="border rounded-md p-4 bg-white">
      <div className="mb-4 font-medium text-lg">File Explorer</div>
      <div className="overflow-auto">
        {sampleFileSystem.map((node, index) => (
          <TreeNode key={index} node={node} level={0} />
        ))}
      </div>
    </div>
  );
}
