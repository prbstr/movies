export const createApiAction = (actionName = "") => {
  return {
    pending: `${actionName}/pending`,
    success: `${actionName}/fulfilled`,
    rejected: `${actionName}/rejected`,
    name: `${actionName}`,
  };
};
