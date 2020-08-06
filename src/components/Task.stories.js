import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
 
import Task from './Task';

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
  .add('default', () => <Task task={{...taskData}} {...actionsData} />)
  .add('pinned', () => <Task task={{...taskData, state: 'TASK_PINNED' }} {...actionsData} />)
  .add('archived', () => <Task task={{...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />)