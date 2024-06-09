"use client"
// components/MyScheduler.tsx
import React, { FunctionComponent } from 'react';
import { Scheduler } from '@devexpress/dx-react-scheduler-material-ui';; // Import Scheduler library

// Define props interface conforming to Scheduler.RootProps
interface MySchedulerProps extends Scheduler.RootProps {
 
}

// Define your functional component with type FunctionComponent<MySchedulerProps>
const MyScheduler: FunctionComponent<MySchedulerProps> = (props) => {
  // Destructure props if needed
  const { children, ...otherProps } = props;

  // You can use the Scheduler component from the imported library
  return (
    <Scheduler {...otherProps}>
      {children}
    </Scheduler>
  );
};

export default MyScheduler;
