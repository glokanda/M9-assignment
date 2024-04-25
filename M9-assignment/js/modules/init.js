function loadEmployees() {
  return fetch("./data/employees.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch employee data.");
      }
      return response.json();
    })
    .then((data) => {
      return data.employees;
    })
    .catch((error) => {
      console.error("Error loading employee data:", error);
      return [];
    });
}

export { loadEmployees };
