const API_BASE_URL = "http://localhost:5000/api";
// api/transactions

export const getTransactions = (month, search, page, perPage) => {
  const url = new URL(`${API_BASE_URL}/getTransactions`);
  const params = { month, search, page, perPage };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  return fetch(url, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      return {};
    });
};

// export const getStatistics = (month) => {
//   const url = new URL(`${API_BASE_URL}/getStatistics`);
//   const params = { month };
//   console.log("input")
//   Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

//   return fetch(url, {
//     method: 'GET',
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => data)
//     .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//       return {};
//     });
// };

// TODO:
export const getStatistics = async (month) => {
  try {
    const url = new URL(`${API_BASE_URL}/getStatistics`);
    const params = { month };

    // Add query parameters to the URL
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    console.log("Fetching statistics from:", url.toString());

    // Fetch the data from the server
    const response = await fetch(url, { method: 'GET' });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse and return the JSON data
    const data = await response.json();
    console.log("inside Method=>",data);
    return data;

  } catch (error) {
    // Log and return an empty object in case of an error
    console.error('There was a problem with the fetch operation:', error);
    return {};
  }
};
// TODO:

export const getBarChartData = (month) => {
  const url = new URL(`${API_BASE_URL}/getBar-chart`);
  const params = { month };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  return fetch(url, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      return {};
    });
};
