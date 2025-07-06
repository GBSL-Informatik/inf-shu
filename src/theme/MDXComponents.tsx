// import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import DefinitionList from '@tdev-components/DefinitionList';
import DefBox from '@tdev-components/CodeDefBox';
import DefHeading from '@tdev-components/CodeDefBox/DefHeading';
import DefContent from '@tdev-components/CodeDefBox/DefContent';
import Figure from '@tdev-components/Figure';
import SourceRef from '@tdev-components/Figure/SourceRef';
import Answer from '@tdev-components/Answer';
import String from '@tdev-components/documents/String';
import Solution from '@tdev-components/documents/Solution';
import MdxComment from '@tdev-components/documents/MdxComment';
import MdxPage from '@tdev-components/MdxPage';
import QuillV2 from '@tdev-components/documents/QuillV2';
import TaskState from '@tdev-components/documents/TaskState';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    Dl: DefinitionList,
    DefBox: DefBox,
    DefHeading: DefHeading,
    DefContent: DefContent,
    Figure: Figure,
    SourceRef: SourceRef,
    Answer: Answer,
    QuillV2: QuillV2,
    String: String,
    Solution: Solution,
    TaskState: TaskState,
    MdxPage: MdxPage,
    MdxComment: MdxComment,
    Tabs: Tabs,
    TabItem: TabItem
};
