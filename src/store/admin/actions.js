export default function loadData() {
  return dispatch => (
    new Promise((resolve) => {
      dispatch({
        type: 'ADMIN',
        data: ['fun', 'sun'],
      });
      resolve();
    })
  );
}
