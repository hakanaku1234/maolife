import * as firebase from 'firebase';
import firebaseConfig from '../../firebaseConfig';

const moment = require('moment');

// mode: sleep or rest
export function newBreathRecord(catID, breathRate, mode, recordTime) {
  return (dispatch, getState) => {
    const catPath = `cats/${catID}`;

    // const time = moment().unix();
    const newRecord = {};
    newRecord[recordTime] = { mode, breathRate };
    // var now = moment().format();

    console.log('new record', newRecord);
    firebase.database().ref(catPath).child('breathRecord').update(newRecord)
      .then(() => {
        console.log('set new breath ok');
      })
      .catch((error) => {
        console.log('add new record failed,', error);
      });
  };
}
