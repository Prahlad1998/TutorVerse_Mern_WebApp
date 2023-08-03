import React from 'react';

import { tutorContext } from '../../context/tutorContext';
import EditTutorDialog from './EditTutorDialog';
import ViewTutorDialog from './ViewTutorDialog';

const ActionsTutor = ({rowId}) => {
  return (
   <>
      <tutorContext.Provider value={{rowId}}>
          <ViewTutorDialog/>
          <EditTutorDialog/>
      </tutorContext.Provider>
   </>
  )
}

export default ActionsTutor;