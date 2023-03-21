export const instanceListTypes = [
  {
    label: "Containers",
    value: "container",
  },
  {
    label: "VMs",
    value: "virtual-machine",
  },
];

export const instanceCreationTypes = [
  {
    label: "Container",
    value: "container",
  },
  {
    label: "Virtual Machine",
    value: "virtual-machine",
  },
];

export const instanceStatuses = [
  {
    label: "Running",
    value: "Running",
  },
  {
    label: "Stopped",
    value: "Stopped",
  },
];

export const booleanFieldsTrueFalse = [
  {
    label: "true",
    value: "true",
  },
  {
    label: "false",
    value: "false",
  },
];

export const booleanFieldsAllowDeny = [
  {
    label: "Allow",
    value: "true",
  },
  {
    label: "Deny",
    value: "false",
  },
];

export const booleanFieldsYesNo = [
  {
    label: "Yes",
    value: "true",
  },
  {
    label: "No",
    value: "false",
  },
];

export const diskPriorities = [...Array(11).keys()].map((i) => {
  return { label: i.toString(), value: i };
});