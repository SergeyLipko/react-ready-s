import axios from 'axios';

export const basicAction = data => ({
  type: 'BASIC_ACTION',
  data
});

export const setLoadedData = data => ({
  type: 'SET_LOADED_DATA',
  data
});

export const loadData = () => dispatch => {
  return axios.get('http://localhost:4000/users')
    .then(res => {
      dispatch(setLoadedData(res.data))
    })
    .catch(err => {
      console.error('Error when loading data', err);
    })
};

